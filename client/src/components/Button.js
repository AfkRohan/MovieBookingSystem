import React from 'react'

function Button({title , onClick , variant , disabled, type}){
    let className ='bg-primary p1 textwhite btnAddMovie'
    
    return(
     <button className={className} type={type}
     onClick={onClick} disabled={disabled}>
        {title}
     </button>
       
    )
}

export default Button