import React, {useState,useEffect} from 'react'
import { Row, Col, Button} from 'react-bootstrap';
import {Route} from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import axios from 'axios';

function QuestionDetail(){
    
    let history = useHistory();
    let [question,setQuestion] = useState([]);
    let [comment,setComment] = useState([]);

    useEffect(() => {
        axios
          .get("https://32cc594d-0939-47b2-b73e-f795c96a8f88.mock.pstmn.io/posts")
          .then((result) => {
            setQuestion(result.data);
          })
          .catch(() => {});
      }, []);
    useEffect(() => {
        axios
          .get("https://32cc594d-0939-47b2-b73e-f795c96a8f88.mock.pstmn.io/comment")
          .then((result) => {
            setComment(result.data);
          })
          .catch(() => {});
      }, []);

    return(
        <Col sm={4} style={ {marginTop: "20px"} }>
            <h3> {question[comment[2].id].title} </h3>
            <Row style={ {marginTop: "20px"} }>
                <Col> <h5> {question[0].teacher} </h5> </Col>
                <Col style={ {marginLeft: "130px"} }> <h5> {question[0].date} </h5> </Col>
            </Row>     
            <h5 style={ {marginLeft: "400px"} }> 첨부파일 <FontAwesomeIcon icon="fa-light fa-album-collection" /> </h5>
            <div style={ {height: "250px"} }>
                <h5> 문제에 대한 설명이 필요합니다. </h5>
            </div>
            <Button style={ {marginLeft: "200px"} } onClick={ ()=> {history.push('/question_table/answer/'+question[0].id)} }>정답체크 하러가기</Button>
            <Button style={ {marginLeft: "20px"} } onClick={ ()=> {history.push('/question_table/'+question[0].id+'/viewer')} }>문제보기</Button>
            <Button style={ {marginLeft: "20px"} } onClick={ ()=> {history.goBack()} }>뒤로가기</Button>
        </Col>

    )
}

export default QuestionDetail;

