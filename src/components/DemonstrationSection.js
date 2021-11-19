import styled from 'styled-components'
import { SectionStyled } from '../Layouts';
import MainTitle from './MainTitle';
import avatar from '../img/person.jpg'
import person2 from '../img/bitcoin3.jpg'
import bitcoin from '../img/bitcoin.jpg'
import person3 from '../img/person3.jpg'
import computer from '../img/computer.jpg'
import GradientCard from './GradientCard';
import CtaButton from './CtaButton';

const DemonstrationSection = () => {
    const ctaButton = <CtaButton name={'Place bid'} />

    return (
        <DemonstrationSectionStyled>
            <SectionStyled>
                <div className="title-con">
                    <MainTitle title={'Live Demonstration'} subtitle={'Live Demonstration'} para="The href attribute requires a valid value to be accessible. Provide a valid, navigable address." />
                </div>
                <div className="gradient-cards-con">
                    <GradientCard image={computer} avatar={avatar} name={'@Syng Yang'} price={'0.067 ETH'} title={'Just a dummy title'}  ctaButton={ctaButton}/>
                    <GradientCard image={person3} avatar={avatar} name={'@Syng Yang'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButton={ctaButton} />
                    <GradientCard image={bitcoin} avatar={avatar} name={'@Syng Yang'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButton={ctaButton} />
                    <GradientCard image={person2} avatar={avatar} name={'@Syng Yang'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButton={ctaButton} />

                </div>
            </SectionStyled>
        </DemonstrationSectionStyled>
    )
}

const DemonstrationSectionStyled = styled.div`

`;
export default DemonstrationSection
