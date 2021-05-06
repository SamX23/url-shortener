import Row from "../component/Row";
import Col from "../component/Col";
import Card from "../component/Card";

const Result = ({ result }) => {
  return (
    <Row className="mt-5 ">
      <Col>
        <div className="qrcode-card">
          <Card className="card">
            <div className="text-center">
              <small>Result</small>
              <br />
              <img
                src={`https://qrtag.net/api/qr_transparent_6.png?url=${result.original_link}`}
                alt="qrcode"
              />
            </div>
            <ul className="list-group mt-3">
              <li className="list-group-item">
                Short Url : <a href={result.short_link}>{result.short_link}</a>
              </li>
              <li className="list-group-item">
                Alternative Url :{" "}
                <a href={result.short_link2}>{result.short_link2}</a>
              </li>
              <li className="list-group-item">
                Original Url :{" "}
                <a href={result.original_link}>{result.original_link}</a>
              </li>
            </ul>
          </Card>
        </div>
      </Col>
    </Row>
  );
};

export default Result;
