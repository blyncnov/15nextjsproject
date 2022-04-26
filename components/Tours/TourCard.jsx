import React, { useState } from 'react'
import Image from "next/image"

import { BSingleCard } from "../../styles/tours/Index"

const TourCard = ({ data }) => {
    const [info, setInfo] = useState(false);

    // const SeeInfoHandler = (id) => {

    // }

    return (
        <div>
            {data.map(tour => {
                return (
                    <BSingleCard key={tour.id}>
                        <div className="image">
                            <Image src={tour.image}
                                width={1000} height={500}
                                quality={100}
                                alt={tour.name} />
                        </div>
                        <div className="text">
                            <div className="info__price">
                                <h2>{tour.name}</h2>
                                <p>{"$" + tour.price}</p>
                            </div>
                            <p>{
                                info ? tour.info : tour.info.substring(0, 200) + "..."
                            } {" "}
                                <span style={{ fontWeight: "bold", cursor: "pointer" }}
                                    onClick={() => setInfo(!info)}>
                                    {info ? "Show Less" : "Show More"}
                                </span>
                            </p>
                            <br />
                            <button onClick={() => removeTour(id)}>Not Interested</button>
                        </div>
                    </BSingleCard>
                )
            })}
        </div>
    )
}

export default TourCard