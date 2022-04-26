import React from 'react'
import Image from "next/image"

import { BSingleCard } from "../../styles/tours/Index"

const TourCard = ({ data }) => {
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
                                <p>{"$"+ tour.price}</p>
                            </div>
                            <p>{tour.info}</p>
                            <br />
                            <button>Not Interested</button>
                        </div>
                    </BSingleCard>
                )
            })}
        </div>
    )
}

export default TourCard