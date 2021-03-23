import React from "react";
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
              <div className="form-group">
                <input
                  type="text"
                  className="form-control search__input"
                  placeholder="Your URL"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block">Generate</button>
              </div>
            </form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
