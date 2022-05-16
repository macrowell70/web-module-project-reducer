import React, { useReducer } from 'react';

import reducer, { initialState } from '../reducers/index';
import { applyNumber, changeOperation, clearDisplay, mPlus } from '../actions/index';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleClickNum = (number) => {
    dispatch(applyNumber(number))
  }

  const handleClickOp = (operation) => {
    dispatch(changeOperation(operation))
  }

  const handleClickClear = () => {
    dispatch(clearDisplay())
  }

  const handleClickMPlus = () => {
    dispatch(mPlus())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => handleClickMPlus()}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleClickNum(1)}/>
              <CalcButton value={2} onClick={() => handleClickNum(2)}/>
              <CalcButton value={3} onClick={() => handleClickNum(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleClickNum(4)}/>
              <CalcButton value={5} onClick={() => handleClickNum(5)}/>
              <CalcButton value={6} onClick={() => handleClickNum(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleClickNum(7)}/>
              <CalcButton value={8} onClick={() => handleClickNum(8)}/>
              <CalcButton value={9} onClick={() => handleClickNum(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleClickOp("+")}/>
              <CalcButton value={"*"} onClick={() => handleClickOp("*")}/>
              <CalcButton value={"-"} onClick={() => handleClickOp("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => handleClickClear()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
