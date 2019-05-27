import React from 'react';
import kadra from '../img/kadra.jpg';

class Podziekowania extends React.Component
{
    render(){
        return(
            <div className="container text-justify" style={{fontSize: 1.1+'rem'}}>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <span>
                            W imieniu Sztabu Rycerskiej Kadry Polski, wszystkich naszych zawodników oraz osób sympatyzujących
                            z przyświecającą nam ideą propagowania sportowych walk rycerskich, chcemy złożyć na ręce
                            Pana Bartosza Cichockiego dyrektora Instytutu Polskiego w Kijowie, najserdeczniejsze
                            podziękowania za udzielone wsparcie. Dzięki tej pomocy oraz wielkiemu zaangażowaniu,
                            świętujemy dziś sukcesy po tegorocznych Mistrzostwach Świata federacji IMCF, które w tym
                            roku odbyły się na Ukrainie. 5 zdobytych medali to chluba dla nas i duma z możliwości
                            reprezentowania naszej ojczyzny na tak prestiżowym turnieju. Tym bardziej radujemy się,
                            że dzięki współpracy z Instytutem Polskim w Kijowie, mieliśmy możliwość wyjazdu i poczucia smaku
                            zwycięstwa. Za okazane wsparcie serdecznie dziękujemy w imieniu naszym oraz kibiców.
                        </span>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                          <img src={kadra} alt="Kadra Reprezentacji Polski w sportowych walkach rycerskich" style={{width: 100+'%'}}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Podziekowania;