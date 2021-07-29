import React from 'react';
import { connect } from 'react-redux';
import { setPost } from '../redux/index';

const List = ({post, setPost}) => {

    const onClickPost = (e) => {

        const idx = post.findIndex(p => p.title === e.target.innerText);
        console.log(idx);
        setPost(idx);
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

const mapDispatchToProps = ({ setPost });

export default connect(mapStateToProps, mapDispatchToProps)(List);