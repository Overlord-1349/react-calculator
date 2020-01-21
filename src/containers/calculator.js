class Calculator {
    
    constructor(){
        this.ops = [];
    }
    
    empty = () => {
        this.ops = [];
    }

    add = (number, operation) => {
        try {
            this.ops.push( {
                'number': Number(number),
                'operation': operation
            });
            return true;
        } catch (error) {
            return false;
        }
    }

    getTotal = () => {
        var total = undefined;
        var prior_op = undefined;
        this.ops.forEach((operation) => {
            if (prior_op) {
                switch(prior_op.operation){
                    case Calculator.addition:
                        total = total ? total + operation.number : prior_op.number + operation.number; 
                        break;
                    case Calculator.substraction:
                        total = total ? total - operation.number : prior_op.number - operation.number; 
                        break;
                    case Calculator.multiplication:
                        total = total ? total * operation.number : prior_op.number * operation.number; 
                        break;
                    case Calculator.division:
                        total = total ? total / operation.number : prior_op.number / operation.number;  
                        break;
                    case Calculator.mathModule:
                        total = total ? total % operation.number : prior_op.number % operation.number;  
                        break;
                    default:
                        break;
                }
            }
            prior_op = operation;
        });
        return total;
    }

    get operations(){
        return this.ops;
    }

    static get addition(){
        return "+";
    }

    static get substraction(){
        return '-';
    }

    static get multiplication(){
        return '*';
    }

    static get division(){
        return "/";
    }

    static get equals(){
        return "=";
    }
    
    static get mathModule(){
        return "%";
    }

    static isValidOperation(oper){
        return  (oper === Calculator.addition || 
            oper === Calculator.substraction || 
            oper === Calculator.multiplication || 
            oper === Calculator.division || 
            oper === Calculator.equals || 
            oper === Calculator.mathModule ) ? true : false;
    }
}

export default Calculator;