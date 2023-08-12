import React from 'react'
import './Klinik.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { NavigateBeforeSharp } from '@material-ui/icons';
import k1 from "./kampanyalar/1.webp";
import k2 from "./kampanyalar/2.webp";
import k3 from "./kampanyalar/3.webp";
import k4 from "./kampanyalar/4.webp";
import k5 from "./kampanyalar/5.webp";
import k6 from "./kampanyalar/6.webp";
import k7 from "./kampanyalar/7.webp";
import k8 from "./kampanyalar/8.webp";
import k9 from "./kampanyalar/9.webp";


import KampComp from "./KlinikComp.js";





//Owl Carousel Settings
const options = {
    margin: 5,
    responsiveClass: true,
    autoplayHoverPause: false,
    dots: 2,
    autoplay: true,
    loop: true,
    dotsSpeed: 2,
    navText: ["", ""],
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
            items: 3,
        },
        1000: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    },
};


export default function Klinik() {
    return (
        <div class="col-12" style={{ width: "100%", display: "flex", justifyContent: "center", flexWrap: "wrap", zIndex: "1000" }}>
            <OwlCarousel className="owl-theme owl-roof" {...options}>

                <KampComp
                    kampanyaResim={k1}
                    kampanyaAd="https://wa.me/+905055782721?text=Merhaba%2C%20kampanyan%C4%B1z%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k2}
                    kampanyaAd="https://wa.me/+905055782721?text=Merhaba%2C%20kampanyan%C4%B1z%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />
                <KampComp
                    kampanyaResim={k3}
                    kampanyaAd="https://wa.me/+905055782721?text=Merhaba%2C%20kampanyan%C4%B1z%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k4}
                    kampanyaAd="https://wa.me/+905055782721?text=Merhaba%2C%20kampanyan%C4%B1z%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k5}
                    kampanyaAd="https://wa.me/+905055782721?text=Merhaba%2C%20kampanyan%C4%B1z%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />
                <KampComp
                    kampanyaResim={k6}
                    kampanyaAd="https://wa.me/+905055782721?text=Merhaba%2C%20kampanyan%C4%B1z%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k7}
                    kampanyaAd="https://wa.me/+905055782721?text=Merhaba%2C%20kampanyan%C4%B1z%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k8}
                    kampanyaAd="https://wa.me/+905055782721?text=Merhaba%2C%20kampanyan%C4%B1z%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />
                <KampComp
                    kampanyaResim={k9}
                    kampanyaAd="https://wa.me/+905055782721?text=Merhaba%2C%20kampanyan%C4%B1z%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />
            </OwlCarousel>
        </div>
    )
}

