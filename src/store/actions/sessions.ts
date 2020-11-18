import { IncrementVote, DecrementVote, ResetVote, MostVoted } from "./types/sessions";

const incrementVote = (id: number) => ({ type: IncrementVote, payload: id });

const decrementVote = (id: number) => ({ type: DecrementVote, payload: id });

const resetVote = () => ({ type: ResetVote });
const mostVoted = () => ({ type: MostVoted });

export {
  incrementVote,
  decrementVote,
  resetVote,
  mostVoted
}