const ADD_MESSAGE = "ADD_MESSAGE";

type addMessageActionType = {
  type: typeof ADD_MESSAGE
  newMessageBody: string
}


type DialogsActionType = addMessageActionType

let initialState = {
  dialogsData: [
    {
      id: 1,
      name: "Inna",
      face:
        "https://i.dailymail.co.uk/i/pix/2014/10/21/1413904504297_Image_galleryImage_07_Oct_2014_Los_Angeles_C.JPG",
    },
    {
      id: 2,
      name: "Marina",
      face:
        "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
    },
    {
      id: 3,
      name: "Inga",
      face:
        "https://cdn.shopify.com/s/files/1/0279/3517/8823/products/WhatsAppImage2020-05-14at1.54.10PM_1_530x@2x.jpg",
    },
    {
      id: 4,
      name: "Sveta",
      face:
        "https://petapixel.com/assets/uploads/2019/02/download-1-800x800.jpeg",
    },
  ],

  messagesData: [
    { id: 1, message: "Hiddasdadada sadasdadas sadsadsadasad" },
    { id: 2, message: "Yo" },
    { id: 3, message: "Privet" },
    { id: 4, message: "Hello" },
  ],
};

type InitialStateType = typeof initialState;


const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionType): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: action.newMessageBody,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };

    default:
      return state;
  }
};

export const addMessageActionCreater = (newMessageBody: string) => ({
  type: ADD_MESSAGE,
  newMessageBody
});


export default dialogsReducer;
