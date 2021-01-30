import React from 'react'


const Academics = ({ education }) => {
    return (
        <ul className="list-item__studies">
            {
                education.map(s => {
                    return (
                        <li className="list-item__study-item" key={s.title}>
                            <div className="list-item__study-item-header">
                                <p>{s.year}</p>
                                <h3>{s.title}</h3>
                            </div>
                            <div className="list-item__study-item-content">
                                <p>{s.place}</p>
                                <p>{s.organisation}</p>
                                <p>{s.success}</p>
                            </div>

                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Academics