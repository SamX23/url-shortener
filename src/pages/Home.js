import Container from "../component/Container";
import Row from "../component/Row";
import Col from "../component/Col";
import Card from "../component/Card";
import "../style/Home.css";

function Home() {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="col-md-6 offset-md-3">
          <Card className="card">
            <div className="text-center">
              <img
                src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/qr_code-256.png"
                width="140"
                alt="logo"
              />
              <br />
              <small>QRcode and URL Shortener Generator</small>
            </div>
            <form className="mt-2">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control search__input"
                  placeholder="Your URL"
                  autoComplete="off"
                />
              </div>
              <button className="btn btn-primary btn-block">Generate</button>
            </form>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5 ">
        <Col className="col-md-6 offset-md-3">
          <Card className="card">
            <div className="text-center">
              <small>Result</small>
              <br />
            </div>
            <ul className="list-group mt-3">
              <li className="list-group-item">
                Short Url : <a href="">xxx</a>
              </li>
              <li className="list-group-item">
                Alternative Url : <a href="">xxx</a>
              </li>
              <li className="list-group-item">
                Original Url : <a href="">xxx</a>
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
