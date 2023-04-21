import React from 'react'
import { socialLinks } from '../data'

const SocialLinks = ({ classIcon }) => {
    return (
        <ul className="footer-icons">
            {socialLinks.map(link => {
                const { id, href, icon } = link
                return (
                    <li key={id}>
                        <a href={href} target="_blank" rel="noreferrer" className={classIcon}>
                            <i className={icon}></i>
                        </a>
                    </li>
                )
            })}

        </ul>
    )
}

export default SocialLinks