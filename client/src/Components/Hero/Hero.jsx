import "./Hero.css"
import icon from "/hand_icon.png"
import arrow from "/arrow.png"
import text_hero from "/hero_image.png"

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>New Arrivals only</h2>
            <div className="">
                <div className="hero-hand-icon">
                    <p>New</p>
                    <img src={icon} alt="" />
                </div>
                <p>Collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest collection</div>
             <img src={arrow} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={text_hero} alt="" />
        </div>
    </div>
  )
}

export default Hero