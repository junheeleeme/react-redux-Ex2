
// types.js -> reducer.js -> rootReducer.js

import { ADD_POST, REMOVE_POST, SET_POST } from "./types"

const initialState = {
    isLoad : false,
    post : [
        {
            title : 'HTML',
            body : 'HTML is...',
        },
        {
            title : 'CSS',
            body : 'CSS is...',
        },
        {
            title : 'JavaScript',
            body  : 'JavaScript is ...'
        },
    ],
    currentPost : {
        
    }
}

const postReducer = (state = initialState, action) =>{

    console.log(action.data);

    switch(action.type){
        case ADD_POST :
            
            return {
                ...state,
                post : state.post.concat(action.data)
            }

        case REMOVE_POST :
            
            return {
                ...state,
                post : action.post.concat(action.data)
            }

        case SET_POST :

            return {
                ...state,
                currentPost : state.post[action.data]
            }

        default : return state

    }
}


export default postReducer;
