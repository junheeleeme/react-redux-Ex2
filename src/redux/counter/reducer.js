import { ADD_COUNT, MINUS_COUNT } from "./types"


const initialState = {
    count : 300
}

const counterReducer = (state = initialState, action) =>{
    
    switch(action.type){
        case ADD_COUNT :
            console.log(action.data);
            return {...state,
                        count : state.count + 1
            }
        case MINUS_COUNT :
            console.log(action.data);
            return {...state,
                        count : state.count - 1
            }
        default : return state

    }
}

export default counterReducer;