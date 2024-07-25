import { useState } from 'react'
import './App.css'
import {Header} from "./template/Header";
import AboutUs from "./template/AboutUs";
import {ContextProvider} from "./context/Context";
import {MisionAndVision} from "./template/MisionAndVision";
import {Services} from "./template/Services";
import ContactUs from "./template/ContactUs";
import AutoScrollingAnimation from "./components/Slider.jsx";
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import Footer from "./template/Footer.jsx";


const slides = [
    "../../public/assets/Logos/1.png",
    "../../public/assets/Logos/2.png",
    "../../public/assets/Logos/3.png",
    "../../public/assets/Logos/4.png",
    "../../public/assets/Logos/5.png",
    "../../public/assets/Logos/6.png",
    "../../public/assets/Logos/7.png",
    "../../public/assets/Logos/8.png",
    "../../public/assets/Logos/8.png",
    "../../public/assets/Logos/10.png",
    "../../public/assets/Logos/11.png",
    "../../public/assets/Logos/12.png",

];

function App() {

  return (
    <>
        <ContextProvider>
            <Element name="seccion1" className="seccion">
                <Header/>
            </Element>
            <Element name="seccion2" className="seccion">
                <AboutUs/>
                <MisionAndVision/>
            </Element>
            <Element name="seccion3" className="seccion">
                <Services/>
            </Element>
            <AutoScrollingAnimation/>
            <Element name="seccion4" className="seccion">
                <ContactUs/>
            </Element>
            <Footer/>
        </ContextProvider>
    </>
  )
}

export default App
