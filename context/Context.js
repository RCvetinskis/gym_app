import React, { createContext, useState, useReducer } from "react";

const UserContext = createContext();

const initialState = {
  user: null,
  error: "",
  loading: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, user: action.payload };
    case "FETCH_FAIL":
      return { ...state, error: action.payload };
    case "LOG_OUT":
      return { ...state, user: null };
    default:
      return state;
  }
};
function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [completed, setCompleted] = useState([]);
  const [workout, setWorkout] = useState(0);
  const [calories, setCalories] = useState(0);
  const [minutes, setMinutes] = useState(0);
  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
        completed,
        setCompleted,
        workout,
        setWorkout,
        calories,
        setCalories,
        minutes,
        setMinutes,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
