import styled from 'styled-components'
import { InnerLayout } from '../Layouts';
import BlogSection from './BlogSection';
import MainTitle from './MainTitle';
import SellerCard from './SellerCard';
import GradientCardsSection from '../components/GradientCardsSection';
import DemonstrationSection from '../components/DemonstrationSection';
import ContactSection from '../components/ContactSection';


const BodyContent = () => {
    return (
        <BodyContentStyled>
            <InnerLayout>
                <MainTitle title={'Top Sellers This Month'} subtitle={'All Enterpreneurs'}/>
                <div className="sellercards">
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                </div>
                <BlogSection />
                <GradientCardsSection />
                <DemonstrationSection />
            </InnerLayout>
            <ContactSection />
            <footer>
                <p>Copyright ©SyngYang All Rights Reserved</p>
            </footer>
        </BodyContentStyled>
    )
}

const BodyContentStyled = styled.div`
    .sellercards{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
    }
    footer{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3rem 0;
        background-color: #020A27;
        border-top: 1px solid rgba(255,255,255,0.08);
        p{
            opacity: 0.7;
        }
    }
`;
export default BodyContent
