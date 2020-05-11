export const Types = {
    SUBMIT_TODO: 'SUBMIT_TODO'
}

export const Actions = {
    submitTodo: (title) => ({
        type: Types.SUBMIT_TODO,
        payload: {
            title
        }
    })
}