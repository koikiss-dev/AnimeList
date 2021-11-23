import React from 'react'
import {Helmet} from 'react-helmet'
const NotFound = () => {
    return (
        <>
        <Helmet>
            <title>Not Found</title>
        </Helmet>
            <h1 style={{
                color: "#fff",
                display: 'flex',
                justifyContent: "center",
                transform: "translateY(40vh)",
                fontSize: "10rem"
            }} >error</h1>
        </>
    )
}

export default NotFound
