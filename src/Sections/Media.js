import React from 'react';

class Liga extends React.Component
{
    render(){
        return (
            <div className="container" style={{fontSize: 1.1+'rem', paddingBottom: 80+'px'}}>
                <div className="text-center col-12" style={{ marginBottom: 70+'px'}}>
                    <h1>Tu nas znajdziesz:</h1>
                </div>
                <div className="row">
                    <div className='col-6 col-sm-3 facebook' style={{marginTop: 20+'px'}}>
                        <a href="https://www.facebook.com/rycerskakadra/" className='text-decoration-none h6' target='_blank' rel="noopener noreferrer" >
                            <div className='text-center' style={{width: 100+'%'}}>
                                <i className='fa fa-4x fa-facebook-square ' style={{display: 'inline'}}/> <h2 style={{display: 'inline'}}>RKP</h2>
                            </div>
                        </a>
                    </div>
                    <div className='col-6 col-sm-3 facebook' style={{marginTop: 20+'px'}}>
                        <a href="https://www.facebook.com/sportowe.walki.rycerskie/" className='text-decoration-none h6' target='_blank' rel="noopener noreferrer">
                            <div className='text-center' style={{width: 100+'%'}}>
                                <i className='fa fa-4x fa-facebook-square' style={{display: 'inline'}}/> <h2 style={{display: 'inline'}}>PLWR</h2>
                            </div>
                        </a>
                    </div>
                    <div className='col-6 col-sm-3 youtube text-center' style={{marginTop: 20+'px'}}>
                        <a href="https://www.youtube.com/channel/UC71jEGotDvaMmQ-BsACmmTQ" className='text-decoration-none h6' target='_blank' rel="noopener noreferrer">
                            <div className='text-center' style={{width: 100+'%'}}>
                                <i className='fa fa-4x fa-youtube' style={{display: 'inline'}}/> <h2 style={{display: 'inline'}}>RKP</h2>
                            </div>
                        </a>
                    </div>
                    <div className='col-6 col-sm-3 instagram' style={{marginTop: 20+'px'}}>
                        <a href="https://www.instagram.com/rycerska_kadra_polski/" className='text-decoration-none h6' target='_blank' rel="noopener noreferrer">
                            <div className='text-center' style={{width: 100+'%'}}>
                                <i className='fa fa-4x fa-instagram' style={{display: 'inline'}}/> <h2 style={{display: 'inline'}}>RKP</h2>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Liga;