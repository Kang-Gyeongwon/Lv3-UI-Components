const TOGGLE = "isOnModal/TOGGLE";

export const toggleModal = (isOn) => {
    return {
        type: TOGGLE,
        payload: isOn
    }
}

const initialState = {
    isOnModal: false,
}

// Reducer
const isOnModal = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE:
            return {
                isOnModal: action.payload
            }
        default:
            return state;
    }
}

export default isOnModal;