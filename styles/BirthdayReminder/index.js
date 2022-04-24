import styled from "styled-components"

export const Container = styled.div`
width: 100%;
background-color: blue;
padding: 2em 0;


display: flex;
align-items: center;
justify-content: center;
`

export const ReminderBoxSection = styled.div`
width: 100%;
max-width: 40vw;
margin: 0 auto;
background-color: #ffffff;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
padding: 1em 2em;
border-radius: 5px;

h4{
    font-size: 1.5rem;
    font-weight: 400;
}

.round__image img{
    border-radius: 50%;
    object-fit: cover;
}

.list{
    display: flex;
    align-items: center;
    gap: 2em;
}

.reminder__text h4{
    font-size: 1.2rem;
    margin: .2em 0;
    font-weight: 500;
    font-family: sf;
}

.reminder__text p{
    font-size: 1rem;
    opacity: .7;
}

button{
    width: 100%;
    padding: .8em;
    margin-top: 1em;
    border-radius: 3px;
    border: none;
    background-color: blue;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
}

@media (max-width: 900px) {
max-width: 50%;
}

@media (max-width: 768px) {
max-width: 90vw;
}

`

export default Container