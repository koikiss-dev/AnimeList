import React from 'react'
import styled from 'styled-components'
const FooterInfo = styled.footer`
    background: var(--color-bg-blur);
    text-align: center;
    padding: 2rem 0;
`
const Info = styled.p`
    font-size: 25px;
    color: #fff;
`;
const Emoji = styled.span``
const Footer = () => {
    return (
        <FooterInfo>
            <Info>
            Made with <Emoji role="img" aria-label="heart">❤️</Emoji> by <a href="https://github.com/JorgeDevJ" target="blank">JorgeDevJ</a> 
            </Info>
            
        </FooterInfo>
    )
}

export default Footer
