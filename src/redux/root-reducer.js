let initialState = {
    hourDropdown: 0,
    minuteDropdown: 0
}

let rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_DROPDOWN':
            if (action.data.type === 'hour') {
                
                return {
                    ...state,
                    hourDropdown: action.data.value
                }
            }
            if (action.data.type === 'minute') {
                return {
                    ...state,
                    minuteDropdown: action.data.value
                }
            }

        default:
            return state
    }
}

export const setDropdown = (type, value) => ({type: 'SET_DROPDOWN', data: { type, value }})

export default rootReducer;