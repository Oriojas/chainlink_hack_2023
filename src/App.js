import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carrousel from "./components/Carrousel";
import NavBar from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col className="col-12">
            <header>
              <Container className="container-fix">
                <Row className="justify-content-md-center">
                  <Col className="text-center shadow-lg p-3 mb-4 mt-4 bg-body rounded-3 bg-transparent text-dark">
                    <Col className="col-md-12">
                      <NavBar></NavBar>
                    </Col>
                  </Col>
                </Row>
              </Container>
            </header>

            <body>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Container className="mt-5">
                <Row className="justify-content-md-center">
                  <Col className="col-md-6 text-center shadow-lg p-3 mb-4 bg-body rounded-3">
                    <Carrousel></Carrousel>
                  </Col>

                  <Col className="col-md-5 offset-md-1 text-center shadow-lg p-3 mb-4 bg-body rounded-3">
                    <h2>Cuadro 2</h2>
                    <p>
                      Phasellus quis massa id libero posuere consectetur id ac
                      mi. Praesent ut condimentum diam. Suspendisse eget odio
                      vitae justo gravida bibendum sed eget ex. Fusce sodales,
                      arcu eu vehicula rhoncus, massa ante varius dolor, et
                      laoreet enim nisl a nisi. In sit amet tellus in lorem
                      dapibus posuere. Cras purus metus, aliquet sit amet
                      venenatis id, varius quis metus.
                    </p>
                  </Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col className="text-center shadow-lg p-3 mb-4 bg-body rounded-3">
                    <h2>Cuadro grande</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam nec diam risus. Nullam semper vulputate ipsum, nec
                      faucibus nibh ultricies eget. Proin at lectus felis. Sed
                      nec tempor purus. Quisque a efficitur libero. In hac
                      habitasse platea dictumst. Vestibulum ac ultrices risus.
                      Vestibulum placerat elementum sollicitudin.
                    </p>
                    <p>
                      Phasellus quis massa id libero posuere consectetur id ac
                      mi. Praesent ut condimentum diam. Suspendisse eget odio
                      vitae justo gravida bibendum sed eget ex. Fusce sodales,
                      arcu eu vehicula rhoncus, massa ante varius dolor, et
                      laoreet enim nisl a nisi. In sit amet tellus in lorem
                      dapibus posuere. Cras purus metus, aliquet sit amet
                      venenatis id, varius quis metus.
                    </p>
                  </Col>
                </Row>
              </Container>
            </body>

            <footer>
              <Container>
                <Row className="justify-content-md-center">
                  <Col className="text-center shadow-lg p-3 mb-5 bg-body rounded-3">
                    <h3>Pie</h3>
                  </Col>
                </Row>
              </Container>
              <Container className="text-center">
                <h6>Creative Commons ®️</h6>
                <h6>2023</h6>
              </Container>
            </footer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
