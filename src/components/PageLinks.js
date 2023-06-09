import React from 'react'
import { pageLink } from '../data'

const PageLink = ({ parentClass, itemClass }) => {
    return (
        <ul className={parentClass} >
            {pageLink.map((link) => {
                return (
                    <li key={link.id}>
                        <a href={link.href} target="_self" rel="noreferrer" className={itemClass}>{link.text}</a>
                    </li>
                )
            })}
        </ul>
    )
}

export default PageLink