// Placeholder to host a component
/*  El refugio abre de 10 a.m. a 4 p.m. de lunes a viernes, y de 9 a.m. a 8 p.m. los sábados y domingos. */
/* Añadirás el código necesario para mostrar las horas del día actual de la semana. */
import React from 'react';

const Hours = () => {
    const date = new Date();
    const currentDay = date.getDay();
    const currentHour = date.getHours();
    let hours = 'Cerrado';
    let openHour, closeHour;

    if (currentDay >= 1 && currentDay <= 5) {
        openHour = 10;
        closeHour = 16;
    } else {
        openHour = 9;
        closeHour = 20;
    }

    if (currentHour >= openHour && currentHour < closeHour) {
        hours = 'Abierto';
    }

    const hoursStyle = {
        color: hours === 'Abierto' ? 'green' : 'red'
    };

    return (
        <div>
            <div style={hoursStyle}>{hours}</div>
            <div>Horas de apertura: {openHour} a.m. - {closeHour - 1} p.m.</div>
        </div>
    );
}

export default Hours;

