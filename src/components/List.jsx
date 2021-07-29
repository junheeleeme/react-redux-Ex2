import React from 'react';
import { connect } from 'react-redux';


const List = ({post}) => {

    const onClickPost = () => {
        
    }

    return(
        <>
            <div className="list">
                <h2>- List</h2>
                <ul className="post-list">
                    {
                        post.map((p, idx)=>
                            <li key={p.title+idx} onClick={onClickPost}>{p.title}</li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

const mapStateToProps = ({post}) => ({
    post : post.post
});



export default connect(mapStateToProps)(List);