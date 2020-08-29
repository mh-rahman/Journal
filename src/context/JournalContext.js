import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const journalReducer = (journals, action) => {
  switch (action.type) {
    case "addJournal":
      return [
        ...journals,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
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

const getJournals = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/journals");
    // response.data === array of journals
    dispatch({ type: "getJournals", payload: response.data });
  };
};

const addJournal = (dispatch) => {
  // This function returns another function that will call the dispatch with appropriate action type.
  return async (title, content, callBack) => {
    const response = await jsonServer.post("/journals", { title, content });

    dispatch({ type: "addJournal", payload: { title, content } });
    if (callBack) {
      callBack();
    }
  };
};

const editJournal = (dispatch) => {
  // This function returns another function that will call the dispatch with appropriate action type.
  return (id, title, content, callBack) => {
    dispatch({ type: "editJournal", payload: { id, title, content } });
    if (callBack) {
      callBack();
    }
  };
};

const deleteJournal = (dispatch) => {
  return (id) => {
    dispatch({ type: "deleteJournal", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  journalReducer,
  { addJournal, deleteJournal, editJournal, getJournals },
  []
);
