import { CLICK_IMAGE} from "../ImageTypes"

const intialState = {
    id: [],
    
}

const imageReducer = (state = intialState , action) => {

    switch(action.type){
        case CLICK_IMAGE : return{
            ...state, 
            id: [...state.id , action.Imageid ]
        }
        default: return state
    }
}

export default imageReducer