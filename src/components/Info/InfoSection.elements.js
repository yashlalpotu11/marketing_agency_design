import styled from "styled-components"

export const InfoSec = styled.div`
    color: #fff;
    padding: 15vh 0;
    background : ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};

    @media screen and (max-width:900px){

    }
`

export const InfoRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};

    @media screen and (max-width: 768px) {
        gap: 20px;
    }
`

export const InfoColumn = styled.div`
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        max-width: 100%;
        flex-basis: 100%;
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }
`

export const ImgWrapper = styled.div`
    display: flex;
    max-width: 555px;
    justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`
export const TopLine = styled.div`
    color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4B59F7")};
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`

export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ lightTextDesc }) => (lightTextDesc ? "#f7f8fa" : "#1c2237")}
`