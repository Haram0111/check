import React, {useState} from 'react'
import { Container, Row, Col, Form, InputGroup,FormControl,Button,Table,ButtonGroup} from 'react-bootstrap';
import {Route} from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Q_A(){

  let history = useHistory();

  return(
      <Container>
        <div><h1>Q / & / A</h1></div>
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> 1 </td>
              <td> 대연고 중간고사 문제 3번 이상한 것 같습니다. </td>
              <td> 고3 </td>
              <td>김명준</td>
              <td>22.02.10</td>
            </tr>              
          </tbody>
        </Table>

        <Button variant="primary" style={ {marginLeft: "94%"} }  onClick={()=>{ history.push('/Q_A/upload') }}>글쓰기</Button>
        <br></br>
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

export default Q_A;