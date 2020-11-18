import {
  IncrementVote,
  DecrementVote,
  ResetVote,
  MostVoted,
} from "../actions/types/sessions";
import { ApplyKeywordFilter, ApplyOrderFilter, ApplyVoteFilter } from "../actions/types/filters";
import {initialInformation} from './initialInformation';

export const initialState = {
  totalVotes: 0,
  allFilteredSessions: initialInformation,
  filteredSessions: initialInformation,
};

interface ISessionArray extends Array<ISession> {
}

interface ISession {
  id: number,
  title: string,
  speaker: string,
  time: string,
  room: string,
  description: string,
  vote: number,
  isMostVoted: boolean
}

export default (state: any = initialState, { type, payload }) => {
  let newFilteredSessions: ISessionArray = [];
  let numberOfVotes = 0;
  switch (type) {
    case IncrementVote:
      return {
        ...state,
        allFilteredSessions: state.allFilteredSessions.map((s) => {
          if (s.id === payload) {
            s.vote = s.vote + 1;
          }
          return s;
        }),
        totalVotes: state.totalVotes + 1,
      };

    case DecrementVote:
      return {
        ...state,
        allFilteredSessions: state.allFilteredSessions.map((s) => {
          if (s.id === payload) {
            if (s.vote > 0) {
              s.vote = s.vote - 1;
            }
          }
          return s;
        }),
        totalVotes:
          state.totalVotes > 0 ? state.totalVotes - 1 : state.totalVotes,
      };

    case ResetVote:
      return {
        ...state,
        filteredSessions: state.filteredSessions.map((s) => {
          s.vote = 0;
          s.isMostVoted = false;
          return s;
        }),
        totalVotes: 0,
      };

    case MostVoted:
      let maxVote = 0;
      state.filteredSessions.forEach((session) => {
        if (session.vote > maxVote) {
          maxVote = session.vote;
        }
      });

      return {
        ...state,
        filteredSessions: state.filteredSessions.map((s) => {
          s.isMostVoted = s.vote > 0 && maxVote > 0 && s.vote === maxVote;
          return s;
        }),
      };
    case ApplyKeywordFilter:
      // go through all the sessions
      state.allFilteredSessions.forEach((session) => {
        // go through all of the values in a session object

        Object.keys(session).forEach(element => {
          console.log('element: ', session[element]);
        });

        for (let i = 0; i < Object.keys(session).length; i++) {
          // extract the value in the key variable
          const key = Object.keys(session)[i];

          // check if our key contains the keyword
          if (session[key].toString().toLowerCase().includes(payload.toLowerCase())) {
            // if it does, add it to the filtered sessions and stop
            newFilteredSessions.push(session);

            //calculate number of votes for filtered sessions
            numberOfVotes += session.vote;
            break;
          }
        }
      });

      return {
        ...state,
        filteredSessions: [...newFilteredSessions],
        keyword: payload,
        totalVotes: numberOfVotes,
      };
    case ApplyVoteFilter:

      // go through all the sessions
      state.filteredSessions.forEach((session) => {
        // check if the vote is in the interval
        if (session.vote >= payload[0] && session.vote <= payload[1] ) {
          newFilteredSessions.push(session);
          numberOfVotes += session.vote;
        }
      });

      return {
        ...state,
        filteredSessions: [...newFilteredSessions],
        totalVotes: numberOfVotes,
      };
    case ApplyOrderFilter: 
    newFilteredSessions = [...state.filteredSessions];
      if (payload === "Ascending") {
        newFilteredSessions.sort((a, b) => {
          return a.vote - b.vote
        })
      } else if (payload === "Descending") {
        newFilteredSessions.sort((a, b) => {
          return b.vote - a.vote
        })
      }
      return {
        ...state,
        filteredSessions: [...newFilteredSessions]
      }
    default:
      return state;
  }
};
