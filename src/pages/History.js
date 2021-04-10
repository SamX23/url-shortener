import Container from "../component/Container";
import Row from "../component/Row";
import Col from "../component/Col";
import Card from "../component/Card";

function History() {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="col-md-10 offset-md-1">
          <h4>History</h4>
          <Card className="card">
            <table className="table">
              <thead>
                <tr>
                  <th>Original URL</th>
                  <th>Short URL</th>
                  <th>Alternative URL</th>
                  <th>QR URL</th>
                </tr>
              </thead>
              <tbody>
                <td>xx</td>
                <td>xx</td>
                <td>xx</td>
                <td>xx</td>
              </tbody>
            </table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default History;
