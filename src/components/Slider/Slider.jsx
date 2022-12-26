import React,{useState} from 'react'
import './Slider.css'
import FirstBook from "../../images/book1.png";
import SecondBook from "../../images/book2.png";
import ThirdBook from "../../images/book3.png";

function Slider() {
    const [slideIndex,setSlideIndex] = useState(0)
    const handleClick = (direction) =>{
        if (direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
  return (
    <div className="slider-container">
        
        <div className="arrow-left" onClick={()=>handleClick("left")}>
            <i className="bi bi-arrow-left-short"></i>
        </div>
        
        <div className="slider-wrapper" style={{transform: `translateX(${slideIndex * -100}vw)`}}>
            
            <div className="slide first-slide">
                <div className="slide-image-wrapper">
                    <img src={FirstBook} alt="" />
                </div>
                <div className="slide-info-wrapper">
                    <h1 className="slide-info-title">Book Store</h1>
                    <p className="slide-info-desc">
                    It's not just reading. it's living the adventure
                    </p>
                </div>
            </div>
            <div className="slide second-slide">
                <div className="slide-image-wrapper">
                    <img src={SecondBook} alt="" />
                </div>
                <div className="slide-info-wrapper">
                    <h1 className="slide-info-title">The Books For Everyone</h1>
                    <p className="slide-info-desc">
                    You can read at the bookstore or at home
                    </p>
                </div>
            </div>
            <div className="slide third-slide">
                <div className="slide-image-wrapper">
                    <img src={ThirdBook} alt="" />
                </div>
                <div className="slide-info-wrapper">
                    <h1 className="slide-info-title">Check Out The New Titles</h1>
                    <p className="slide-info-desc">
                        We send you the book you want at home
                    </p>
                </div>
            </div>
            
        </div>

        <div className="arrow-right" onClick={()=>handleClick("right")}>
            <i className="bi bi-arrow-right-short"></i>
        </div> 
    </div>
  )
}

export default Slider
