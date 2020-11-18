import {
  ApplyKeywordFilter,
  ApplyVoteFilter,
  ApplyOrderFilter,
  SetVoteFilter,
  SetOrderFilter,
  SetKeywordFilter,
} from "./types/filters";

const setKeywordFilter = (keyword: string) => {
  return { type: SetKeywordFilter, payload: keyword };
};

const setVoteFilter = (range: [number, number]) => {
  return { type: SetVoteFilter, payload: range };
};

const setOrderFilter = (order: string) => {
  return { type: SetOrderFilter, payload: order };
};

const applyKeywordFilter = (keyword: string) => {
  return { type: ApplyKeywordFilter, payload: keyword };
};

const applyVoteFilter = (range: [number, number]) => {
  return { type: ApplyVoteFilter, payload: range };
};

const applyOrderFilter = (order: string) => ({ type: ApplyOrderFilter, payload: order });

export {
  applyKeywordFilter,
  applyVoteFilter,
  applyOrderFilter,
  setKeywordFilter,
  setVoteFilter,
  setOrderFilter,
};
