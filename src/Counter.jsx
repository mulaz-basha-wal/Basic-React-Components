import {useState} from 'react';

// Component for counting
function Counter() {
    let [count, setCount] = useState(0);
    
    function increase(){
        setCount(count+2);
    }
    function decrease(){
        setCount(count-2);
    }
    function showCount(){
        alert(count);
    }
    function reset() {
        setCount(0);
    }
    return(
        <div className='counterContainer'>
            <h1>Count = {count}</h1> <br />
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={showCount}>Show Count</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;