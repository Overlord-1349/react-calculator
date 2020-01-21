import React from 'react';
import './react-calculator.css';


const calcButton = (props) => {
    let cssClasses ="calc-button-grid-item ";
    
    if (props.gridClass){
        cssClasses += props.gridClass;
    }
    return (
        <div className={cssClasses}>
            <button value={props.value} className='calc-button-btn' onClick={props.click}>{props.value}</button>
        </div>
    )
}


export default calcButton;
