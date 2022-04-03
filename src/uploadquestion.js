import React, {useState} from 'react'
import { Form,Container, Row, Col, Button} from 'react-bootstrap';
import {Route} from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Question_table from './Question_table'
import Data from './Data.js'

function Uploadquestion(props){

    let history = useHistory();
    let [question,question변경] = useState(Data);
    let [inputDate, inputDate변경] = useState(1);

    return(
        <Container>
            <div><h1>U / P / L / O / A / D</h1></div>
            <hr style={ {color: "#0E4786", height: "5px", width: "68%", margin: "15px auto 0"} }></hr>            
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <h3 style={ {marginTop: "10px", marginRight: "88%"} }>▪문제 제목</h3>
                    <Row>
                        <Col xs={9}>
                            <Form.Control type="email" style={ {width: "80%", borderColor: "black", height: "45px"} } placeholder="제목을 입력해주세요" />
                        </Col>
                        <Col>
                            <Form.Select sm={3} style={ {width: "200px",borderColor: "black", marginLeft: "10%"} } aria-label="Default select example">
                                <option>학년</option>
                                <option value="1">고3</option>
                                <option value="2">고2</option>
                                <option value="3">고1</option>
                                <option value="4">중3</option>
                                <option value="5">중2</option>
                                <option value="6">중1</option> 
                            </Form.Select>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <h3 style={ {marginTop: "10px", marginRight: "88%"} }>▪문제 설명</h3>
                    <Form.Control as="textarea" rows={5} style={ {borderColor: "black"} }/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFileMultiple" >
                    <h3 style={ {marginTop: "10px", marginRight: "88%", width: "300px"} }>▪문제 첨부하기</h3>
                    <Form.Control style={ {borderColor: "black"} } type="file" multiple />
                </Form.Group>
                <Button style={ {borderRadius: "10px"} }>등록</Button>
                <br></br>
                <input placeholder="문제수" onChange={(e)=>{inputDate변경(e.target.value)}}/>
            </Form>                   
        </Container>            
    )
}

function Answer(props){

    let [answer,answer변경] = useState(0);

    return(
        <Row>
            <Col>{props.num}</Col>
            <Col><input onChange={(e)=>{answer변경(e.target.value)}}></input></Col>
            <Col>
                <Form.Select sm={3} style={ {width: "200px",borderColor: "black", marginLeft: "10%"} } aria-label="Default select example">
                    <option>문제유형</option>
                    <option value="1">서술형</option>
                    <option value="2">사고력</option>
                    <option value="3">창의력</option>
                </Form.Select>
            </Col>
        </Row>
    )
}

export default Uploadquestion;

