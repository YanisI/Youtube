import React from 'react'
import { useState } from 'react'
import { ReactComponent as Menu } from '../images/menu.svg';
import { ReactComponent as Youtube } from '../images/youtube.svg';
import { ReactComponent as Loupe } from '../images/loupe.svg';
import { ReactComponent as Upload } from '../images/upload.svg';
import { ReactComponent as Application } from '../images/application.svg';
import { ReactComponent as Notification } from '../images/notification.svg';
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const [val, setVal] = useState("")
    let navigate = useNavigate();
    const handleClick = () => {
        if(val.length > 0)
        navigate(`/result/${val}`);
    }

    return (
        <div className="menu">
            <div className="menu-start">
                <Menu className="icon" />
                <NavLink
                    to="/"
                    className="link"
                >
                    <Youtube className="youtubeLogo" />

                </NavLink>
            </div>
            <div className="middle">
                <input
                    type="text"
                    className='search'
                    value={val}
                    placeholder="Rechercher"
                    onChange={(e) => setVal(e.target.value)}
                />
                <div className="btn-container"
                    onClick={() => window.scrollTo(0, 0)}>
                    <Loupe
                        className='btn-search'
                        onClick={handleClick}
                    />
                    {/* val.length > 0 ? <NavLink
                        to={`/result/${val}`}
                        className="nav"
                    >
                        <Loupe className='btn-search' 
                        />
                    </NavLink>:<div className='nav'><Loupe className='btn-search' 
    /></div>*/}
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