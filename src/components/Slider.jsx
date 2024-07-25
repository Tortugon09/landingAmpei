import React, {Component} from "react";
import "../../src/assets/Animation.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../src/assets/Logos/1.png"
import img2 from "../../src/assets/Logos/2.png"
import img3 from "../../src/assets/Logos/3.png"
import img4 from "../../src/assets/Logos/4.png"
import img5 from "../../src/assets/Logos/5.png"
import img6 from "../../src/assets/Logos/6.png"
import img7 from "../../src/assets/Logos/7.png"
import img8 from "../../src/assets/Logos/8.png"
import img9 from "../../src/assets/Logos/9.png"
import img10 from "../../src/assets/Logos/10.png"
import img11 from "../../src/assets/Logos/11.png"
import img12 from "../../src/assets/Logos/12.png"


const slides = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
];
class SliderComponents extends Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return(
            <div className="mainContainer">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Marcas con las que colaboramos</h2>
                <Slider {...settings}>
                    {
                        slides.map((value) => (
                            <div className="container">
                                <img className="w-2/2 md:w-1/2 sm:w-1/8" src={value} />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        );
    }
}

export default SliderComponents;

