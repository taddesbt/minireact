import React, { useEffect, useRef } from 'react'
import './jumpingGame.css'
import heroGif from './images/hero.gif'
import wolfGif from './images/wolf.gif'

export default class JumpingGame extends React.Component {

    constructor(props) {
        super(props)
        this.heroRef = React.createRef()
        this.vilanRef = React.createRef()

    }


    Jump = () => {

        if (this.heroRef.current.classList != "animate") {
            this.heroRef.current.classList.add("animate");
            this.vilanRef.current.style.animation = "move 1s infinite linear";
        }
        setTimeout(() => {
            this.heroRef.current.classList.remove("animate");
        }, 300);


    }

    componentDidMount() {

        // const styles = getComputedStyle(this.heroRef.current)
        // console.log(styles.width)

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                this.Jump();
                
            }
        })

        this. forceUpdate()

    }

  

  componentDidUpdate() {
    // console.log('updating')

    let isAlive = setInterval(() => {
        // console.log(this.heroRef.current)
        let heroTop = parseInt(window.getComputedStyle(this.heroRef.current).top);
        //   console.log(heroTop);
        let vilanLeft = parseInt(window.getComputedStyle(this.vilanRef.current).left);
        // console.log('before stop')


        if (vilanLeft < 40 && vilanLeft > 20 && heroTop >= 130) {
            // console.log('stop me')
          this.vilanRef.current.style.animation = "none";
        //   clearInterval(isAlive)
          alert("Game over. Press spacebar to start");
        }
      }, 10);
  }

  
    render() {

        return (
            <section>
                <h1>Jumping Game</h1>
                <div className="container">
                    <p>Press spacebar to start</p>
                    <div className="game">
                        <div className="hero" ref={this.heroRef}>

                            <img className="hero-boy" src={heroGif} alt="hero" />
                        </div>
                        <div className="vilan" ref={this.vilanRef}>
                            <img className="vilan-wolf" src={wolfGif} alt="Wolf" />
                        </div>
                    </div>
                </div>
            </section >
            
        )
    }
}
