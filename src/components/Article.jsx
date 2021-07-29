
import React from 'react';
import { connect } from 'react-redux';
import { setPost } from '../redux/index';


const Article = ({currentPost, setPost}) => {
    
    

    return(
        <>
            
            <article className="article">
            <h2>- Article</h2>
 
            <h3>{currentPost.title}</h3>
            <p>{currentPost.body}</p>

                <h2></h2>
                <p></p>
                <p></p>
            </article>
        </>
    )
}

const mapStateToProps = ({post}) => ({
    currentPost : post.currentPost
})


export default connect(mapStateToProps)(Article);