import React, { Component } from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import InfoRKP from "./Sections/InfoRKP";
import Kadra from "./Sections/Kadra";
import SectionHeader from "./Components/SectionHeader";
import Liga from "./Sections/Liga";
import Oferta from "./Sections/Oferta";
import Media from "./Sections/Media";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div style={{marginTop: 6+'%'}}>
            <InfoRKP/>
            <SectionHeader title={'Kadra'}/>
            <Kadra/>
            <SectionHeader title={'Liga'}/>
            <Liga/>
            <SectionHeader title={'Oferta'}/>
            <Oferta/>
            <SectionHeader title={'Media'}/>
            <Media/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
