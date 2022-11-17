import React, { createContext, useState, useReducer } from "react";

// const FitnessItems = createContext();
// const FitnessContext = ({ children }) => {
//   const [completed, setCompleted] = useState([]);
//   const [workout, setWorkout] = useState(0);
//   const [calories, setCalories] = useState(0);
//   const [minutes, setMinutes] = useState(0);

//   return (
//     <FitnessItems.Provider
//       value={{
//         completed,
//         setCompleted,
//         workout,
//         setWorkout,
//         calories,
//         setCalories,
//         minutes,
//         setMinutes,
//       }}
//     >
//       {children}
//     </FitnessItems.Provider>
//   );
// };
const UserContext = createContext();

const initialState = {
  user: null,
  error: "",
  loading: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUREST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, user: action.payload };
    case "FETCH_FAIL":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
