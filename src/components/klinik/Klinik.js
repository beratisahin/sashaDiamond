import React from 'react'
import './Klinik.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { NavigateBeforeSharp } from '@material-ui/icons';
import k1 from "./kampanyalar/1.png";
import k2 from "./kampanyalar/2.png";
import k3 from "./kampanyalar/3.png";
import k4 from "./kampanyalar/4.png";
import k5 from "./kampanyalar/5.png";
import k6 from "./kampanyalar/6.png";
import k7 from "./kampanyalar/7.png";
import k8 from "./kampanyalar/8.png";
import k9 from "./kampanyalar/9.png";
import k10 from "./kampanyalar/10.png";
import k11 from "./kampanyalar/11.png";
import k12 from "./kampanyalar/12.png";
import k13 from "./kampanyalar/13.png";
import k14 from "./kampanyalar/14.png";
import k15 from "./kampanyalar/15.png";







//Owl Carousel Settings
const options = {
    margin: 5,
    responsiveClass: true,
    autoplayHoverPause:false,
    dots:2,
    autoplay: true,
    loop:true,
    dotsSpeed:2,
    navText: ["",""],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    },
  };


export default function Klinik() {
    return (
        <div class="col-12" style={{width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap",zIndex: "1000"}}>
             <OwlCarousel className="owl-theme owl-roof" {...options}>
                 
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={k1} className="owlCarouselImageKlinik" alt="Kayseri Lazer Epilasyon" title="Kayseri Lazer Epilasyon"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={k2} className="owlCarouselImageKlinik" alt="Kayseri Lazer Epilasyon" title="Kayseri Lazer Epilasyon"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={k3} className="owlCarouselImageKlinik" alt="Kayseri Sasha Diamond Güzellik Merkezi" title="Kayseri Sasha Diamond Güzellik Merkezi"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={k4} className="owlCarouselImageKlinik" alt="Kayseri Lazer Epilasyon" title="Kayseri Lazer Epilasyon"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={k5} className="owlCarouselImageKlinik" alt="Kayseri Sasha Diamond Güzellik Merkezi" title="Kayseri Sasha Diamond Güzellik Merkezi"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={k6} className="owlCarouselImageKlinik" alt="Kayseri Lazer Epilasyon" title="Kayseri Lazer Epilasyon"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={k7} className="owlCarouselImageKlinik" alt="Kayseri Sasha Diamond Güzellik Merkezi" title="Kayseri Sasha Diamond Güzellik Merkezi"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={k8} className="owlCarouselImageKlinik" alt="Kayseri Lazer Epilasyon" title="Kayseri Lazer Epilasyon"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={k9} className="owlCarouselImageKlinik" alt="Kayseri Sasha Diamond Güzellik Merkezi" title="Kayseri Sasha Diamond Güzellik Merkezi"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={k10} className="owlCarouselImageKlinik" alt="Kayseri Lazer Epilasyon" title="Kayseri Lazer Epilasyon"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={k11} className="owlCarouselImageKlinik" alt="Kayseri Sasha Diamond Güzellik Merkezi" title="Kayseri Sasha Diamond Güzellik Merkezi"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={k12} className="owlCarouselImageKlinik" alt="Kayseri Lazer Epilasyon" title="Kayseri Lazer Epilasyon"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={k13} className="owlCarouselImageKlinik" alt="Kayseri Sasha Diamond Güzellik Merkezi" title="Kayseri Sasha Diamond Güzellik Merkezi"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={k14} className="owlCarouselImageKlinik" alt="Kayseri Lazer Epilasyon" title="Kayseri Lazer Epilasyon"></img>
                    </div>
                </div>
                <div className="item owl-slider">
                    <div className="owlCarouselTempKlinik">
                        <img src={k15} className="owlCarouselImageKlinik" alt="Kayseri Lazer Epilasyon" title="Kayseri Lazer Epilasyon"></img>
                    </div>
                </div>
                
            
</OwlCarousel>

</div>
            
        
    )
}

