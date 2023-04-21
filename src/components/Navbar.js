import logo from '../images/logo.svg'
import React from 'react'
import { pageLink, socialLinks } from '../data'
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                {/* <!-- left this comment on purpose --> */}
                <PageLinks parentClass='nav-links' itemClass='nav-link' />
                {/* <ul className="nav-links" id="nav-links">
                    {pageLink.map((link) => {
                        return (
                            <li key={link.id}>
                                <a href={link.href} target="_self" rel="noreferrer" className="nav-link"> {link.text} </a>
                            </li>
                        )
                    })}
                </ul> */}

                <ul className="nav-icons">
                    {/* {
                        socialLinks.map((link) => {
                            const { id, href, icon } = link
                            return (
                                <li key={id}>
                                    <a href={href} target="_blank" rel="noreferrer" className='nav-icon'>
                                        <i className={icon}></i>
                                    </a>
                                </li>
                            )
                        })
                    } */}
                    <SocialLinks classIcon="nav-icon" />

                </ul>
            </div>
        </nav>
    );
}

export default Navbar