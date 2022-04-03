import React, {useState} from 'react'
import { Container, Row, Col, Form, InputGroup,FormControl,Button,Table,ButtonGroup} from 'react-bootstrap';
import {Route} from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Data from './Data.js'

function Question_table(){

    let [question,question변경] = useState(Data);

    return(
        <Container>
          <div><h1>Q / U / E / S / T / I / O / N</h1></div>
          <hr style={ {color: "#0E4786", height: "5px", width: "68%", margin: "15px auto 0"} }></hr>
          <br></br>
          <Row>
            <Col>
              <Form.Select aria-label="Default select example" style={ {width: "100px"} }>
                <option>학년</option>
                <option value="1">고3</option>
                <option value="2">고2</option>
                <option value="3">고1</option>
                <option value="3">중3</option>
                <option value="3">중2</option>
                <option value="3">중1</option>
              </Form.Select>
            </Col>
            <Col>
              <InputGroup className="mb-2" style={ {width: "400px", marginLeft: "37%"} }>
              <FormControl
                placeholder="검색어를 입력하세요"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"                
              />
              <Button variant="primary" id="search-button">
                검색
              </Button>
            </InputGroup>
            </Col>         
          </Row>
          
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
                question.map((a,i)=>{
                  return <Question question={question[i]} num={i} key={i}/>
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

function Question(props){
  
  let history = useHistory();

  return(
    <tr>
      <td>{props.question.id}</td>
      <td>{props.question.title}
      <Button variant="outline-success" size="sm" onClick={()=>{history.push('/question_table/' + props.question.id)}} style={ {marginLeft: "10px", height: "30px", borderRadius: "7px"} }>문제보기</Button>{'  '}
      <Button variant="outline-success" size="sm" onClick={()=>{history.push('/question_table/answer/' + props.question.id)}} style={ {marginLeft: "10px", height: "30px",borderRadius: "7px"} }>정답체크하기</Button> </td>
      <td>{props.question.grade}</td>
      <td>{props.question.teacher}</td>
      <td>{props.question.date}</td>
      <td>{props.question.views}</td>
      <td>{props.question.likes}</td>
    </tr>
  )
}

export default Question_table;