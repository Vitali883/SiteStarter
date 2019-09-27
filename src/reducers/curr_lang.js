const curr_langReducer = (language = 'en', action) => {
    switch(action.type) {
        case "en":
            return "en";
        case "ru":
            return "ru";
        case "et":
            return "et";
        default:
            return language;
    }
}

export default curr_langReducer;