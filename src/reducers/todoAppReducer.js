const initialState = [];

const todoAppReducer = (state = initialState, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case "INIT":
      return [...payload];
    case "ADD":
      return [...state, payload];
    case "DEL":
      const newStateAfterDel = [...state];
      newStateAfterDel.splice(payload, 1);
      return newStateAfterDel;
    case "MOD":
      const newStateAfterMod = [...state];
      newStateAfterMod[payload].isCompleted = !state[payload].isCompleted;
      return newStateAfterMod;
    default:
      return state;
  }
};

export default todoAppReducer;
