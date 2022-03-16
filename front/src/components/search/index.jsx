import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import calendar from "../../assets/icons/calendar.svg";
import menuLocalizador from "../../assets/icons/icon-menu-localizador.svg";
import localizador from "../../assets/icons/localizador.svg";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.scss";
import "./index.scss";

export default function Search() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [city, setCitys] = useState(["São Luis", "São Paulo", "Maranhão", "Bahia","Fortaleza", "Rio de Janeiro",
  ]);
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [datalist, setDatalist] = useState(document.getElementById("citys"));
  const [valueInput, setValueInput] = useState('');
  window.addEventListener("resize", () => setWidthScreen(window.innerWidth));
  const days = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
  ];
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const locale = {
    localize: {
      day: (n) => days[n],
      month: (n) => months[n],
    },
    formatLong: {
      date: () => "mm/dd/yyyy",
    },
  };
  const [myRef, setMyRef] = useState(false);
  
  const setValuesDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };


  const closeCalendar = () => {
    myRef.setOpen(false);
  };

  
  
  const mostOptions = (event) => {
    let value = event.target.value;
    let options = document.getElementsByClassName("option");
    
    
    for (const opt of options) {
      let text = opt.attributes.value.value.toLowerCase();
      if (text.includes(value.toLowerCase())) {
        opt.style.display = "flex";
      } else {
        opt.style.display = "none";
      }
    }
  };

  useEffect(() =>{
    setDatalist(document.getElementById("citys"));
  },[])
  
  const displayOptions = () => {
    datalist.style.display = "block";
  };

  const close = () => {
     window.onclick = (e) => {
      if (e.target.className === "option"){
        setValueInput(e.target.attributes.value.value);
        datalist.style.display = "none"
      } else if (e.target.id === "input-destino"){
        datalist.style.display = "block"
      } else {
        datalist.style.display = "none"
      }
    }
  };

  const setValue = (e) => {
    document.getElementById("input-destino").value = e.target.attributes.value.value;
    close()
  };

  return (
    <>
      <section id="container-search">
        <h1>Buscar ofertas em hotéis, casas e muito mais</h1>
        <form className="inputs">
          <div className="container-destino">
            <a>
              <img id="localizador" src={localizador} alt="icon-localizador" />
            </a>
            <input
              id="input-destino"
              onBlur={close}
              onFocus={displayOptions}
              onChange={mostOptions}
              type="text"
              autoComplete="off"
              placeholder="Onde vamos?"
            />
            <div className="datalist" onClick={(e) => setValue(e)} id="citys">
              {city.map((city) => (
                <div className="option" value={city} key={city}>
                  <img src={menuLocalizador} alt={menuLocalizador} className="icon" />
                  <div className="contents" >
                    {city}
                    <span>Brasil</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="container-date">
            <a>
              <img id="calendar" src={calendar} alt="icon-calendar" />
            </a>
            <DatePicker
              locale={locale}
              formatWeekDay={(locale) => locale[0]}
              placeholderText="Check in - Check out"
              placeholder={true}
              selected={startDate}
              onChange={setValuesDate}
              shouldCloseOnSelect={false}
              startDate={startDate}
              endDate={endDate}
              minDate={new Date() - 2}
              dateFormat="dd/MM/yyyy"
              selectsRange={true}
              monthsShown={widthScreen < 1207 ? 1 : 2}
              excludeDates={[new Date()]}
              //close calendar
              ref={(r) => {
                setMyRef(r);
              }}
            >
              <div className="btn-close-calendar">
                <button onClick={closeCalendar}>Close</button>
              </div>
            </DatePicker>
          </div>
          <button id="confirm-search">Buscar</button>
        </form>
      </section>
    </>
  );
}
