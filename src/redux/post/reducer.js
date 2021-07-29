
import { ADD_POST, REMOVE_POST, SET_POST } from "./types"


const initialState = {
    isLoad : false,
    post : [
        {
            title : '첫 번째 게시글',
            body : '내용',
            writer : '홍길동'
        }
    ],
    currentPost : {
        title : 'hello',
        body  : '123'
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
                currentPost : action.data
            }

        default : return state

    }
}


export default postReducer;