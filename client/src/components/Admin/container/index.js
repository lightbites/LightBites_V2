import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStethoscope, faUserInjured, faVideo, faTooth, faGlasses, faPiggyBank, faUserTag } from '@fortawesome/free-solid-svg-icons'
import './style.css'

function Container(props){
    return (
        <div className="container">
            <div className="row justify-content-center">{props.children}</div>
            {props.state.containerBox} {props.state.containerName}
        </div>
    )
};

export default Container;