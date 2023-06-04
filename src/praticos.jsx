import React from 'react'   

export default function Cor(props) {
    return (
        <a style={{color: props.cor}}>{props.children}</a>
    )
}
