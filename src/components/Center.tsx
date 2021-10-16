import React, { FC } from 'react'

export const Center:FC = ({children}) => {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            {children}
        </div>
    )
}
