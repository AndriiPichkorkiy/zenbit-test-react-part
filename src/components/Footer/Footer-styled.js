import styled from 'styled-components'

import orangeSmileUp from '../../imgs/red_cartoon4.png'
import limeSmile from '../../imgs/limeSmile.png'
import redSmile from '../../imgs/red_cartoon3.png'

const FooterWrapper = styled.div`

    width: 100%;
    padding: 79px 343px;

    border-top: solid 1px var(--footer-stroke-color);
    background-color: var(--footer-bg-color);

    background-image: url(${redSmile}), url(${orangeSmileUp}), url(${limeSmile});
    background-repeat: no-repeat;
    background-position: 0px 0px, calc(100% + 45px) 55px, calc(100% - 127.54px) top;

    @media only screen and (max-width: 800px) {
         padding-top: 80px;
         padding-left: 250px;
        padding-right: 0;
   }
`

const ConntactsUl = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    padding-left: 0;
`

const ConntactsLi = styled.li`
    margin-left: 25.74px;

    @media only screen and (max-width: 800px) {
        &>a>img {
            width: 2rem;
        }
   }
    
`

export {FooterWrapper, ConntactsUl, ConntactsLi}


