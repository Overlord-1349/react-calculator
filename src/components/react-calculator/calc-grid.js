import React from 'react';
import CalcButton from './calc-button';
const calcGrid = (props) => {
    return (
        <div className='calc-button-grid' onKeyDown={ (e) => props.keyDown(e) }> 
                <input className='calc-input-all-ops calc-button-grid-item' type='text' id={`${props.id}_all`} readOnly='readonly' />
                <input className='calc-input calc-button-grid-item' type='text' id={props.id} readOnly='readonly'  />
                <CalcButton value='C' click= { (e) => props.clear(e) }  />
                <CalcButton value='+/-' click={ (e) => props.addNumber(e.target.value) } />
                <CalcButton value='%' click= { (e) => props.addOperation(e.target.value) }  />
                <CalcButton value='/' click= { (e) => props.addOperation(e.target.value) }  />

                <CalcButton value='7' click={ (e) => props.addNumber(e.target.value) }  />
                <CalcButton value='8' click={ (e) => props.addNumber(e.target.value) }  />
                <CalcButton value='9' click={ (e) => props.addNumber(e.target.value) }  />
                <CalcButton value='*' click={ (e) => props.addOperation(e.target.value) }  />

                <CalcButton value='4' click={ (e) => props.addNumber(e.target.value) }  />
                <CalcButton value='5' click={ (e) => props.addNumber(e.target.value) }  />
                <CalcButton value='6' click={ (e) => props.addNumber(e.target.value) }  />
                <CalcButton value='-' click={ (e) => props.addOperation(e.target.value) }  />

                <CalcButton value='1' click={ (e) => props.addNumber(e.target.value) }  />
                <CalcButton value='2' click={ (e) => props.addNumber(e.target.value) }  />
                <CalcButton value='3' click={ (e) => props.addNumber(e.target.value) }  />
                <CalcButton value='+' click={ (e) => props.addOperation(e.target.value) }  />

                <CalcButton value='0' click={ (e) => props.addNumber(e.target.value) } gridClass='calc-button-grid-item-zero' />
                <CalcButton value='.' click={ (e) => props.addNumber(e.target.value) }  />
                <CalcButton value='=' click={ (e) => props.addOperation(e.target.value) }  />
                
            </div>
    );
}

export default calcGrid;