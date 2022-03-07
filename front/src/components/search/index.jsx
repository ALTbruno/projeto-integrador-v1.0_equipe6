import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calendar from '../../assets/icons/calendar.svg';
import localizador from '../../assets/icons/localizador.svg';
import './calendar.scss'
import './index.scss';
import 'react-datepicker/dist/react-datepicker.css';

export default function Search() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  
  window.addEventListener("resize", () => setWidthScreen(window.innerWidth));
  
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  const locale = {
    localize: {
      day: n => days[n],
      month: n => months[n]
    },
    formatLong: {
      date: () => 'mm/dd/yyyy'
    }
  }
  const [myRef, setMyRef] = useState(false)

  const closeCalendar = () => {
    myRef.setOpen(false)
    console.log(startDate, endDate)
  }

  return (
    <>
      <section id='container-search'>
        <h1>Buscar ofertas em hotéis, casas e muito mais</h1>
        <div className='inputs' >
          <div className="container-destino">
            <a>
              <img id='localizador' src={localizador} alt="icon-localizador" />
            </a>
            <input type="text" placeholder='Onde vamos?' />
          </div>
          <div className="container-date">
            <a>
              <img id='calendar' src={calendar} alt="icon-calendar" />
            </a>
            <DatePicker
              locale={locale}
              formatWeekDay={(locale) => locale[0]}
              placeholderText="Check in - Check out"
              placeholder={true}
              selected={startDate}
              onChange={onChange}
              shouldCloseOnSelect={false}
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()-2}
              dateFormat="dd/MM/yyyy"
              selectsRange={true}
              monthsShown={widthScreen < 1207 ? 1 : 2}
              excludeDates={[new Date()]}
              //close calendar
              ref={(r) => {
                setMyRef(r)
              }}
            >
              <div className='btn-close-calendar'>
                <button onClick={closeCalendar} >Close</button>
              </div>
            </DatePicker>
          </div>
          <button id='confirm-search'>Buscar</button>
        </div>
      </section>
    </>
  )
}
