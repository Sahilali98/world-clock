import React from 'react'
import ClockItem from './ClockItem'
import { useState } from 'react';
import moment from "moment";
import 'moment-timezone';
import ClockImage from './ClockImage';

export default function Clocks(props) {
    let time = new Date().toLocaleTimeString()
    const [cTime, setCTime] = useState(time);
    const updateTime = () => {
        time = new Date().toLocaleTimeString()
        setCTime(time)
    }
    setInterval(updateTime, 1000)


    let date = new Date().toLocaleDateString()
    const [cDate, setCDate] = useState(date)
    const updateDate = () => {
        date = new Date().toLocaleDateString()
        setCDate(date)
    }
    setInterval(updateDate, 1000)

    const timeCheck = (zone) => {
        let newTime = moment.tz(zone).format("HH:mm:ss");
        return newTime
    }

    const checkDate = (zone) => {
        let newDate = moment.tz(zone).format("DD/MM/YYYY")
        return newDate
    }


    return (
        <div className='container my-3'>
            <h1 className='text-center'>World Clocks</h1>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div className="col text-center">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Your Current Details</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title" id="india">Your Current Time and Date</h1>
                            <ClockImage ClockImage={props.ClockImage}/>
                            <ul className="list-unstyled mt-3 mb-4">   
                                <li>{cTime}</li>
                                <li>{cDate}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* {props.clocks.length === 0 ? "No Clock to display" : */}
                {props.clocks.map(
                    (clock) => {
                        return <ClockItem clock={clock} time={timeCheck(clock.zone)} date={checkDate(clock.zone)} key={clock.sno} onDelete={props.onDelete} />
                    }
                )
                }
                {/*  } */}

            </div>

        </div>
    )
}
