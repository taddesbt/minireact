import React, { useEffect, useState } from 'react'
import './DateCounter.css'


const countTo = "1 Jan 2024";


export default function DateCounter() {

    const [countDown, setCountDown] = useState('')

    function format(t) {
        return t < 10 ? `0${t}` : t;
    }

    useEffect(() => {


        const c = setInterval(() => {

            const endDate = new Date(countTo);
            const currentDate = new Date();
            const totalSeconds = (endDate - currentDate) / 1000;

            const days = Math.floor(totalSeconds / 3600 / 24);
            const hours = Math.floor(totalSeconds / 3600) % 24;
            const minutes = Math.floor(totalSeconds / 60) % 60;
            const seconds = Math.floor(totalSeconds) % 60;


            if (totalSeconds < 0) {
                clearInterval(c);
                setCountDown("Happy New Year");
            }
            else {
              
                setCountDown(`${days}Days ${format(hours)}Hrs : ${format(minutes)}Min : ${format(seconds)}s`);
            }

        }, 1000)

    })



    return (
        <>
            <h1>New Year Count Down</h1>
            <div id="countdown">{countDown}</div>
        </>
    )
}
