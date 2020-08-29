import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const journalReducer = (journals, action) => {
  switch (action.type) {
    case "editJournal":
      return journals.map((journal) => {
        if (journal.id === action.payload.id) {
          return action.payload;
        } else {
          return journal;
        }
      });
    case "deleteJournal":
      return journals.filter((journal) => journal.id != action.payload);
    // When first fetching list of journals when app renders
    case "getJournals":
      return action.payload;
    default:
      return journals;
  }
};

const addJournal = (dispatch) => {
  // This function returns another function that will call the dispatch with appropriate action type.
  return async (title, content, callBack) => {
    const response = await jsonServer.post("/journals", { title, content });
  };
};

const getJournals = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/journals");
    // response.data === array of journals
    dispatch({ type: "getJournals", payload: response.data });
  };
};

const editJournal = (dispatch) => {
  // This function returns another function that will call the dispatch with appropriate action type.
  return async (id, title, content, callBack) => {
    await jsonServer.put(`journals/${id}`, { title, content });
    dispatch({ type: "editJournal", payload: { id, title, content } });
    if (callBack) {
      callBack();
    }
  };
};

const deleteJournal = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`journals/${id}`);
    // we can either dispatch an action or load the list on the index screen
    dispatch({ type: "deleteJournal", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  journalReducer,
  { addJournal, deleteJournal, editJournal, getJournals },
  []
);
