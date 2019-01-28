import React from 'react';
import logoRKP from '../img/logo_rkp_260x260.png';
import logoPLWR from '../img/logo_plwr_260x260.jpg';

class InfoRKP extends React.Component
{
    render(){
        return(
            <div className='container'>
                <div className='col-12 text-center' style={{marginBottom: 40+'px'}}>
                    <h1 style={{fontSize: 4+'rem'}}>Tak, walczymy naprawdę!</h1>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-3 text-center">
                        <img src={logoRKP} alt="Rycerska Kadra Polski" style={{width: 100+'%', maxWidth: 260+'px'}} />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 text-justify" style={{fontSize: 1.1+'rem'}}>
                        <p>
                            Rycerska Kadra Polski jest organizacją skupiającą odtwórców historii zajmujących się
                            profesjonalnie pełnokontaktowymi walkami z użyciem broni i ekwipunku średniowiecznego.
                            Zadaniem organizacji jest popularyzowanie walk rycerskich o charakterze sportowej rywalizacji,
                            promowanie i wspomaganie osób uprawiających tę dyscyplinę, oraz organizowanie i obejmowanie
                            patronatem turniejów rycerskich z walkami tego typu.
                        </p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 text-center">
                        <img src={logoPLWR} alt="Polska Liga Walk Rycerskich" style={{width: 100+'%', maxWidth: 260+'px'}}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default InfoRKP;