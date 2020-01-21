import React, { Component } from 'react';
import CalcGrid from '../components/react-calculator/calc-grid';
import Calculator from './calculator';

class ReactCalculator extends Component{

    constructor(props){
        super(props);
        let id = this.props.id ? this.props.id : Math.random().toString(36).substring(7);
        this.state = {
            calc: new Calculator(),
            id: id,
            inpAll: `${id}_all`
        }
        console.log(this.state.id);
    }

    set inputValue(value){
        document.getElementById(this.state.id).value = value;
    }

    get inputValue(){
        return document.getElementById(this.state.id).value;
    }

    set inputValueAll(value){
        document.getElementById(this.state.inpAll).value = value;
    }

    get inputValueAll(){
        return document.getElementById(this.state.inpAll).value;
    }

    _showAllOps = () => {
        var outputAll = "";
        this.state.calc.operations.forEach((oper) => {
            outputAll += `${oper.number} ${oper.operation} `;
        });
        this.inputValueAll = outputAll;
    }
    
    clear = (e) =>{
        this.inputValue = "";
        this.inputValueAll = "";
        let calc = this.state.calc;
        calc.empty();
        this.setState({calc: calc});
    }

    addNumber = (value) => { 
        if (value === '+/-' && this.inputValue.length > 0){
            
            this.inputValue = this.inputValue.substring(0, 1) === '-' ? 
            this.inputValue.substring(1, (this.inputValue.length)) : 
            `-${this.inputValue}`;
        }
        else if(value === '.' && this.inputValue.length > 0 && this.inputValue.indexOf('.') < 0){
            this.inputValue += value;
        }
        else if(!isNaN(value)){
            this.inputValue += value;
        }
    }

    addOperation = (value) => {
        let calc = this.state.calc;
        calc.add(this.inputValue, value);
        this.setState({calc: calc});
        this.inputValue = "";
        this._showAllOps();
        console.log(this.state.calc.operations);
        if (value === Calculator.equals){
            this.calculateTotal();
        }
    }

    calculateTotal = () => {
        this._showAllOps();
        this.inputValue = this.state.calc.getTotal();
    }

    keyDown = (e) => {
        let value = e.key
        console.log(e.keyCode, value, e.key);
        if (!isNaN(value) || value === '.'){
            this.addNumber(value);
            return true;
        }
        else if (Calculator.isValidOperation(e.key)){
            this.addOperation(e.key);
        }
        else if (e.which === 13){
            this.addOperation(Calculator.equals);
        }
        return false;
    }

    render() {
        return (
            <div>
                <CalcGrid 
                    id={`${this.state.id}`}
                    clear={this.clear}
                    addNumber={this.addNumber}
                    addOperation={this.addOperation}
                    keyDown={this.keyDown}
                    /> 
            </div>
        )
    }
}


export default ReactCalculator;