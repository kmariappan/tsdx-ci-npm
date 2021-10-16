import React, { FC } from 'react'

export const Center:FC = ({children}) => {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'100vh', height:'100vh', padding:'0 0.5rem'}}>
            {children}
        </div>
    )
}
