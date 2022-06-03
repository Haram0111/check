import React, {useState} from 'react'
import { Container, Row, Col, Form, InputGroup,FormControl,Button,Table,ButtonGroup} from 'react-bootstrap';

function QADetailComment(){
  
  let [comment,comment변경] = useState([]);
  let [input, input변경] = useState('');

  return(
      <Container>
        {
          comment.map(function(a,i){
            return (
              <div className='list' key={i}>
                <p> { a } </p>
                <hr/>
              </div>
            )
          })
        }
        <div className='publish'>
          <input onChange={(e)=>{input변경(e.target.value)}}/>
          <button onClick={()=>{
            let arrayCopy = [...comment]
            arrayCopy.unshift(input);
            comment변경(arrayCopy); 
            } }>저장</button>
        </div>
      </Container>
  )
}

export default QADetailComment;