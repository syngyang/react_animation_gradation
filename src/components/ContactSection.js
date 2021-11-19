import styled from 'styled-components'
import { SectionStyled } from '../Layouts';
import map from '../img/map.png'

const ContactSection = () => {
    return (
        <ContactSectionStyled>
            <SectionStyled>
                <div className="contact-info">
                    <h3 className="contact-title">
                        Contact Us
                    </h3>
                    <p>26 Manyangro, Dongjakgu, Seoul, Korea</p>
                    <p>+82 10 5211 4797</p>
                    <p>syngyang@gmail.com</p> 
                </div>
                <div className="bg-image">
                    <img src={map} alt="" />
                </div>
            </SectionStyled>
        </ContactSectionStyled>
    )
}


const ContactSectionStyled = styled.div`
    border-top: 1px solid rgba(255,255,255,0.08);
    background-color:#020C31;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    padding: 4rem 0;
    z-index: 1;
    p{
        opacity: 0.5;
    }
    .bg-image{
        position: absolute;
        padding-top: 10px;
        left:50%;
        top:50%;
        transform:translate(-50%, -50%) ;
        img{
            width: 80%;
            opacity: 0.07;
        }
    }
    .contact-title{
        position: relative;
        padding-bottom: 0.5rem;
        margin-bottom: 2rem;
        font-weight: 500;
        font-size: 1.5rem;
        &::before{
            content: '';
            position: absolute;
            bottom: 0;
            width: 6rem;
            height: 2px;
            background-color: #eb3fa9;
            left:50%;
            transform: translateX(-50%);
        }
    }
`;

export default ContactSection
