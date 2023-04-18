import React from 'react';
import { useLocation } from "react-router-dom";



function BlogPost (){
    
        const location = useLocation();
        console.log(location.state);//"any type"
      
        
      
    
    
    
    return (
        <div>
            <h1> jj </h1>
        </div>
    )
}
export default BlogPost;