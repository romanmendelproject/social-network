const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD_MESSAGE";

const dialogsReduser = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreater = () => ({
  type: ADD_MESSAGE,
});

export const updateNewMessageTextActionCreater = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReduser;
