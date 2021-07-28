import React from 'react';

const Header = () => {    


    const onClickTitle = () => {
        e.preventDefault();
    }

    return(
        <>
            <header className="header">
                <div className="header-wrap">
                    <a className="title-wrap" href="#welcome" onClick={onClickTitle}>
                        <h2 className="title-txt">Hello! World Wide Web</h2>
                    </a>
                </div>
            </header>
        </>
    )
}

export default Header;