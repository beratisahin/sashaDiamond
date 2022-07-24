import React from 'react'
import './Owl.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { NavigateBeforeSharp } from '@material-ui/icons';
import o1 from "../owlcarousel/owlIcons/m1.PNG";
import o2 from "../owlcarousel/owlIcons/m2.PNG";
import o6 from "../owlcarousel/owlIcons/m6.PNG";
import o7 from "../owlcarousel/owlIcons/m7.PNG";
import o8 from "../owlcarousel/owlIcons/m8.PNG";


//Owl Carousel Settings
const options = {
    margin: 5,
    responsiveClass: true,
    dots:2,
    loop:true,
    autoplay: true,
    dotsSpeed:2,
    navText: ["",""],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 3,
        },
        400: {
            items: 3,
        },
        600: {
            items: 5,
        },
        700: {
            items: 5,
        },
        1000: {
            items: 8,
        }
    },
  };




export default function Owl() {
    
    
    return (
        
        <div class="col-12" style={{width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
        <OwlCarousel className="owl-theme owl-roof" {...options}>

            <div className="item owl-slider">
               <div className="owlCarouselTemp">
                   <img src={o1} className="owlCarouselImage" alt="Sasha Diamond Güzellik Merkezi" title="Sasha Diamond Güzellik Merkezi"></img>
                   <p className="owlCarouselContent">Dudak</p>
                  
               </div>
               
            </div>
            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={o2} className="owlCarouselImage" alt="Sasha Diamond Güzellik Merkezi" title="Sasha Diamond Güzellik Merkezi"></img>
                   <p className="owlCarouselContent">Ruj</p>
               </div>
                
            </div>
            


            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={o6} className="owlCarouselImage" alt="Sasha Diamond Güzellik Merkezi" title="Sasha Diamond Güzellik Merkezi"></img>
                   <p className="owlCarouselContent">Saç</p>
               </div> 
            </div>

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={o7} className="owlCarouselImage" alt="Sasha Diamond Güzellik Merkezi" title="Sasha Diamond Güzellik Merkezi"></img>
                   <p className="owlCarouselContent">Makyaj</p>
               </div> 
            </div>

            

            <div className="item owl-slider">
                <div className="owlCarouselTemp">
                    <img src={o8} className="owlCarouselImage" alt="Sasha Diamond Güzellik Merkezi" title="Sasha Diamond Güzellik Merkezi"></img>
                   <p className="owlCarouselContent">Estetik</p>
               </div> 
            </div>

           
        </OwlCarousel>

       </div> 
      
    )
}


