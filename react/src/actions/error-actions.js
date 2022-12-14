
export const SHOW_ERROR_ACTION_NAME = "SHOW_ERROR_MODAL"
export const HIDE_ERROR_ACTION_NAME = "HIDE_ERROR_MODAL"

export const showError = (message) =>
    ({type: SHOW_ERROR_ACTION_NAME, payload: {message}});


