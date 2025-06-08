import { useState } from 'react';
import './style.css'

function MenuServicos() {
    return (
        <div className='Serv'>
            <form id='Tit'>
                <h1>Serviços Oferecidos:</h1>
            </form>
            <form id='Entry'>
                <button type="button">Atendimento Geral</button>
                <button type="button">Ortopedia</button>
                <button type="button">Cardiologia</button>
                <button type="button">Oftamologia</button>
                <button type="button">Radiologia</button>
                <button type="button">Cirurgia</button>
                <button type="button">Emergência</button>
                <button type="button">UTI</button>
            </form>
            <form id='Quit'>
                <button type="button">Voltar ao Mapa</button>
            </form>
        </div>
    )
}

export default MenuServicos;