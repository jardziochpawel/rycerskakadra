import React from 'react';
import SectionBackground from '../img/section_full.png';

class SectionHeader extends React.Component
{
    render()
    {
        const {title} = this.props;

        return(
            <div className='text-center' style={{marginBottom: 20+'%', marginTop: 5+'%'}} id={title}>
                <div style={{position: 'absolute', width: 100+'%', backgroundImage: `Url(${SectionBackground})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', paddingTop: 6+'%', paddingBottom: 6+'%'}}>

                </div>
                <div style={{position: 'absolute', width: 100+'%', paddingTop:4.5+"%"}}>
                    <h1 style={{ color: '#fff'}} className='section-header'>
                        {title}
                    </h1>
                </div>
            </div>
        )
    }
}

export default SectionHeader;