import React from 'react';
import Logo from './Logo';

const TopBar:React.FC = ()=>{
    return (
        <div style={{ background: 'linear-gradient(to bottom, rgb(116, 212, 255), rgb(96, 192, 235))' }}>
            <Logo styleNumber={2} />
        </div>)
}

export default TopBar;
