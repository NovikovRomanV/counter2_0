import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Button";

function App() {
    const [value, setValue] = useState<number | string>(0)
    const [maxValueCounter, setMaxValueCounter] = useState(0)
    const [startValueCounter, setStartValueCounter] = useState(0)

    useEffect(() => {
        let valueLocalStorage = localStorage.getItem("valueKey")
        if (valueLocalStorage) {
            setStartValueCounter(JSON.parse(valueLocalStorage))
            setValue(JSON.parse(valueLocalStorage))
        }
        let valueLocalStorageMaxValue = localStorage.getItem("valueK")
        if (valueLocalStorageMaxValue) {
            setMaxValueCounter(JSON.parse(valueLocalStorageMaxValue))
        }
    }, [])
    useEffect(() => {
        if (startValueCounter < 0) {
            setValue("incorrect value")
        }
        if(startValueCounter >= 0){
            setValue(0)
        }
        if(maxValueCounter <= startValueCounter) {
            setValue("incorrect value")
        }
        if (startValueCounter >= 0) {
            localStorage.setItem("valueKey", JSON.stringify(startValueCounter))
        }
        if (maxValueCounter) {
            localStorage.setItem("valueK", JSON.stringify(maxValueCounter))
        }
    }, [startValueCounter, maxValueCounter])

    const countInc = () => {
        if (maxValueCounter > value) setValue(+value + 1)
    }

    const countRest = () => {
        setValue(startValueCounter)
    }


    function startValue(e: React.ChangeEvent<HTMLInputElement>) {
        const startValue = e.currentTarget.value
        if (startValue) {
            setStartValueCounter(JSON.parse(startValue))
        }
        return startValue
    }

    function maxValue(e: React.ChangeEvent<HTMLInputElement>) {
        const maxValue = e.currentTarget.value
        if (maxValue) {
            setMaxValueCounter(JSON.parse(maxValue))
        }
        return maxValue
    }

    const setValueInSpan = () => {
        setValue(startValueCounter)
    }

    let classValueSpan = value === "incorrect value" ? "span-error" : ""
    let classNameInputMaxValue = maxValueCounter === startValueCounter || maxValueCounter < 0 || maxValueCounter < startValueCounter ? "input-error" : ""
    return (
        <div className="App">
            <div className={"counter-box"}>
                <div className="count-left">
                    <div className={"input-box"}>
                        <div className={"input-div-max-value"}>
                            <div>Max value:</div>
                            <input className={`input ${classNameInputMaxValue}`} type={"number"}
                                   onChange={maxValue}
                                   value={maxValueCounter}/>
                        </div>
                        <div className={"input-div-start-value"}>
                            <div>Start value:</div>
                            <input className={`input ${startValueCounter < 0 ? "input-error" : ""}`}
                                   type={"number"}
                                   onChange={startValue} value={startValueCounter}/>
                        </div>
                    </div>
                    <div className={"button-box"}>
                        <Button title={"set"} onClick={setValueInSpan} value={value} maxValueCounter={maxValueCounter}
                                startValueCounter={startValueCounter}/>
                    </div>
                </div>
                <div className="count-right">
                    <span className={`span ${classValueSpan}`}>{value}</span>
                    <div>
                        <Button title={"inc"} onClick={countInc} value={value} maxValueCounter={maxValueCounter}
                                startValueCounter={startValueCounter}/>
                        <Button title={"reset"} onClick={countRest} value={value} maxValueCounter={maxValueCounter}
                                startValueCounter={startValueCounter}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

// "enter values and press 'set'"
export default App;

function setValue(arg0: number) {
    throw new Error('Function not implemented.');
}

