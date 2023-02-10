import React, { useEffect, useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './wordCount.css'

const WORD_LIMIT = 10;

export default function WordCount() {

    const [input, setInput] = useState('');
    const [charCount, setCharCount] = useState(0)
    const [wordCount, setWordCount] = useState(0);
    const [wordlimit, setWordLimit] = useState(0)
    const [readTime, setReadTime] = useState(0);

    const charRef = useRef();
    // const inputRef = useRef()


    function characterCount() {

        setCharCount(input.length)

    }


    function WordCountfunction(e) {
        // console.log('in wordcount')
        let words = input.match(/\b[-?(\w+)?]+\b/gi);

        if (words) {
            setWordCount(words.length);
            setWordLimit(WORD_LIMIT - words.length);
        } else {
            setWordCount(0);
        }
        // console.log('out word count')


        //   Reading time based on 225 words/min
        if (words) {
            let seconds = Math.floor((words.length * 60) / 225);
            if (seconds > 59) {
                let minutes = Math.floor(seconds / 60);
                seconds = seconds - minutes * 60;
                setReadTime(minutes + "m" + seconds + "s");
            } else {
                setReadTime(seconds + "s");
            }
        } else {
            setReadTime("0s");
        }










    }



    useEffect(() => {
        // console.log('effect')

        document.addEventListener('keyup', characterCount)
        document.addEventListener('keyup', WordCountfunction)


        //   Word Limit Block of Code
        document.addEventListener("keydown", function (e) {
            let words = input.match(/\b[-?(\w+)?]+\b/gi);
            if (words) {
                if (words.length > WORD_LIMIT - 1 && e.code !== "Backspace") {
                    e.preventDefault();
                    // console.log("Word limit reached");
                }
            }
        });



    }, [input])


    const handleInput = (e) => {

        setInput(e.target.value)
    }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1 className="text-center display-3 fw-bolder py-3">Word Count Tool</h1>
                    <textarea

                        value={input}
                        onChange={handleInput}
                        cols="30"
                        rows="10"
                        className="form-control fs-3 input"
                    ></textarea>
                </div>
            </div>

            <div className="row d-flex justify-content-center my-3 g-3">
                <div className="row col-md-4 border border-primary py-3">
                    <h3>Character: <span className="character">{charCount}</span></h3>
                </div>
                <div className="row col-md-4 border border-primary py-3">
                    <h3>Words: <span value={wordCount} className="word">{wordCount}</span></h3>
                </div>
            </div>

            <div className="row d-flex justify-content-center my-3 g-3">
                <div className="row col-md-4 border border-primary py-3">
                    <h3>Words Left: <span className="word-limit">{wordlimit}</span></h3>
                </div>
                <div className="row col-md-4 border border-primary py-3">
                    <h3>Reading Time: <span className="reading-time">{readTime}</span></h3>
                </div>
            </div>
        </div>
    )
}
