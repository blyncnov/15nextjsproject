import React, { useState, useEffect } from 'react'

import { Container, BContainer, BCard } from "../../styles/tours/Index"
import TourCard from './TourCard'

const url = 'https://course-api.com/react-tours-project'

const Tours = () => {
    const [tours, setTours] = useState([])

    const removeTour = (id) => {
        const newTours = tours.filter(tour => tour.id !== id)
        setTours(newTours);
        console.log(newTours);
    }


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])

    return (
        <Container>
            <BContainer>
                <div className="intro">
                    <h1>
                        {
                            tours.length === 0 ? "No Tours Left" : "Our Tours"
                        }
                    </h1>
                    <br />
                    <hr />
                </div>

                <BCard >
                    <TourCard data={tours} newTourFunc={removeTour} />
                </BCard>
            </BContainer>
        </Container>
    )
}

export default Tours