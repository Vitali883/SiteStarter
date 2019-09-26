const curr_langReducer = (language = 'en', action) => {
    switch(action.type) {
        case "en":
            return language = "en";
        case "ru":
            return language = "ru";
        case "et":
            return language = "et";
        default:
            return language = 'ru';
    }
}

export default curr_langReducer;