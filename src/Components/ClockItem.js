import React from 'react'

export default function ClockItem(props) {
    return (
        <div className="col text-center">
            <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">{props.clock.name}</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title" id="india">{props.clock.zone}</h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>{props.time}</li>
                        <li>{props.date}</li>
                        <li><button className='btn btn-danger my-2' onClick={() => { props.onDelete(props.clock) }}>Delete</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
