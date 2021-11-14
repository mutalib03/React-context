
export const bookReducer =  (state, action) => {
switch(action.type) {
    case "ADD_BOOK" : 
    return [...state, {
        title: action.payload.title,
        author: action.payload.author,
        id: 4
    }]

    case "REMOVE_BOOK" : 
    return (state.filter(book=> book.author !== action.payload))

    default: 
    return state
}

}        