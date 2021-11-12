const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}



const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [ ...state.messages, { id: 6, message: body } ]
            };
        }

        default: return state;
    }

}


export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;