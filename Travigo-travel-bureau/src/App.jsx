import React from 'react';
import { Navbar, Hero, Footer, Memory, Explore, Advertise,Pricings, Banner } from './components';
import { hero, navlinks, memory, placesAPI, brands, pricingapi, bannerAPI} from './data/travigoData';
const App = () => {
  return (
    <div>
      
      <Navbar navlinks={navlinks}/>
      <Hero hero={hero}/>
      <Memory memory={memory} />
      <Explore title="Explore The Beauty of World" placesAPI={placesAPI}/>
      <Advertise brands={brands}/>
      <Pricings pricingapi={pricingapi}/>
      <Banner bannerAPI={bannerAPI}/>
      <Footer/>
      
    </div>
  );
};

export default App;