import { SetKeywordFilter, SetVoteFilter, SetOrderFilter } from "../actions/types/filters";

interface IState {
  keyword: string,
  voteRange: [number, number],
  order: string
}

export const initialState: IState = {
  keyword: "",
  voteRange: [0, 50],
  order: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SetKeywordFilter:
      return {
        ...state,
        keyword: payload,
      };
    case SetVoteFilter:
      return {
        ...state,
        voteRange: payload,
      };
    case SetOrderFilter:
      return {
        ...state,
        order: payload
      }
    default:
      return state;
  }
};
