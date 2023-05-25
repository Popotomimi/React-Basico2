const Chanllenge = () => {
    
    const n1 = 6;
    const n2 = 5;

    const numbers = () => {
        console.log(n1, n2);
    }

    const soma = () => {
        console.log(n1 + n2);
    }

    const mult = () => {
        
        console.log(n1 * n2);
    }
 
    return(
        <div>
            <button onClick={mult}>multiplicar</button>
            <button onClick={numbers}>Mostrar</button>
            
                <button onClick={soma}>Somar</button>
            
                
        </div>
    );
}

export default Chanllenge;