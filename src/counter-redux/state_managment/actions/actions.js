export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_WITH_PARAMS = "INCREMENT_WITH_PARAMS";
export const DECREMENT_WITH_PARAMS = "DECREMENT_WITH_PARAMS";
export const RESET ='RESET'

export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return { type: DECREMENT };
};
export const Reset = () => {
  return { type: RESET };
};

export const incrementWithParams = (number) => ({
  type: INCREMENT_WITH_PARAMS,
  number,
});

export const decrementWithParams = (number) => ({
  type: DECREMENT_WITH_PARAMS,
  number,
});
