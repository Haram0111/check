import React, {useState} from 'react'
import { Container, Row, Col, Form, Card,Alert,Button,Table,ButtonGroup} from 'react-bootstrap';
import {Route} from 'react-router-dom'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import teacher_data from './teacher_data'
import Question from './Question_table'

function Mate(props){

    let history = useHistory();
    let [show, setShow] = useState(false);
    let [question,question변경] = useState(teacher_data);

    return(
        <Container>
          <div><h1>M / A / T / E</h1></div>
          <hr style={ {color: "#0E4786", height: "5px", width: "68%", margin: "15px auto 30px"} }></hr>
          {
            show === true ?
              <Alert variant="primary" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Mate 수정하기</Alert.Heading>
                <br></br>
                <Row>
                  <Col>
                    <Form.Check type="switch" id="custom-switch1">
                    <Form.Check.Input type="switch"  isValid />
                      <Form.Check.Label>asdf</Form.Check.Label>
                    </Form.Check>
                    <Form.Check type="switch" id="custom-switch2" label="선생님 이름이 나와요!"/>
                    <Form.Check type="switch" id="custom-switch3" label="선생님 이름이 나와요!"/>
                    <Form.Check type="switch" id="custom-switch4" label="선생님 이름이 나와요!"/>
                    <Form.Check type="switch" id="custom-switch5" label="선생님 이름이 나와요!"/>
                    <Form.Check type="switch" id="custom-switch6" label="선생님 이름이 나와요!"/>
                    <Form.Check type="switch" id="custom-switch7" label="선생님 이름이 나와요!"/>            
                  </Col>
                  <Col>
                    <Form.Check type="switch" id="custom-switch8" label="선생님 이름이 나와요!"/>
                    <Form.Check type="switch" id="custom-switch9" label="선생님 이름이 나와요!"/>
                    <Form.Check type="switch" id="custom-switch10" label="선생님 이름이 나와요!"/>
                    <Form.Check type="switch" id="custom-switch11" label="선생님 이름이 나와요!"/>
                    <Form.Check type="switch" id="custom-switch12" label="선생님 이름이 나와요!"/>
                    <Form.Check type="switch" id="custom-switch13" label="선생님 이름이 나와요!"/>
                    <Form.Check type="switch" id="custom-switch14" label="선생님 이름이 나와요!"/>
                  </Col>
                </Row>
                <br></br>
                <Button onClick={() => setShow(false)} style={ {marginLeft: "93%"} }>완료</Button>
              </Alert>
            : <Button onClick={() => setShow(true)}>Mate 수정하기</Button> 
          }


          <br></br>
          <Table striped bordered hover variant="white" style={ { marginTop: "-6px",boxShadow: "3px 3px 0px rgb(202, 197, 197)" } }>
            <thead>
              <tr>
                <th>문제번호</th>
                <th>제목</th>
                <th>학년</th>
                <th>선생님</th>
                <th>날짜</th>
                <th>조회수</th>
                <th>좋아요</th>
              </tr>
            </thead>
            <tbody>
              {
                props.state.map((a,i)=>{
                  return (                    
                    <tr>
                        <td>{a.id}</td>
                        <td>{a.title}
                        <Button variant="outline-success" size="sm" onClick={()=>{ history.push('/Mate/' + a.id); props.dispatch( {type : '조회수증가', num : i}) }} style={ {marginLeft: "10px", height: "30px", borderRadius: "7px"} }>문제보기</Button>
                        <Button variant="outline-success" size="sm" onClick={()=>{ history.push('/question_table/answer/' + a.id); props.dispatch( {type : '조회수증가'})}} style={ {marginLeft: "10px", height: "30px",borderRadius: "7px"} }>정답체크하기</Button> </td>
                        <td>{a.grade}</td>
                        <td>{a.teacher}</td>
                        <td>{a.date}</td>
                        <td>{a.views}</td>
                        <td>{a.likes}</td>
                    </tr>
                  )
                })
              }              
            </tbody>
          </Table>
          <ButtonGroup aria-label="First group">
            <Button variant="white">1</Button>{' '}
            <Button variant="white">2</Button>{' '}
            <Button variant="white">3</Button>{' '}
            <Button variant="white">4</Button>{' '}
          </ButtonGroup>
          <br></br>
        </Container>     
    )
}

function AlertDismissibleExample(props) {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <Alert variant="primary" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Mate 수정하기</Alert.Heading>
        <br></br>
        <Row>
          <Col>
            <Form.Check type="switch" id="custom-switch1"></Form.Check>
            <Form.Check type="switch" id="custom-switch2" label="선생님 이름이 나와요!"/>
            <Form.Check type="switch" id="custom-switch3" label="선생님 이름이 나와요!"/>
            <Form.Check type="switch" id="custom-switch4" label="선생님 이름이 나와요!"/>
            <Form.Check type="switch" id="custom-switch5" label="선생님 이름이 나와요!"/>
            <Form.Check type="switch" id="custom-switch6" label="선생님 이름이 나와요!"/>
            <Form.Check type="switch" id="custom-switch7" label="선생님 이름이 나와요!"/>            
          </Col>
          <Col>
            <Form.Check type="switch" id="custom-switch8" label="선생님 이름이 나와요!"/>
            <Form.Check type="switch" id="custom-switch9" label="선생님 이름이 나와요!"/>
            <Form.Check type="switch" id="custom-switch10" label="선생님 이름이 나와요!"/>
            <Form.Check type="switch" id="custom-switch11" label="선생님 이름이 나와요!"/>
            <Form.Check type="switch" id="custom-switch12" label="선생님 이름이 나와요!"/>
            <Form.Check type="switch" id="custom-switch13" label="선생님 이름이 나와요!"/>
            <Form.Check type="switch" id="custom-switch14" label="선생님 이름이 나와요!"/>
          </Col>
        </Row>
        <br></br>
        <Button onClick={() => setShow(false)} style={ {marginLeft: "93%"} }>완료</Button>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Mate 수정하기</Button>;
}

function state를props화(state){
  return{
    state : state //detail이라는 props로 바꿔주셈
  }
}

export default connect(state를props화)(Mate);