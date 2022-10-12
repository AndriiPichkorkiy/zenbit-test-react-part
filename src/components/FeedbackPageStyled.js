import styled from 'styled-components'

import imgMap from '../imgs/MaskGroup.png'
import clouds from '../imgs/Cloud.png'
import yellowCircle from '../imgs/Ellipse31.png' 
import orangeSmileUp from '../imgs/red_cartoon4.png'
import orangeSmileDown from '../imgs/goodie1.png'
import redSmile from '../imgs/red_cartoon3.png'

const FeedbackPageStyled = styled.div`
    padding-top: 179px;
    padding-left: 147px;

    background-image: url(${orangeSmileDown}), url(${redSmile}), url(${imgMap}), url(${clouds}), url(${yellowCircle}), url(${orangeSmileUp});
    background-repeat: no-repeat;
    background-position: calc(100% - 677px + 127px) 516px, calc(100% - 677px + 298px) 558px, right, left 101px, 714px 21px, 29px 23px;
    /* width: 1440px; */
    /* height: 928px; */

    @media only screen and (max-width: 1024px) {
        background-image:  url(${imgMap}), url(${clouds}), url(${yellowCircle}), url(${orangeSmileUp});
        background-position: right calc(250% ), left 101px, 714px 21px, 29px 23px;
        /* background-size: calc(35rem); */
        height: 1100px;
        
    }

    @media only screen and (max-width: 800px) {
         padding-top: 64px;
        padding-left: 64px;
        padding-right: 32px;
   }
`

export default FeedbackPageStyled