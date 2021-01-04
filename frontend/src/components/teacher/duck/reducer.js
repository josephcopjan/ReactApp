const teacherReducer = (state = { allNames: [] }, action) => {
    switch (action.type) {

        case "ALLNAMES":
            return { allNames: state.allNames.concat(action.name) }

        default:
            return state
    }

}

export default teacherReducer