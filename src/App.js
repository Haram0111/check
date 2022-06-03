import React, {useState} from 'react'
import { Navbar,Nav,Container,Row,Col,Card,Button,Alert,Form,Table,ButtonGroup,InputGroup,FormControl} from 'react-bootstrap';
import logo from './logo.svg';
import {Route, Link} from 'react-router-dom'
import axios from 'axios';
import './App.css';
import 세림학원 from './img/세림학원.PNG'
import 세로사진 from './img/스터디게임.png'
import 광고 from './img/광고.png'
import Login from './login.js'
import Question_table from './Question_table'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhoneAlt, faBackward} from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import QA from './QA'
import QADetailComment from './QADetailComment'
import QuestionDetail from './QuestionTableDetail'
import Uploadquestion from './uploadquestion'
import Check from './Check.js'
import Mate from './Mate'
import QuestionView from './QuestionView'
import Membership from './membership'
import Users from './Users'
import Reportcard from './Reportcard'

function App() {

  let history = useHistory();

  return (
    <div className="App">
      <Navbar>
        <Container style={{height: "50px", padding: "8px" }}>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className='navmenu text-body'><Link to='/login'> 제휴와 협력</Link> </Navbar.Text>
            <Navbar.Text className='navmenu text-body'><Link to='/Membership'>회원가입</Link>  </Navbar.Text>
            <Navbar.Text className='navmenu text-body'><Link to='/login'>Sign in</Link>  </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <img src={세림학원} alt='세림학원' className='logo' onClick={()=>{ history.push('/') }}></img>
      </Container>
      <Nav activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Container fluid="md">
        <br></br>
        <Nav justify variant="tabs" defaultActiveKey="/" >
          <Nav.Item>
            <Nav.Link onClick={()=>{history.push('/question_table')}} style={ {color: "black"} }> 문제게시판 </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{history.push('/Q_A')}} style={ {color: "black"} }>문의사항</Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link onClick={()=>{history.push('/Mate')}} style={ {color: "black"} }>My Mate 확인하기</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{history.push('/Check')}} style={ {color: "black"} }>성적표확인</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{history.push('/uploadquestion')}} style={ {color: "black"} }>문제등록</Nav.Link>
          </Nav.Item>
        </Nav>
        </Container>
      </Nav>
      <br></br>
      
      <Route exact path='/'>
        <Container className='mainpage'>
          <Row>
            <Col>            
              <문제box2/>
              <문제box2/>
              <문제box2/>
              <br></br>
            </Col>
            <Col>
              <문제box2/>
              <문제box2/>
              <문제box2/>
              <br></br>
            </Col>
            <Col xs lg="2">
              <Row>
                <img src={세로사진} alt='세로사진' className="광고"></img>
              </Row>
              <Row>
                <img src={광고} alt='광고' className="광고"></img>
              </Row>
            </Col>
          </Row>
        </Container>
        <br></br>
        <br></br>
      </Route>

      <Route path='/login'>
        <Login/>
      </Route>

      <Route path='/Users'>
        <Users/>
      </Route>

      <Route path='/Membership'>
        <Membership/>
      </Route>

      <Route exact path='/Check'>
        <Check/>
      </Route>
      
      <Route exact path='/Reportcard'>
        <Reportcard/>
      </Route>

      <Route exact path='/Q_A'>
        <QA/>
      </Route>

      <Route exact path='/Q_A/detail/:id'>
        <QA/>
        <QADetailComment/>
      </Route>

      <Route exact path='/Mate'>
        <Mate/>
      </Route>

      {/* <Route exact path='/Mate/:id'>
        <Row>
          <Col sm={8}><Mate/></Col>
          <QuestionDetail></QuestionDetail>
        </Row>
      </Route> */}

      <Route exact path='/Q_A/upload'>
        <Container>
          <Form>
            <FontAwesomeIcon icon={faBackward} onClick={ ()=> {history.goBack()} }/>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <h3>문제 제목</h3>
            <Form.Control type="email" style={ {width: "600px", borderColor: "black"} } placeholder="제목을 입력해주세요" />                    
            <Form.Select style={ {width: "200px",borderColor: "black"} } aria-label="Default select example">
                <option>학년</option>
                <option value="1">고3</option>
                <option value="2">고2</option>
                <option value="3">고1</option>
                <option value="4">중3</option>
                <option value="5">중2</option>
                <option value="6">중1</option>
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <h3>문제 설명</h3>
                <Form.Control as="textarea" rows={5} style={ {borderColor: "black"} }/>
            </Form.Group>
          </Form>
          <h3>문제 첨부하기</h3>
          <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Control style={ {borderColor: "black"} } type="file" multiple />
          </Form.Group>
          <Button style={ {borderRadius: "10px"} }>등록</Button>
        </Container>
      </Route>

      <Route exact path='/question_table'>
        <Question_table/>
      </Route>

      <Route exact path='/question_table/:id'>
        <Row>
          <Col sm={8}><Question_table/></Col>
          <QuestionDetail></QuestionDetail>
        </Row>
      </Route>
      
      <Route exact path='/question_table/:id/viewer'>
        <QuestionView/>
      </Route>
      
      <Route exact path='/uploadquestion'>
        <Uploadquestion/>
      </Route>

      <Route exact path='/question_table/answer/:id'>
        <Row>
          <Col sm={8}><Question_table/></Col>
          <Col sm={4}>
            
            <div>question 1번 문제 입니다.</div>
            <Button onClick={ ()=> {history.push('/question_table')} }>제출하기</Button>
            <Button onClick={ ()=> {history.push('/question_table')} }>좋아요</Button>            
          </Col>
        </Row> 
      </Route>

      <Alert variant="dark">
        <Alert.Heading>Check Mate</Alert.Heading>
        <p>회사명 : 세림학원(617-86-22859)<br></br>
          대표자 : 신광호<br></br>
          주소: 부산광역시 수영구 황령대로489번길 10 3층,4층 전관 (남천동)<br></br>
          전화번호 : <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon> 051-626-9463<br></br>
          팩스: 051-911-1147 <br></br>
          이용약관 ▪ 개인정보취급방침
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things nice
          and tidy.
        </p>
        <a> © developer kmj, ohr </a>
      </Alert>

    </div>
  )
}

function 문제box2(){
  return(
    <div>
      <hr style={ {color: "#0E4786", width: "100%", height: "6px", marginBottom: "6px"} }></hr>
      <Card className='ques_card'>
        <Card.Body>
          <Card.Header className='questionbox' style={ {borderRadius: "10px"} }><h5>고3</h5></Card.Header>
          <Card.Subtitle className="mb-2 text-muted">수학</Card.Subtitle>
          <Card.Text>
            2022.01.27 현우진T 수1 지수와 로그
          </Card.Text>
          <Card.Text>
            2022.01.28 김명준T 미적분 정적분            
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default App;
