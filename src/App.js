import moment from "moment";
import 'moment-timezone';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import AddClock from './Components/AddClock';
import Clocks from './Components/Clocks';
import Navbar from './Components/Navbar';
import ClockImage from './Images/Clock.png'


function App() {
 
  const timeCheck = (zone) => {
    let newTime = moment.tz(zone).format("HH:mm:SS");
    return newTime
  }

  const checkDate = (zone) => {
    let newDate = moment.tz(zone).format("DD/MM/YYYY")
    return newDate
  }
  let initClock;
  if (localStorage.getItem("clocks") === null) {
    initClock = []
  }
  else {
    initClock = JSON.parse(localStorage.getItem("clocks"))
  }
  const addClock = (name, zone) => {
    console.log("I am adding", name, zone)
    let sno
    if (clocks.length === 0) {
      sno = 1
    }
    else {
      sno = clocks.length + 1
    }
    let date = checkDate(zone)
    let time = timeCheck(zone)
    const myClock = {
      sno: sno,
      name: name,
      zone: zone,
      date: date,
      time: time
    }
    setClocks([...clocks, myClock])
    console.log(myClock)
  }
  const onDelete = (clock) => {
    console.log("I am deleted the clock item", clock)
    setClocks(clocks.filter((e) => {
      return e !== clock
    }))
    localStorage.setItem("clocks", JSON.stringify(clocks))
  }
  const [clocks, setClocks] = useState(initClock)

  useEffect(() => {
    localStorage.setItem("clocks", JSON.stringify(clocks))
  }, [clocks])

  return (
    <>
      <Navbar />
      <div>
        <AddClock addClock={addClock} />
      </div>
      <div>
        <Clocks clocks={clocks} onDelete={onDelete} ClockImage={ClockImage} />
      </div>
    </>

  );
}

export default App;
