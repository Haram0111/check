import React, { useEffect, useState } from 'react'
import {Container, Alert, Form} from 'react-bootstrap'

function Membership(){
    return(
        <Container>
            <div><h1>M / E / M / B / E / R / S / H / I / P</h1></div>
            <hr style={ {color: "#0E4786", height: "5px", width: "68%", margin: "15px auto 0"} }></hr>
            <br></br>
            <Alert style={{backgroundColor: "#eee", borderColor: "#eee", color: 'black', width: "80%", margin: "15px auto 0"}}>
                <h2>약관동의</h2>
                <span style={{marginRight: "60%"}}>이용자 약관</span>
                
                <div>asdf</div>
                <Form.Check aria-label="option 1" />
            </Alert>
            <br></br>
            <br></br>
        </Container>
    )
}

export default Membership;