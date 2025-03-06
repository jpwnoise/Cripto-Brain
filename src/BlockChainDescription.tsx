import React, { useState, MouseEventHandler, ReactNode } from 'react';
import { Button } from "@mui/material";
import './BlockChainDescription.sass';
import {Parrafo} from './Parrafos';


interface BlockProps {
    children: ReactNode;
    title:string;
    paragraph:Parrafo
  }
  

const Block:React.FC<BlockProps> = ({children, paragraph}) => {
    const initialBlockState = 'bloque bloque-cerrado';
    const openingBlockState = 'bloque abrir-bloque';
    const closingBlockState = 'bloque cerrar-bloque';

    const initialParrafoState = 'parrafo cerrado';
    const openingParrafoState = 'parrafo abrir-persiana';
    const closingParrafoState = 'parrafo cerrar-persiana';

    const [bloqueClassName, setBloqueClassName] = useState(initialBlockState);
    const [parrafoClassName, setParrafoClassName] = useState(initialParrafoState);

    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        //de estado incial a abierto 
        if (bloqueClassName === initialBlockState)
            setBloqueClassName(openingBlockState);
        //de abierto a cerrado 
        if (bloqueClassName === openingBlockState)
            setBloqueClassName(closingBlockState);
        //de abierto a cerrado 
        if (bloqueClassName === closingBlockState)
            setBloqueClassName(openingBlockState);

        //de estado incial a abierto 
        if (parrafoClassName === initialParrafoState)
            setParrafoClassName(openingParrafoState);
        //de abierto a cerrado 
        if (parrafoClassName === openingParrafoState)
            setParrafoClassName(closingParrafoState);
        //de abierto a cerrado 
        if (parrafoClassName === closingParrafoState)
            setParrafoClassName(openingParrafoState);
    };

    return (
        <div style={{ color: 'rgb(240,240,240)', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'center', textAlign: 'center' }} className='fade-in'>
            <div style={{ width: '60rem', margin: '0 auto' }}>
                <div className={bloqueClassName}>
                    <div className="head">
                        <Button onClick={handleClick} className="head texto-gradiente" variant="text" startIcon={<paragraph.icon></paragraph.icon>}>{paragraph.title}</Button>
                    </div>
                    <p className={parrafoClassName}>
                        {children}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Block;