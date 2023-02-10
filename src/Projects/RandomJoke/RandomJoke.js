import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';


import './randomJoke.css'
const url = "https://sv443.net/jokeapi/v2/joke/Programming?type=single";


export default function RandomJoke() {

const [joke, setJoke] = useState('Click button to generate a Chuck Norris joke.')

    const handleJoke = () => {
        getJoke()

    }

 const getJoke = async ()=> { 
     
        try {
            const response = await fetch(url);
            const data = await response.json();
            setJoke(data.joke);
            //   console.log(data);
          } catch (error) {
            setJoke(error.message);
          }     
    
    
    }




    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 border p-3">
                        <p className="joke">{joke}</p>
                        <hr />
                        <button onClick={handleJoke} type="button" className="btn btn-primary btn-lg">
                            Generate Joke
                        </button>
                    </div>
                </div>
            </div>



        </>
    )
}
