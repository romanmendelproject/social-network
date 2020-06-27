import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";



let store = {
  _state: {
    dialogsPage: {
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
      newMessageText: "Message",
    },

    profilePage: {
      postData: [
        { id: 1, message: "111111111", likesCount: 12 },
        { id: 2, message: "222222222", likesCount: 11 },
        { id: 3, message: "333333333", likesCount: 2 },
        { id: 4, message: "444444444", likesCount: 1 },
        { id: 5, message: "444444444", likesCount: 55 },
      ],
      newPostText: "Hello1",
    },

    friends: {
      friendsData: [
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
        {
          id: 5,
          name: "Valera",
          face: "https://miro.medium.com/max/792/1*IlfcghwBI5Z_i9XZ65kgZQ.png",
        },
        {
          id: 6,
          name: "Borya",
          face:
            "https://noahmjacobs.com/static/images/computer-vision/proj4/jackson.jpg",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _rerenderEntireTree() {
    console.log("Changed");
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._rerenderEntireTree(this._state);
  },
};

export default store;
