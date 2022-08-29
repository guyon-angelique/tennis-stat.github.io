import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const DivPercent = styled.div`
    width:${props=>props.width}%;
    background-color:${props=>props.color};
    height:20px;`
    
export const SpanTextLegend = styled.span`
    text-align:${props=>props.textalign};`

export const SpanLegende = styled.span`
    display:inline-block;
    margin-top:10px;
    width:15px;
    height:15px;
    background-color:${props=>props.color};`

export const JoueurColor = styled.p`
    background-color:${props=>props.color};
    width:70%;
    padding-top:5px;
    padding-bottom:5px;
    margin:0px;
    margin-bottom:10px;
    border-radius:5px;
    text-align: center;`

export  const DivMid = styled.div`
    width: 10%;
    ${(props)=>
        props.isMatch  &&
        `background: linear-gradient(to left bottom, white 0 50%, transparent 50% 100%);`}
    ${(props)=>
        props.isHistorique &&
        `background: linear-gradient(to right bottom, white 0 50%, transparent 50% 100%);`}`

export const NotSelectLink = styled(Link)`
    background-color:white;
    color: black;
        &:visited{
            color:black;`

export const SelectLink = styled(Link)`
        color:white;
        text-shadow:0 0 3px black;`

export const ButtonJoueur = styled.button `
    background-color:rgba(${props=>props.color},0.5);
    border: none;
    border-radius: 5px;
    height:35px;
    width:40%;
    margin:50px;
    font-size: 1.3em;
    &:hover {
        background-color:rgb(${props=>props.color});
    }`