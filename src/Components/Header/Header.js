import React from 'react'
import './header.sass'

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="cont">
                    <a href="/" className="logo">Sleep <span>Calculator</span></a>
                </div>
            </div>
        </header>
    )
}

export default Header