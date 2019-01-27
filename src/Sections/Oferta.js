import React from 'react';
import warhammer from '../img/warhammer.png';

class Oferta extends React.Component
{
    render(){
        return(
            <div className="container" style={{fontSize: 1.1+'rem'}}>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <h2>Dlaczego potrzebujemy wsparcia?</h2>
                        <span>
                            Ogrom chęci nie daje wystarczających możliwości dla rozwoju RKP, szczególnie, że zagraniczne
                            wyjazdy na mistrzostwa świata, z kompletem ciężkiego historycznego uzbrojenia, to ogromne
                            koszty dla zawodników. By Kadra mogła się rozwijać i brać udział w prestiżowych zawodach
                            potrzebne jest wsparcie sponsorów, dlatego zapraszamy do współpracy!
                        </span><br/><br/>
                        <img src={warhammer} alt="warhammer" style={{width: 100+'%'}}/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <h2>Korzyści płynące ze wsparcia RKP</h2>
                        <span>
                             Co oferujemy:<br/><br/>
                            <ul>
                                <li>tytuł oficjalnego sponsora Rycerskiej Kadry Polski</li>
                                <li>promocję na stronach internetowych Rycerskiej Kadry Polski: www.rycerskakadra.pl,
                                    oraz profilach RKP i PLWR na facebook’u</li>
                                <li>miejsce na banery reklamowe sponsora na turniejach halowych PLWR (obecnie 5 wydarzeń
                                    w okresie od września do marca), a także materiałach reklamujących wydarzenia,
                                    oraz przed wejściem na historyczną część turniejów letnich</li>
                                <li>możliwość dystrybuowania materiałów promocyjnych sponsora w trakcie turniejów PLWR</li>
                                <li>udział zawodników w pokazach dla klientów i pracowników firmy</li>
                                <li>stylizowane na historyczne flagi Sponsora umieszczane w okolicach pola walki na
                                    imprezach, w których udział bierze reprezentacja</li>
                                <li>smożliwość użycia wizerunków reprezentantów do kampanii reklamowych sponsora</li>
                                <li>możliwość umieszczenia logo sponsora na strojach treningowych reprezentantów,
                                    czy strojach współczesnych podczas udzielania wywiadów medialnych</li>
                                <li>możliwość przyznania specjalnej nagrody sponsora podczas turniejów ligowych.</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Oferta;