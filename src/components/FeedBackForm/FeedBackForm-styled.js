import styled, {css} from 'styled-components'
import {Field,  } from 'formik';


const FormWrapper = styled.div`
    height: 575px;
    width: 557px;

    @media only screen and (max-width: 800px) {
         width: unset;
   }
`

const FormTitle = styled.h1`
    color: var(--form-title-color);

    font-weight: 400;
    font-size: 2.22rem;
    line-height: 130%;

    margin: 0;
`

const FieldStyled = styled(Field)`
    margin-top: 8px;
    display: block;
    border: 1px solid var(--input-border-color);
    border-radius: 10px;
    padding: 31px 46px;
    width: 100%;

    font-weight: 400;
    font-size: 18px;
    line-height: 180%;

     /* ${(props) => props.styleType === "message" ? css`height: 189px` : css``} */
`

const TextAreaStyled = styled.textarea`
    margin-top: 8px;
    display: block;
    border: 1px solid var(--input-border-color);
    border-radius: 10px;
    padding: 31px 46px;
    width: 100%;

    font-weight: 400;
    font-size: 18px;
    line-height: 180%;
`

const FormSubmiteBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 27px;
    padding: 27px 52px;
    border: none;

    background: var(--btn-bg-color);
    border-radius: 500px;

    font-weight: 400;
    font-size: 18px;
    line-height: 18px;

    color: #FFFFFF;
    cursor: pointer;

    transition-duration: 200ms;
    &:hover {
        transform: scale(1.1);
    }
`

export  {FormWrapper, FormTitle, FieldStyled, FormSubmiteBtn, TextAreaStyled}