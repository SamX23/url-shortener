import Container from "../component/Container";
import axios from "axios";
import Row from "../component/Row";
import Col from "../component/Col";
import Card from "../component/Card";
import Loading from "../component/Loading";
import Error from "../component/Error";
import "../style/Home.css";
import { useState } from "react";

function Home() {
  const [link, setLink] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [result, setResult] = useState();
  const [isError, setError] = useState();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await axios
      .get(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .catch((err) => setError(err));

    setResult(response.data.result);
  };

  return (
    <>
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
              <form className="mt-2 text-center" onSubmit={submit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control search__input"
                    placeholder="Your URL"
                    autoComplete="off"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Generate
                </button>
              </form>
            </Card>
          </Col>
        </Row>

        {result && (
          <Row className="mt-5 ">
            <Col className="col-md-6 offset-md-3">
              <Card className="card">
                <div className="text-center">
                  <small>Result</small>
                  <br />
                </div>
                <ul className="list-group mt-3">
                  <li className="list-group-item">
                    Short Url :{" "}
                    <a href={result.short_link}>{result.short_link}</a>
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
            </Col>
          </Row>
        )}
      </Container>

      {isLoading && !result && <Loading />}
      {isError && <Error />}
    </>
  );
}

export default Home;
