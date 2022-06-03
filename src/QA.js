import React, {useState, useEffect} from 'react'
import { Container, Col, Row, Form, InputGroup,FormControl,Button,Table,ButtonGroup} from 'react-bootstrap';
import {Route} from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

function QA(){

  let history = useHistory();
  let [QAquestion,setQAquestion] = useState([]);

  useEffect(() => {
    axios
      .get("https://32cc594d-0939-47b2-b73e-f795c96a8f88.mock.pstmn.io/list")
      .then((result) => {
        setQAquestion(result.data);
      })
      .catch(() => {});
  }, []);

  return(
      <Container>
        <div><h1>Q / & / A</h1></div>
        <hr style={ {color: "#0E4786", height: "5px", width: "68%", margin: "15px auto 0"} }></hr>
        <br></br>
        <Form.Group className='parent'>
            <div className='child2'>
              <Form.Select aria-label="Default select example" style={ {width: "100px"} }>
                <option>학년</option>
                <option value="1">고3</option>
                <option value="2">고2</option>
                <option value="3">고1</option>
                <option value="3">중3</option>
                <option value="3">중2</option>
                <option value="3">중1</option>
              </Form.Select>
            </div>
            <div className='child2'>
              <InputGroup className="mb-2" style={ {width: "400px", marginLeft: "400px"} }>
                <FormControl
                  placeholder="검색어를 입력하세요"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"                
                />
                <Button variant="primary" id="search-button">
                  검색
                </Button>
              </InputGroup>
            </div>
        </Form.Group>
            
        
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
            {
              QAquestion.map((a,i)=>{
                return <Issue QAquestion={QAquestion[i]} num={i} key={i}/>
              })
            }              
          </tbody>
        </Table>
        <div>
          <Button variant="primary" style={ {width: "79px", marginLeft: "94%"} }  onClick={()=>{ history.push('/Q_A/upload') }}>글쓰기</Button>
        </div>
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
function Issue(props){
  
  let history = useHistory();

  return(
    <tr>
      <td>{props.QAquestion.id}</td>
      <td onClick={()=>{history.push('/Q_A/detail/' + props.QAquestion.id)}}>{props.QAquestion.title}</td>
      <td>{props.QAquestion.grade}</td>
      <td>{props.QAquestion.writer}</td>
      <td>{props.QAquestion.createDate}</td>
    </tr>
  )
}
export default QA;