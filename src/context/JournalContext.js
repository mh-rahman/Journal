import createDataContext from "./createDataContext";
import { State } from "react-native-gesture-handler";

const journalReducer = (journals, action) => {
  switch (action.type) {
    case "addJournal":
      return [
        ...journals,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Journal #${journals.length + 1}`,
        },
      ];
    case "deleteJournal":
      return journals.filter((journal) => journal.id != action.payload);
    default:
      return journals;
  }
};

const addJournal = (dispatch) => {
  // This function returns another function that will call the dispatch with appropriate action type.
  return () => {
    dispatch({ type: "addJournal" });
  };
};

const deleteJournal = (dispatch) => {
  return (id) => {
    dispatch({ type: "deleteJournal", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  journalReducer,
  { addJournal, deleteJournal },
  []
);
