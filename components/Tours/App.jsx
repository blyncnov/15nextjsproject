import React, { useState, useEffect } from 'react'

import { Container, BContainer, BCard } from "../../styles/tours/Index"
import TourCard from './TourCard'

const url = 'https://course-api.com/react-tours-project'

const Tours = () => {
    const [tours, setTours] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])

    return (
        <Container>
            <BContainer>
                <div className="intro">
                    <h1>Our Tours</h1>
                    <br />
                    <hr />
                </div>

                <BCard >
                    <TourCard data={tours} />
                </BCard>
            </BContainer>
        </Container>
    )
}

export default Tours