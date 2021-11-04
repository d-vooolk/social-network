import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How are you?', likesCount: 11},
                {id: 2, message: 'Its my first post', likesCount: 14},
            ],
            newPostText: 'hello',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Nastya'},
                {id: 4, name: 'Sasha'}
            ],
            messages: [
                {id: 1, message: 'HI'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Yo'},
            ],
            newMessageBody: '',
        },
        sidebar: {},
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('function for rerender page');
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
}





export default store;
window.store = store;
