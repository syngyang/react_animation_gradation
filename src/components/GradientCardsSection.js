import styled from 'styled-components'
import { SectionStyled } from '../Layouts';
import GradientCard from './GradientCard';
import MainTitle from './MainTitle';
import person from '../img/person.jpg'
import avatar from '../img/person.jpg'
import person2 from '../img/bitcoin3.jpg'
import bitcoin2 from '../img/bitcoin2.jpg'
import bitcoin from '../img/bitcoin.jpg'
import person3 from '../img/person3.jpg'
import computer from '../img/computer.jpg'
import CtaButton from './CtaButton';

const GradientCardsSection = () => {
    return (
        <GradientCardsSectionStyled>
            <SectionStyled>
                <div className="title-con">
                    <MainTitle title={'New Upcoming Items'} subtitle={'Discover Upcoming Items'} para={'The href attribute requires a valid value to the href value. If you cannot provide a valid href.'} />
                </div>
                <div className="gradient-cards-con">
                    <GradientCard image={person} avatar={avatar} name={'@Syng Yang'} price={'0.067 ETH'} title={'just a dummy title'} />
                    <GradientCard image={person2} avatar={avatar} name={'@Syng Yang'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                    <GradientCard image={person3} avatar={avatar} name={'@Syng Yang'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                    <GradientCard image={computer} avatar={avatar} name={'@Syng Yang'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                    <GradientCard image={bitcoin2} avatar={avatar} name={'@Syng Yang'} price={'0.067 ETH'} title={'Just a dummy title'} />
                    <GradientCard image={bitcoin} avatar={avatar} name={'@Syng Yang'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                    <GradientCard image={person} avatar={avatar} name={'@Syng Yang'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                    <GradientCard image={bitcoin2} avatar={avatar} name={'@Syng Yang'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                </div>
                <div className="cta-btn">
                        <CtaButton name={'View more'}  />
                </div>
            </SectionStyled>
        </GradientCardsSectionStyled>
    )
}

const GradientCardsSectionStyled = styled.div`
    .cta-btn{
        padding-top:3rem;
        text-align: center;
    }
`;
export default GradientCardsSection
