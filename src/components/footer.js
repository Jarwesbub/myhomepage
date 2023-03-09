import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './navbar_footer.css';


export default function Footer(){
    const copyright = "@ 2023 Copyright: ";
    return (
        <footer className="bar-main">
            <Container fluid='true'  className='footer-wrapper'>
                <Row className="w-100">
                    <Col>
                        <h6>Contact info:</h6>
                        <a href="mailto:jarwes90@gmail.com?">jarwes90@gmail.com</a>
                    </Col>
                    <Col>
                    <div className="footer-copyright text-center py-3"> { copyright } 
                <a href="https://github.com/">GitHub</a>
            </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}