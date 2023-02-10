import React, {useState, useEffect} from 'react'
import './timeCountdown.css'

export default function TimeCountdown() {

    const [counting, setCounting] = useState('')

    // Time Countdown
    let time = 1; // Time in minutes
    let promoTime = time * 60;

    function startCountdown() {
        let promoTimer = setInterval(() => {
            if (promoTime <= 0) {
                clearInterval(promoTimer);
                setCounting("Promo has ended.");
            } else {
                promoTime--;
                let day = Math.floor(promoTime / 3600 / 24);
                let hours = Math.floor(promoTime / 3600) % 24;
                let min = Math.floor(promoTime / 60) % 60;
                let sec = Math.floor(promoTime % 60);

                setCounting(`TIME: ${format(hours)}hr : ${format(min)}min : ${format(sec)}`);
            }
        }, 1000);
    }

    function format(t) {
        return t < 10 ? `0${t}` : t;
      }

    useEffect(() => {
        startCountdown();
    }, [])

    return (
        <>
            <h1>Quiz Count Down</h1>
            <div id="countdown">{counting}</div>
        </>
    )
}
