import Container from "../component/Container";
import axios from "axios";
import Row from "../component/Row";
import Col from "../component/Col";
import Card from "../component/Card";
import Loading from "../component/Loading";
import Error from "../component/Error";
import { useEffect } from "react";
import Result from "../component/Result";
import { useStateValue } from "../context/StateProvider";
import UrlValidation from "../functions/urlValidator";
import "../style/Home.css";

const Home = () => {
  const [
    { error, result, isLoading, link, history },
    dispatch,
  ] = useStateValue();

  useEffect(() => {
    const localHistory = localStorage.getItem("history");
    if (localHistory) {
      dispatch({
        type: "SET_HISTORY",
        history: JSON.parse(localHistory),
      });
    }
  }, [dispatch]);

  const fetching = async () => {
    try {
      dispatch({
        type: "SET_LOADING",
        isLoading: true,
      });

      dispatch({
        type: "SET_RESULT",
        result: null,
      });

      dispatch({
        type: "SET_ERROR",
        error: null,
      });

      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      return response.data.result;
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        error: error.response,
      });
      return new Error(error.response);
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!UrlValidation(link)) {
      const err = {
        data: {
          error: "Please input a valid URL!",
        },
      };

      dispatch({
        type: "SET_ERROR",
        error: err,
      });

      dispatch({
        type: "SET_LOADING",
        isLoading: false,
      });
      return;
    }

    try {
      const data = await fetching();
      const historyLog = [...history, data];
      dispatch({
        type: "SET_RESULT",
        result: data,
      });
      dispatch({
        type: "SET_HISTORY",
        result: historyLog,
      });
      localStorage.setItem("history", JSON.stringify(historyLog));
    } catch (e) {}

    dispatch({
      type: "SET_LOADING",
      isLoading: false,
    });
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
                    onChange={(e) =>
                      dispatch({
                        type: "SET_LINK",
                        link: e.target.value,
                      })
                    }
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
      {error && <Error error={error} />}
    </Container>
  );
};

export default Home;
