import React from 'react';
import './home.css';
import Product from '../Product/Products';
import { headerItems } from "./utilis"
function Home() {
 return (<><div className="item-container">
  {headerItems && headerItems.map((item, index) => <p>{item}</p>)}
 </div>

  <div className="home">


   <div className="home__container">
    <img
     className="home__image"
     src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
     alt=""
    />
    <div className="home__row">
     <Product
      id="12321341"
      title="Ethiopian/Eritrean Traditional Coffee Set Sábá ሳባ Edition. Full Set"
      price={109.00}
      rating={4}
      image="https://m.media-amazon.com/images/I/61qscYvyjyL._AC_SL1000_.jpg"
     />
     <Product
      id="49538094"
      title="Handmade Ethiopian Cross Pendant DIY Rope Chain for Women Girls African Wedding Party Gold Color Eritrea Jewelry Crosses - (Type: Black Rope/Length: 45cm Rope)"
      price={8.35}
      rating={4}
      image="https://m.media-amazon.com/images/I/61oM11IiXzL._AC_.jpg"
     />
    </div>
    <div className="home__row">
     <Product
      id="4903850"
      title="Ethiopian Flag In Ethiopia, Rastafarian, Ethiopia Flag Pullover Hoodie"
      price={31.99}
      rating={3}
      image="https://m.media-amazon.com/images/I/B1i3u9-Q-KS._CLa%7C2140%2C2000%7CB1kY7UbdVfS.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466._SX._UX._SY._UY_.png"
     />

     <Product
      id="99903850"
      title="4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen"
      price={139.99}
      rating={4}
      image="https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg"
     />
     <Product
      id="3254354345"
      title="AquaSonic Black Series Ultra Whitening Toothbrush – ADA Accepted Electric Toothbrush - 8 Brush Heads & Travel Case - Ultra Sonic Motor & Wireless Charging - 4 Modes w Smart Timer - Sonic Electric"
      price={39.95}
      rating={4}
      image="https://m.media-amazon.com/images/I/716hFx-iA3L._SL1500_.jpg"
     />
    </div>
    <div className="home__row">
     <Product
      id="90829332"
      title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
      price={1094.98}
      rating={4}
      image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
     />
    </div>
    <div className="home__row">
     <Product
      id="903850"
      title="2021 1080P Streaming Business Webcam with Microphone & Privacy Cover, AutoFocus, NexiGo N930P HD USB Web Camera, for Zoom Meeting YouTube Skype FaceTime"
      price={69.99}
      rating={5}
      image="https://m.media-amazon.com/images/I/61KFXbnW13L._AC_UY218_.jpg"
     />
     <Product
      id="90829332"
      title="Persian Area Rugs 2305 Modern Abstract Area Rug Carpet, Navy / 8 x 10,2305 Navy 8x11"
      price={170.00}
      rating={5}
      image="https://m.media-amazon.com/images/I/81Ivw-YP9KL._AC_SL1440_.jpg"
     />
     <Product
      id="23445930"
      title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
      price={98.99}
      rating={5}
      image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
     />
    </div>
   </div>
  </div></>
 );
}
export default Home;