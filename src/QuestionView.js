import React, { useState, useRef } from 'react';
import Pdf, { usePdf } from '@mikecousins/react-pdf';
import { Container } from 'react-bootstrap';

function QuestionView(){
    return(
        <Container>
            <object type='application/pdf' data="./img/P2-HTML5.pdf" width={600} height={500}>
                <p>대체 항목입니다.</p>
            </object>
        </Container>
        
    )
}

export default QuestionView;