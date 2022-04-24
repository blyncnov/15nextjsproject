import React from 'react'
import Image from "next/image"

const List = ({ dataInfo, setdataInfo }) => {

    const ClearDataHandler = () => {
        setdataInfo([]);
    }

    return (
        <>
            {dataInfo.map((person) => {
                return (
                    <main key={person.id}>
                        <div className="list" >
                            <div className="round__image">
                                <Image src={person.image}
                                    width="100px" height="100px"
                                    alt={person.name} />
                            </div>
                            <div className="reminder__text">
                                <h4>{person.name}</h4>
                                <p>{person.age} years today</p>
                            </div>
                        </div>
                        <br />
                    </main>
                )
            })}
            <button onClick={ClearDataHandler}>Clear All</button>
        </>
    )
}

export default List