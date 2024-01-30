import React from 'react';
import { useState, useEffect } from 'react';

function ListTrainerComplete({ array, objTrainer, keyboard, selectTrainerByValueOfInput, select}) {


    //UseState
    const [showList, setShowList] = useState(false);
    const [showSelectButton, setShowSelectButton] = useState(false);


    const handleButtonClick = () => {
        if (showList === true) {
            setShowList(false);
        } else {
            setShowList(true);
        }
    };

    useEffect(() => {
        showButton();
    });

    const showButton = () => {
        var inputElement = document.getElementById("input");
        var inputValue = inputElement.value;
        var inputValueNumber = parseInt(inputValue);
        if (inputValueNumber <= 0 || inputValue === "") {
            setShowSelectButton(false);
        } else {
            setShowSelectButton(true);
        }
    }

    
    return (
        <div className="listTrainerComplete">
            {
                showSelectButton
                    ?
                    <div className="inputListTrainerComplete">
                        <input id="input" type="number" placeholder="Trainer ID" value={objTrainer} name="id" onChange={keyboard}/>
                        <button id="buttonSelect" onClick={selectTrainerByValueOfInput}>Select</button>
                    </div>
                    :
                    <div className="inputListTrainerComplete">
                        <input id="input" type="number" placeholder="Trainer ID" value={objTrainer} name="id" onChange={keyboard}/>
                    </div>
            }
            {
                showList
                    ? //true
                    <div>
                        <div className="buttonListTrainerComplete">
                            <button id="buttonShow" onClick={handleButtonClick}>Show List</button>
                        </div>
                        <div className="listTrainers">
                            {
                                array.map((obj, index) => (
                                    <ul id="list" key={index}>
                                        <button id="buttons" onClick={() => {select(index)}} > {obj.name} ID: {obj.id}</button>
                                    </ul>
                                ))
                            }
                        </div>
                    </div>
                    : //false
                    <div className="buttonListTrainerComplete">
                        <button id="buttonShow" onClick={handleButtonClick}>Show List</button>
                    </div>
            }
        </div>
    )
}

export default ListTrainerComplete;