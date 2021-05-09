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

  const reset = () => {
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
  };

  const submit = async (e) => {
    e.preventDefault();

    reset();

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
    }

    await axios
      .get(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then((response) => {
        dispatch({
          type: "SET_RESULT",
          result: response.data.result,
        });
        dispatch({
          type: "SET_HISTORY",
          history: [...history, response.data.result],
        });
        localStorage.setItem(
          "history",
          JSON.stringify([...history, response.data.result])
        );
      })
      .catch((error) =>
        dispatch({
          type: "SET_ERROR",
          error: error.response,
        })
      );

    dispatch({
      type: "SET_LOADING",
      isLoading: false,
    });
  };

  return (
    <Container className="my-5">
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
