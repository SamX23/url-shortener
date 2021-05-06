import Container from "../component/Container";
import axios from "axios";
import Row from "../component/Row";
import Col from "../component/Col";
import Card from "../component/Card";
import Loading from "../component/Loading";
import Error from "../component/Error";
import "../style/Home.css";
import { useEffect, useState } from "react";
import Result from "../component/Result";

const Home = () => {
  const [history, setHistory] = useState([]);
  const [link, setLink] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [result, setResult] = useState();
  const [isError, setError] = useState();

  useEffect(() => {
    const localHistory = localStorage.getItem("history");
    if (localHistory) {
      setHistory(JSON.parse(localHistory));
    }
  }, [setHistory]);

  const isValidURL = () => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!pattern.test(link);
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult();
    setError();

    try {
      if (!isValidURL()) {
        const err = {
          data: { error: "Please input a valid URL!" },
        };
        setError(err);
        setLoading(false);
        return;
      }

      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );

      setResult(response.data.result);
      const historyLog = [...history, response.data.result];
      setHistory(historyLog);
      localStorage.setItem("history", JSON.stringify(historyLog));
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <div className="qrcode-card">
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
          </div>
        </Col>
      </Row>

      {result && <Result result={result} />}
      {isLoading && !result && <Loading />}
      {isError && <Error error={isError} />}
    </Container>
  );
};

export default Home;
