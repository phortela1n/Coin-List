import React from "react";
import Header from "../Header/Header";
import LoginButton from "../../LoginButton/LoginButton";
import { Container } from "@material-ui/core/";
import "./NoAuthorized.scss";
import classes from "./BackgroundVideo.module.css";

function NoAuthorized() {
  const videoSource =
    "https://assets.mixkit.co/videos/preview/mixkit-rotating-shot-of-cryptocurrency-coins-over-dollar-bills-30660-large.mp4";
  return (
    <section className="full-page">
      <Header />

      {/* <Container maxWidth="sm" className="big-container-default">
        <Container
          maxWidth="sm"
          className="big-container-default__coin-container default-authorization"
        >
          <h2 className="default-authorization__authorized-title">
            You are not authorized, please Log in:
          </h2>
          <buttom>
            <LoginButton />
          </buttom>
        </Container>
      </Container> */}

      <div className={classes.Container}>
        <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={classes.Content}>
          <div className={classes.SubContent}>
            <buttom>
              <LoginButton />
            </buttom>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NoAuthorized;
