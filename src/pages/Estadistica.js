import React from 'react';
import '../styles/main.css';
import '../styles/estadisticas.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderMinus, faUser, faUserFriends, faWarning } from '@fortawesome/free-solid-svg-icons';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ProgressBar from '../components/ProgressBar'; // Import the ProgressBar component

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Terminado','En Proceso','Inicio'],
  datasets: [
    {
      label: '',
      data: [12, 19, 43, 25, 32, 23],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 'auto', // Corrected from auto to 'auto'
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Actividades',
    },
  },
};

function Estadistica() {
  return (
    <div id='main'>
      <div className='seccion-card'>
        <div className='card'>
          <div className='interior-card1'>
            <p className='texto1'>USUARIOS</p>
            <p className='texto2'>20.000</p>
          </div>
          <div className='interior-card2'>
            <FontAwesomeIcon icon={faUserFriends} className='icono' />
          </div>
        </div>
        <div className='card'>
          <div className='interior-card1'>
            <p className='texto1'>USUARIOS ACTIVOS</p>
            <p className='texto2'>20.000</p>
          </div>
          <div className='interior-card2'>
            <FontAwesomeIcon icon={faUser} className='icono' />
          </div>
        </div>
        <div className='card'>
          <div className='interior-card1'>
            <p className='texto1'>PROYECTOS</p>
            <p className='texto2'>20.000</p>
          </div>
          <div className='interior-card2'>
            <FontAwesomeIcon icon={faFolderMinus} className='icono' />
          </div>
        </div>
        <div className='card'>
          <div className='interior-card1'>
            <p className='texto1'>ERROR</p>
            <p className='texto2'>20.000</p>
          </div>
          <div className='interior-card2'>
            <FontAwesomeIcon icon={faWarning} className='icono' />
          </div>
        </div>
      </div>
      <div className='seccion-graficos'>
        <div className='card-grafico'>
          <div className='card-header'>ACTIVIDADES</div>
          <div className='grafico1'>
            <Bar data={data} options={options} />
          </div>
        </div>
        <div className='card-grafico'>
          <div className='card-header'>PROCESOS</div>
          <div className='grafico2'></div>
        </div>
      </div>
      <div className='seccion-graficos3'>
        <div className='card-grafico3'>
          <div className='card-header'>SISTEMAS</div>
          <div className='grafico3'>
            <div className='grafico3-int'>
              Chancado Primario 20%
              <ProgressBar value={20} />
              Chancado Secundario 40%
              <ProgressBar value={40} />
              Chancado Terciario 60%
              <ProgressBar value={60} />
              Aglomeracion 80%
              <ProgressBar value={80} />
              Apilamiento Completo!
              <ProgressBar value={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Estadistica;
