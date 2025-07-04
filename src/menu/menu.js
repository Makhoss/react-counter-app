import { Link } from "react-router-dom"

export const Menu = () => {
    return ( 
        <ul>
            <li><Link to='/counter' >counter </Link></li>
            <li><Link to='/counter-redux'>counter redux</Link></li>
        </ul>
    )
}