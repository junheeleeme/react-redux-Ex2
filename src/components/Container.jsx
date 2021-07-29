import React from 'react';
import Article from './Article';
import Write from './Write';
import List from './List';


const Container = () => {

    return(
        <>
            <div className="container">
                <div className="container-wrap">

                    <List/>
                    <Write/>
                    <Article/>

                </div>
            </div>
        </>
    )
}

export default Container;