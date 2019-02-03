import React from 'react';
import sctionBotom from '../img/section_bottom.png';
import damian from '../img/lakomski.png';

class Footer extends React.Component {

    render() {
        return (
          <footer  style={{width: 100+"%", bottom: 0, color: 'white'}} className='page-footer '>
            <div style={{ backgroundImage: `url(${sctionBotom})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', paddingTop: 7+'%', paddingBottom: 0, margin: 0}}>

            </div>
            <div style={{width: 100+'%', background: 'black'}} className='p-0'>
                <div className="container p-0">
                    <div style={{width: 100+'%', background: 'black'}} className="row m-0 p-0">
                        <div className="col-12 col-sm-12 col-md-4 text-md-left" style={{marginTop:  40+'px'}}>
                        <span>
                            Stowarzyszenie<br/>
                            Rycerska Kadra Polski<br/>
                        </span><br/>
                            <span>
                            ul. Tadeusza Kościuszki 35/1<br/>
                            44-100 Gliwice<br/>
                        </span><br/>
                            <span>
                            KRS: 0000704904<br/>
                            NIP: 6312676294<br/>
                        </span><br/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 text-center" style={{marginTop:  40+'px'}}>
                            <h3>Tak, walczymy naprawdę!</h3><br/>
                            <img src={damian} alt="Damian Lakomski" className='align-bottom' style={{marginTop:  40+'px'}}/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 text-md-right" style={{marginTop:  40+'px'}}>
                        <span>
                            <h4>Kontakt</h4>
                            <a className='text-decoration-none text-white' href="mailto:kontakt@rycerskakadra.pl">kontakt@rycerskakadra.pl</a><br/>
                            <a className='text-decoration-none text-white' href="tel:602329444">kom. 602-329-444</a><br/>
                        </span><br/>
                        </div>
                    </div>
                </div>
            </div>
          </footer >
        );
    }
}

export default Footer;