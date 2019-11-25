function status(status = {}, action) {
    switch (action.type) {
        case "SET_CURRENT_USER":
            return {...status, currentUser:action.currentUser};

        default:
            return status;
    }
}

export default status;