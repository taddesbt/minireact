import React, { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './wikiSearch.css'
import ListItem from './ListItem';
const apiURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";

export default function WikiSearch() {

    const [result, setResult] = useState([])
    const inputRef =useRef()

    async function getResult(searchVal) {
        const response = await fetch(apiURL + searchVal);
        const results = await response.json();

        // console.log(results);
        if (results.query.search.length == 0) {
            console.log("Invalid search, please enter another search term.");
        } else {
            // console.log(results)
            setResult(results)

            //   displayResults(results);
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const input = inputRef.current.value;

        if (input === '') {

            console.log('Search cannot be empty, please enter a search term')
        }
        else {
            getResult(input)
        }

    }


    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <img src="/images/wiki.png" alt="wiki" className="my-5" />
                        <form action="" className="d-flex" onSubmit={handleSubmit}>
                            <input
                            ref={inputRef}
                           
                       
                                type="text"
                                className="form-control form-control-lg p-3 border border-success rounded-pill"
                                placeholder="Enter search term"
                            />
                            <button type="submit" className="btn ms-2">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                        <hr className="hide" />
                    </div>
                </div>
            </div>

            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">

{/* {console.log(result)} */}

                            {result?.query?.search.map((item, index) => {
                        

                                return <ListItem key={index} {...item} />
                            })
                            }


                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
