import React from 'react'
import './tipCalculator.css'
import { useState, useRef } from 'react';


const initialState = { bill: '', rate: "0", tip: 0, total: 0, error: 'Please enter bill and rate service.'}

export default function TipCalculator() {

 

    const[state, setState] = useState(initialState)
    const errRef = useRef();
 
    const hideError = () => {
        setTimeout(() => {
            errRef.current.style.display = "none";
        }, 5000);
      };

 

    const handleSubmit = (e) => {

    e.preventDefault();
    console.log('button clicked')

        if (state.bill === "" || state.rate == "") {
            console.log('if')
            // console.log("please add a number");
            errRef.current.style.display = "block";

            hideError();
        } else if (isNaN(state.bill)) {
            console.log('elseif')
            errRef.current.style.display = "block";
            setState({...state, error: "Please enter a number"});

            hideError();
        } else {
      
            let tipAmt = state.bill * state.rate;
          
            tipAmt = Math.ceil(tipAmt);
      
           

            // setState({...state, tip: tipAmt});
            
            console.log(state.rate)

            let totalBill = Number(state.bill) + tipAmt;
          
        //    setState({...state, total: totalBill})



setState({...state, tip: tipAmt , total: totalBill});


        }


    }




    return (
        <section>
            <div className="container">
                <div className="calc">
                    <h2>Tip calculator</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="">Bill:</label>
                            <input value={state.bill} onChange={(e)=>setState({...state,  bill: e.target.value})} type="text" placeholder="$" className="bill" />

                        </div>
                        <div>
                   
                            <label htmlFor="">Rate Service:</label>
                            <select name="" className="rate" value={state.rate} onChange={(e)=> setState({...state, rate: e.target.value})}>
                                <option disabled value="0">
                                    -- Select an option --
                                </option>
                                <option value="0.15">15% - Excellent</option>
                                <option value="0.1">10% - Good</option>
                                <option value="0.05">5% - Fair</option>
                            </select>
                       
                        </div>
                        <button type="submit"  className="btn">Calculate</button>
                        <p ref={errRef} className="error">{state.error}</p>
                    </form>

                    <div className="result">
                        <p className="tip">Tip Amount: ${state.tip}</p>
                        <p className="total">Total Amount: ${state.total}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
