import play from './img/play.svg'
import previous from './img/previous.svg'
import next from './img/next.svg'
import './index.css'

export function Main(){
    return(
        <div class="main"></div>
  
    )
}

export function Navbar() {
    return (
        <div class="navbar">
            <div class="play">
                <img src={play} width="40px" />
            </div>
            <div class="previous">
                <img src={previous} width="40px" />
            </div>
            <div class="next">
                <img src={next} width="40px" />
            </div>
        </div>
    )
}