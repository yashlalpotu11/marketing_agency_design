import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Container} from '../../globalStyles'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, TopLine, ImgWrapper, Img } from './InfoSection.elements';

const InfoSection = ({primary, lightBg, lightTopLine, lightText, lightTextDesc, topLine, headLine, description, buttonLabel, imgStart, img, alt, start}) => {
    return(
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn> 
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine} >{topLine}</TopLine>
                                <Heading lightText={lightText} >{headLine}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc} >{description}</Subtitle>
                                <Link to='/sign-up'>
                                    <Button big fontbig primary={primary} >{buttonLabel}</Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}
export default InfoSection;