import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Container>
          <Row className="justify-content-md-center">
            <Col className='text-center'>
              <h1>Hola</h1>
            </Col>  
          </Row>          
        </Container>        
      </header>

      <body>
      <Container>
          <Row className="justify-content-md-center">
            <Col className='text-center'>
              <h2>Cuadro 1</h2>
            </Col>
            <Col className='text-center'>
              <h2>Cuadro 2</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col className='text-center'>
              <h2>Cuadro grande</h2>
            </Col>
          </Row>
        </Container>
      </body>

      <footer>
        <Container>
          <Row className="justify-content-md-center">
            <Col className='text-center'>
              <h3>Pie</h3>
            </Col>            
          </Row>          
        </Container>
        
      </footer>

    </div>
  );
}

export default App;
