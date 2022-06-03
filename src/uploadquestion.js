import React, {useState} from 'react'
import { Form,Container, Row, Col, Button} from 'react-bootstrap';

function Uploadquestion(){

    let [inputDate, inputDate변경] = useState(1);
    let [AnswerView, AnswerView변경] = useState(false);

    function Answer(){
        var 어레이 = [];
        for (var i = 0; i < inputDate; i++) {
            어레이.push(
            <Row>
                <Col>{i+1} <input placeholder='정답을 기입해주세요' onChange={(e)=>{console.log(e.target.value)}}></input></Col>
                <Col>
                    <Form.Select sm={3} style={ {width: "200px",borderColor: "black", marginLeft: "10%"} } aria-label="Default select example">
                        <option>문제유형</option>
                        <option value="1">서술형</option>
                        <option value="2">사고력</option>
                        <option value="3">창의력</option>
                    </Form.Select>
                </Col>
            </Row>)
        }
        {console.log(어레이)}
        return 어레이
    }
    return(
        <Container>
            <div><h1>U / P / L / O / A / D</h1></div>
            <hr style={ {color: "#0E4786", height: "5px", width: "68%", margin: "15px auto 0"} }></hr>            
            <Form>
                <h3 style={ {marginTop: "10px", marginRight: "88%"} }>▪문제 제목</h3>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
                <br></br>
            </Form>
            <input placeholder="정답" onChange={(e)=>{inputDate변경(e.target.value)}}/>
            <button onClick={()=>{AnswerView변경(!AnswerView)}}>확인</button>
            {
                AnswerView === true ? <div> {Answer()} </div> : null 
            }
        </Container>            
    )
}
export default Uploadquestion;

