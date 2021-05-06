import Container from "../component/Container";
import Row from "../component/Row";
import Col from "../component/Col";

const Error = (error) => (
  <Container className="mt-5">
    <Row>
      <Col className="col-12 col-md-12">
        <div className="text-center">
          <h4>Oops ! Something went wrong !</h4>
          <p>{error.data}</p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Error;
