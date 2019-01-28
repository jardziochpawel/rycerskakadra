import React from 'react';
import kadra from '../img/grupowe_kadra.png';

class Kadra extends React.Component
{
    render(){
        return(
            <div className="container text-justify" style={{fontSize: 1.1+'rem'}}>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <span>
                            Rycerska Kadra Polski (RKP) to grupa ok. 50 najlepszych walczących kobiet i mężczyzn
                            wyselekcjonowanych w ramach rozgrywek Polskiej Ligi Walk Rycerskich.
                        </span><br/><br/>
                        <span>
                            Mimo braku profesjonalnego zaplecza treningowego, opierając się na wysokich umiejętnościach
                            indywidualnych, dobrej taktyce i współdziałaniu, pozostajemy jedną z niewielu reprezentacji,
                            która jest w stanie stanąć w szrankach do wyrównanej walki z drużynami Rosji, Ukrainy czy
                            Białorusi, którym od lat przypadają miejsca medalowe.
                        </span><br/><br/>
                        <span>
                            Największe turnieje, w których bierzemy udział na arenie międzynarodowej to mistrzostwa
                            świata Battle of the Nations, organizowane przed federację HMBIA (Historical Medieval
                            Battle International Association) oraz mistrzostwa świata federacji IMCF
                            (International Medieval Combat Federation). Podczas mistrzostw ścierają się
                            zawodnicy z kilkudziesięciu państw, wśród których oprócz Francji, Rosji czy Anglii
                            znajdziemy również takie kraje jak Japonia, Nowa Zelandia, USA czy Argentyna.
                        </span>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <span>
                            W zimie nasi zawodnicy biorą również udział w Dynamo Cup w Moskwie, turnieju uznawanym za
                            klubowe mistrzostwa świata, podczas których polskie drużyny również odnoszą sukcesy.
                        </span><br/><br/>

                        <img src={kadra} alt="Kadra Reprezentacji Polski w sportowych walkach rycerskich" style={{width: 100+'%'}}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Kadra;