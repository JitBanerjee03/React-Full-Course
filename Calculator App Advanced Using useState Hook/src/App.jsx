import { useState } from 'react';
import './App.css'
import BtnContainer from './btnContainer';
import DisplayComponent from './DisplayComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const keyArray=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']

function App() {
  const [expr,setExpr]=useState('');

  let setOnbtnClick=(event,btn)=>{
    console.log(btn);

    if(btn==='C'){
      setExpr('');
    }else if(btn==='='){
      let newExpr=eval(expr);
      setExpr(newExpr)
    }else{
      let newExpr=expr+btn;
      setExpr(newExpr);
    }
  }

  return (
    <>
        <center>
          <div className="OuterDiv">
            <h1>Calculator App</h1>
            <DisplayComponent displayValue={expr}></DisplayComponent>
            <BtnContainer btnArr={keyArray} setOnbtnClick={setOnbtnClick}></BtnContainer>
          </div>
        </center>
    </>
  )
}

export default App
