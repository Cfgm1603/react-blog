import {Link,useMatch,useResolvedPath} from "react-router-dom";



export default function Navbar() { 

    
    const path = window.location.pathname
    
    return (
        <nav className= "navbar"> 
            <Link to= "/" className="web-name">
            Critics Corner
            </Link>
            <div className="nav-center">
            
            </div>

            <div className="nav-right">
            <ul>
                <CustomLink to= "/bloglist">Bloglist</CustomLink>
                <CustomLink to= "/favorites">Favorites</CustomLink>
                <CustomLink to= "/watch">Watch later</CustomLink>
                
            </ul>
            </div>
        </nav>
    )
}

function CustomLink({to, children, ...props }) {
    const resolvedpath = useResolvedPath(to)
    const isActive = useMatch({path : resolvedpath.pathname, end:true} )
    return(
        <li className={ isActive === to ? "active" : "" }>
            <Link to = {to} {...props}> {children}</Link>
        </li>
    )

}