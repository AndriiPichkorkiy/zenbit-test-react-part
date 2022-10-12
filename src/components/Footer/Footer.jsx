import { FooterWrapper, ConntactsUl, ConntactsLi } from './Footer-styled'

// const iconIn = import('../../imgs/icons/Vector-In.png');
// const iconTw = import('../../imgs/icons/Vector-tw.png');
// const iconF = import('../../imgs/icons/Vector-f.png');
// const iconP = import('../../imgs/icons/Vector-P.png');

import iconIn from '../../imgs/icons/Vector-in.png'
import iconTw from '../../imgs/icons/Vector-tw.png'
import iconF from '../../imgs/icons/Vector-f.png'
import iconP from '../../imgs/icons/Vector-p.png'


const Footer = () => {
    const iconsImgs = [iconIn, iconTw, iconF, iconP]
    return (
        <FooterWrapper>
            <ConntactsUl>
                {iconsImgs.map((icon, i) => {
                    return <ConntactsLi key={i}>
                        <a href="/">
                            <img src={icon} alt="icon for social media" />
                        </a>
                    </ConntactsLi>
                })}
            </ConntactsUl>
        </FooterWrapper>
    );
}

export default Footer;