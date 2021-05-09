import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [value, setValue] = useState(0)
    const [maxValueCounter, setMaxValueCounter] = useState(0)

    useEffect(() => {
        let valueLocalStorage = localStorage.getItem("valueKey")
        if (valueLocalStorage) {
            setValue(JSON.parse(valueLocalStorage))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("valueKey", JSON.stringify(value))
    }, [value])

    const countInc = () => {
        if(maxValueCounter>value)setValue(value + 1)
    }


    const countRest = () => {
        setValue(0)
    }

    // const setValueLocolStorage = () => {
    //     localStorage.setItem("valueKey", JSON.stringify(value))
    // }

    // const getValueLocolStorage = () => {
    //     let valueLocalStorage = localStorage.getItem("valueKey")
    //     if (valueLocalStorage) {
    //         setValue(JSON.parse(valueLocalStorage))
    //     }
    // }

    const startValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const startValue = e.currentTarget.value
        if (startValue ) {
            setValue(JSON.parse(startValue))
        }
    }

    const maxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const maxValue = e.currentTarget.value
        if (maxValue) {
            setMaxValueCounter(JSON.parse(maxValue))
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="count-left">
                    <div>
                        <div>
                            Max value: <input type={"number"} onChange={maxValue}></input>
                        </div>
                        <div>
                            Start value: <input type={"number"} onChange={startValue}></input>
                        </div>
                    </div>
                    <button>set</button>
                    {/*<button onClick={getValueLocolStorage}>get</button>*/}
                </div>
                <div className="count-right">
                    <span>{value}</span>
                    <div>
                        <button onClick={countInc}>inc</button>
                        <button onClick={countRest}>reset</button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
function setValue(arg0: number) {
    throw new Error('Function not implemented.');
}

