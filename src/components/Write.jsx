import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost, removePost } from '../redux/index';


const write = ({post, addPost}) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onSubmitBtn = () => {
        addPost([
            {
                title : title,
                body : body
            }
        ])
    }

    return(
        <>
            <div className="write-wrap">
            <h2>- write</h2>
                <input onChange={(e)=> (setTitle(e.target.value))} type="text" className="titleInput" />
                <textarea onChange={(e)=> (setBody(e.target.value))} className="bodyInput" />
                <button type="button" onClick={onSubmitBtn} className="submitInput">제출하기</button>

            </div>
        </>
    )
}

const mapStateToProps = ({post}) => ({
    post : post.post
});

const mapDispatchToProps = ({addPost, removePost});


export default connect(mapStateToProps, mapDispatchToProps)(write);