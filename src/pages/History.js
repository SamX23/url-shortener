import Container from "../component/Container";
import Row from "../component/Row";
import Col from "../component/Col";
import Card from "../component/Card";
import { useEffect, useState } from "react";

const History = () => {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const localhistory = localStorage.getItem("history");
    if (localhistory) {
      setHistory(JSON.parse(localhistory));
    }
  }, [setHistory]);

  return (
    <Container className="mt-5">
      <Row className="mb-5">
        <Col className="col-md-10 offset-md-1 d-grid">
          <h4 className=" text-center m-auto p-5">History</h4>
          <Card className="card">
            {history && history.length > 0 ? (
              <table className="table m-auto w-100">
                <thead>
                  <tr>
                    <th>Original URL</th>
                    <th>Short URL</th>
                    <th>Alternative URL</th>
                    <th>QR URL</th>
                  </tr>
                </thead>
                <tbody>
                  {history
                    .slice()
                    .reverse()
                    .map((result, key) => (
                      <tr key={key}>
                        <td>
                          <a href={result.original_link}>
                            {result.original_link}
                          </a>
                        </td>
                        <td>
                          <a href={result.short_link}>{result.short_link}</a>
                        </td>
                        <td>
                          <a href={result.short_link2}>{result.short_link2}</a>
                        </td>
                        <td>
                          <img
                            src={`https://qrtag.net/api/qr_transparent_6.png?url=${result.original_link}`}
                            alt="qrcode"
                            width="70"
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            ) : (
              <h3>No history yet.</h3>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default History;
