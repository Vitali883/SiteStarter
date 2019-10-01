const currLangReducer = (language = 'en', action) => {
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

export default currLangReducer;