import React, {useState} from 'react'
import { Container, Row, Col, Form, Card,Alert,Button,Table,ButtonGroup} from 'react-bootstrap';
import {Route} from 'react-router-dom'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Mate from './Mate'
import Question from './Question_table1';

function Mate1(props){


    let history = useHistory();

    return(
        <Row>
            <Col sm={8}>
                <Mate></Mate>
            </Col>
            <Col sm={4}>
                <Question></Question>
            </Col>
        </Row>
    )
}


export default Mate1;