import React from 'react'

function Button({title , onClick , variant , disabled}){
    let className ='bg-primary p1 textwhite'
    
    return(
     <button className={className}>
        {title}
     </button>
       
    )
}

export default Button