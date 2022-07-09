import React from 'react'
import { useState } from 'react'
import { ReactComponent as Menu } from '../images/menu.svg';
import { ReactComponent as Youtube } from '../images/youtube.svg';
import { ReactComponent as Loupe } from '../images/loupe.svg';
import { ReactComponent as Upload } from '../images/upload.svg';
import { ReactComponent as Application } from '../images/application.svg';
import { ReactComponent as Notification } from '../images/notification.svg';

const Navbar = () => {

    const [val, setVal] = useState("")
    return (
        <div className="menu">
            <div className="menu-start">
                <Menu className="icon" />
                <Youtube className="youtubeLogo" />
            </div>
            <div className="middle">
                <input
                    type="text"
                    className='search'
                    value={val}
                    placeholder="Rechercher"
                    onChange={(e) => setVal(e.target.value)}
                />
                <div className="btn-container">
                    <Loupe className='btn-search' />
                </div>
            </div>
            <div className="end">
                <div className="icon-container upload">
                    <Upload className="icon" data-hover="aaa" />
                </div>
                <div className="icon-container application">
                    <Application className="icon" data-hover="aaa" />
                </div>
                <div className="icon-container notification">
                    <Notification className="icon" data-hover="aaa" />
                </div>
                <p>Y</p>

            </div>
        </div>
    )
}

export default Navbar