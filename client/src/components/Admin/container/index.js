import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStethoscope, faUserInjured, faVideo, faTooth, faGlasses, faPiggyBank, faUserTag } from '@fortawesome/free-solid-svg-icons'
import './style.css'

function Container(props){
    return (
        <div className="container">
            <div className="row justify-content-center">{props.children}</div>
            This should be the location for the data to display. I am located at src/components/Admin/container/index.js
        </div>
    )
};

export default Container;