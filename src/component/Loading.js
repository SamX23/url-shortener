import Container from "../component/Container";
import Row from "../component/Row";
import Col from "../component/Col";
import Card from "../component/Card";
import "../style/Loading.css";

const Loading = () => (
  <Container>
    <Row className="mt-5 ">
      <Col>
        <div className="qrcode-card">
          <Card className="card">
            <div className="text-center">
              <div className="title_result loading"></div>
              <div className="qr_result loading mt-2"></div>
            </div>
            <ul className="list-group mt-3">
              <li className="list-group-item-load loading"></li>
              <li className="list-group-item-load loading"></li>
              <li className="list-group-item-load loading"></li>
            </ul>
          </Card>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Loading;
