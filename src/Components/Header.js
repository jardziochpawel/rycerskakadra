import React from 'react';
import backgroundHeader from '../img/top_home.png'
import topVideo from '../img/top_video.mp4';

class Header extends React.Component
{
    constructor(state){
        super(state);
        state = {
            isActive: false
        }
    }

    render()
    {
        return(
            <div className="header">
                <div  style={{position: 'absolute', margin: 0, padding: 0,  paddingTop: 27+'%', fontFamily: "Pirata One", width: 100+'%',backgroundImage: `url(${backgroundHeader})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', zIndex: 9999}} >
                    <nav className="navbar navbar-expand navbar-dark rkp-navbar">
                        <ul className="navbar-nav m-auto h1">
                            <li className="nav-item"><a href="#Kadra" className="nav-link">Kadra</a></li>
                            <li className="nav-item"><a href="#Liga" className="nav-link">Liga</a></li>
                            <li className="nav-item"><a href="#Oferta" className="nav-link">Oferta</a></li>
                            <li className="nav-item"><a href="#Media" className="nav-link">Media</a></li>
                        </ul>
                    </nav>
                </div>

                <div className='dotm-overlay' style={{margin: 0, paddingLeft: 0, width: 100+'%', position: 'absolute'}} >

                </div>
                <video autoPlay={true} muted={true} loop={true} id="myVideo" style={{width: 100+'%'}} >
                    <source src={topVideo} type="video/mp4" />
                </video>


            </div>
        );
    }
}

export default Header;