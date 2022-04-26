import styled from "styled-components"

export const Container = styled.div`
width: 100%;
background-color: #EAF7FF;
padding: 2em 0;
display: flex;
align-items: center;
justify-content: center;

`

export const BContainer = styled.div`
color: #333;
padding: 2em 0;
display: flex;
width: 100%;
max-width: 50vw;
text-align: center;
flex-direction: column;
// background-color: red;
padding: 1em;
gap: 1em;

hr{
    border: 2px solid #60DBFB;
}

@media (max-width: 768px) {
    max-width: 100vw;
}
`

export const BCard = styled.div`
padding: 1em;
display: flex;
flex-direction: column;
border-radius: 5px;
`

export const BSingleCard = styled.div`
background-color: white;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
margin: 1em 0;
border-radius: 5px;

.image img{
    width: 100% !important;
    height: 100% !important;
}

.text{
      padding: 1em;

button{
    background-color: red;
    border: none;
    width: 100%;
    border-radius: 3px;
    color: white;
    padding: .5em;
    font-size: 1.2em;
    cursor: pointer;

    &:hover{
        background-color: transparent;
        color: red;
        border: 2px solid red;
}

}

.info__price{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: start;
    gap: 1em;
}

.info__price h2{
    font-size: 1rem;
}

.info__price p{
    font-size: .8rem;
    font-weight: bold;
    background-color: #EAF7FF;
    padding: 0.5em;
    color: #60DBFB;
    border-radius: 5px;
}


p{
    font-size: 12px;
    margin: .7em 0;
    text-align: start;
    line-height: 1.4em;
}

`

export default Container