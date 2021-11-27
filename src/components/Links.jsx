import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'
const ContainerLinks = styled.div`
    margin: 3rem 0 0 2rem;
`
const Links = () => {
    return (
        <ContainerLinks>
            <Link style={{
                background: "var(--color-primary)",
                padding: "1rem",
                borderRadius: "8px",
                cursor: "pointer"
            }} to="/upcoming">Upcoming</Link>
        </ContainerLinks>
    )
}

export default Links
