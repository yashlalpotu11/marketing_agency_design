import React from 'react'
import { Button } from "../../globalStyles"
// import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa"
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    FormInput,
    Form,
} from "./Footer.elements.js"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" />
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
        </FooterContainer>
    )
}

export default Footer


