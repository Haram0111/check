import axios from "axios";
import React, {useState} from 'react'
import { Container, Row, Col, Form, Button,Card} from 'react-bootstrap';
import {Route} from 'react-router-dom'
import 스터디게임1 from './img/스터디게임1.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import './App.css'

function Login(){

    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const url = 'https://acec155a-5e40-45fd-898c-7ee7bb7d697e.mock.pstmn.io';

    const checkPost = async (props) => {
      try {
        const response = await axios.post(
          "https://acec155a-5e40-45fd-898c-7ee7bb7d697e.mock.pstmn.io",
          {
            ID: id,
            PWD: pwd,
          }
        );
        console.log(response.data);

      } catch (error) {
        console.error(error);
      }
    };

    return(
        <Container>
          <div><h1>L / O / G / I / N</h1></div>
          <hr style={ {color: "#0E4786", height: "5px", width: "68%", margin: "15px auto 0"} }></hr>
          <br></br>
          <br></br>
          <Row>
            <Col>
              <br></br>
              <Form style={ {width: "60%", margin: "auto"} }>
                <h3>회원 로그인</h3>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <input type="email" placeholder="아이디를 입력해주세요" onChange={(e)=>(setId(e.target))} style={ {height: "50px", width: "100%", marginTop: "10px", borderRadius: "10px", borderColor: "#0000FF"} } />
                  <input type="password" placeholder="비밀번호를 입력해주세요" onChange={(e)=>(setPwd(e.target))} style={ {height: "50px", width: "100%", marginTop: "10px",  borderRadius: "10px",  borderColor: "#0000FF"} }/>
                </Form.Group>
                <Form.Group className='parent'>
                  <Button className='child' variant="success" type="submit">
                    NAVER
                  </Button>
                  <Button className='child' variant="danger" type="submit">
                    <FontAwesomeIcon icon={faGoogle} />
                  </Button>
                  <Button className='child2' variant="primary" type="submit" onClick={()=>{console.log("asdf")}}>
                    로그인
                  </Button>
                </Form.Group>
                <Button className='member' variant="white" type="submit">회원가입</Button>          
              </Form>
              <img src={스터디게임1} alt='스터디게임1' style={ {marginTop: "10px", width: "410px"} }></img>
            </Col>
            <Col>
            <br></br>
            <br></br>
            <br></br>
              <Card style={{ width: '90%', height: "90%", marginBottom: "40px", marginTop: "-60px", borderColor: "#0E4786", borderRadius: "30px"}}>
                <Card.Body>
                  <Card.Title>학원소개</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Check Mate</Card.Subtitle>
                  <Card.Text>
                  세림학원은 1988년부터 현재까지 영재고, 과학고, 자사고 등 명문고등학교 입학생과
                  서울대, 연세대, 고려대 등 명문대에 수 많은 합격생을 배출해 왔습니다.<br/><br></br>

                  
                  세림학원의 정신은 " 창의력이 세상을 바꾼다 " 입니다. <br></br><br></br>

                  그 동안 많은 인재들의 산실로 역할을 다 해 왔고, 
                  앞으로도 창의성 학습과 유연한 사고학습을 통해 특목전문성의 원류로서 더욱 거듭나겠습니다.<br></br><br></br>
                  
                  작은 노력들이 모이면 좋은 결과를 만들 수 있다는 신념을 가지고 
                  학생들을 최선을 다해 지도해 왔습니다.<br></br><br></br>
                  
                  한개의 촛불은 바람이 쉽게 꺼뜨릴 수 있지만, 많은 촛불이 모여 있으면 쉽게 꺼뜨릴 수 없습니다.
                  우리 아이들이 한걸음 한걸음 목표를 향해 나아갈 수 있도록 
                  정성을 모아 최선을 다 해 지도하겠습니다.<br></br>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br></br>
        </Container>
    )
}

export default Login;