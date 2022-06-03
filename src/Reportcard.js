import React, {useState, useEffect}from 'react';
import { Chart as ChartJS,RadialLinearScale,PointElement,LineElement,Filler,Tooltip,Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { Container, Col, Row, Table } from 'react-bootstrap';
import axios from 'axios';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ['사고력','연산력', '추리력', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '성적 분석표',
      data: [1, 9, 9, 8, 6, 7],
      backgroundColor: 'rgba(0, 0, 205, 0.2)',
      borderColor: 'rgba(0, 0, 205, 1)',
      borderWidth: 1,
    },
  ],
};

function Reportcard() {

  let [answerCheck, Setanswercheck] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://32cc594d-0939-47b2-b73e-f795c96a8f88.mock.pstmn.io/practice")
      .then((result) => {
        Setanswercheck(result.data);
        console.log(result)
        console.log("전체데이터")
      })
      .catch(() => {});
  }, []);

  return(
      <Container>
        <div>
          <p> 이름 : {answerCheck[0]?.nikname} </p>
          <p> 학년 : 중2</p>
          <p> {answerCheck[0]?.title} </p>             
          <p> 내 점수 : {answerCheck[0]?.sum}</p>             
        </div>
        <Row>
          <Col>
            <Table striped bordered hover variant="white" style={ { marginTop: "-6px",boxShadow: "3px 3px 0px rgb(202, 197, 197)" } }>
              <thead>
                <tr>
                  <th>문제번호</th>
                  <th>정답</th>
                  <th>내 정답</th>
                  <th>정답체크</th>
                </tr>
              </thead>
              <tbody>                  
                {
                  answerCheck&&answerCheck.map((i)=>{
                    return <AnswerView postAnswerList={answerCheck[0].postAnswerList} studentAnswers={answerCheck[0].studentAnswers} num={i} key={i}/>
                  })
                }
              </tbody>
            </Table>
          </Col>
          <Col>
              <Radar data={data} />
          </Col>
        </Row>
        <br></br>
        <br></br>
      </Container>
  );
}

function AnswerView(props){

  let [postAnswerDetail, setpostAnswerDetail] = useState();
  let [studentAnswersDetail, setstudentAnswersDetail] = useState();
  useEffect(() => {
    setpostAnswerDetail(props.postAnswerList)
    setstudentAnswersDetail(props.studentAnswers)
    console.log(postAnswerDetail)
    console.log("정답데이터")
  },[]);
  
  return(
    <>
      {
        postAnswerDetail&&postAnswerDetail.map((a,i)=>{
          return(
            <tr>
              <th>{i+1}</th>
              <th>{postAnswerDetail[i].anum}</th>
              <th>{studentAnswersDetail[i].anum}</th>
              <th>
                {postAnswerDetail[i].anum == studentAnswersDetail[i].anum ? "O" : "X"}
              </th>            
            </tr>
            
          )        
        })
      }
      
    </>
  )
}

// function AnswerViewDetail(props){

//   return(
//     <tr>
//       <th>{props.num+1}</th>
//       <th>{props.answerDetail?.anum}</th>
//       <th>{props.answerDetail?.anum}</th>
//       <th>
//         {props.answerDetail?.anum} = {props.answerDetail?.anum} ? O : X
//       </th>
//     </tr>
//   )
// }

export default Reportcard