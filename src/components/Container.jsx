import React, { useState, useRef } from 'react';
import Counter from './Counter';

const Container = () => {

    return(
        <>
            <div className="container">
                <div className="container-wrap">

                    <Counter/>

                </div>
            </div>
        </>
    )
}

export default Container;