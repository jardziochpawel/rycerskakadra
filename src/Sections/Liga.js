import React from 'react';

class Liga extends React.Component
{
    render(){
        return (
            <div className="container text-justify" style={{fontSize: 1.1+'rem'}}>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <span>
                            PLWR, czyli Polska Liga Walk Rycerskich, została powołana w celu wyłonienia najlepszych
                            zawodników, którzy otrzymają powołanie do Rycerskiej Kadry Polski.
                        </span><br/><br/>
                        <span>
                            Eliminacje złożone są z 5 turniejów, organizowanych od września do marca, na terenie całej
                            Polski.
                        </span><br/><br/>
                        <span>
                            Na podstawie ligowych spotkań Kapitan Reprezentacji – w latach 2017-2019
                            Sławomir Smolarczyk (von Massow) – powołuje do Kadry zawodników, którzy będą
                            reprezentować w danym sezonie Polskę podczas międzynarodowych turniejów i mistrzostw.
                            Wszyscy zawodnicy walczący w ramach PLWR mają na sobie repliki zbroi z okresu późnego
                            średniowiecza i posługują się białą bronią adekwatną do tego okresu.
                        </span>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <span>
                            Zawodnicy rywalizują ze sobą w starciach indywidualnych oraz grupowych (5 vs. 5, 16 vs. 16 lub 21 vs. 21).
                            Główną konkurencją ligi są starcia 5 vs. 5. Najważniejsze zasady to:<br/><br/>
                            <ul>
                                <li>walczą 8-osobowe drużyny (5 zawodników w polu + 3 rezerwowych),</li>
                                <li>skład zawodników w polu może być dowolnie modyfikowany przez kapitana pomiędzy starciami,</li>
                                <li>walka toczona jest do momentu aż jedna z drużyn wygra w 2 starciach,</li>
                                <li>starcie kończy się w momencie powalenia wszystkich zawodników przeciwnika,</li>
                                <li>za powalonego uważa się zawodnika, który ma przynajmniej 3 punkty podparcia,</li>
                                <li>starcie jest przerywane jeżeli przewaga jednej z drużyn wynosi 3 zawodników do 1.</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
export default Liga;