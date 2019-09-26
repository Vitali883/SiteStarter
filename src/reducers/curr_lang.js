const curr_langReducer = (language, action) => {
    switch(action.ln) {
        case "en":
            return language = "en";
        case "ru":
            return language = "ru";
        case "et":
            return language = "et";
        default:
            return 'en';
    }
}

export default curr_langReducer;