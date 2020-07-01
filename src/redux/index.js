import { Types } from "../actions";
const initialState = {
    todos: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case Types.SUBMIT_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload.title],
            }
    }
    return state
}