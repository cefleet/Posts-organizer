function posts(posts = [], action) {
    switch (action.type) {
        case "FETCH_POSTS":
            return action.data;

        case "DATA_ERROR":
            return action.error

        default:
            return posts;
    }
}

export default posts;