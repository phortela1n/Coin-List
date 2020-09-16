import React from "react";
import Header from "../Header/Header";
import LoginButton from "../../LoginButton/LoginButton";
import "./NoAuthorized.scss";
import classes from "./BackgroundVideo.module.css";

function NoAuthorized() {
  const videoSource =
    "https://assets.mixkit.co/videos/preview/mixkit-rotating-shot-of-cryptocurrency-coins-over-dollar-bills-30660-large.mp4";
  return (
    <section className="full-page">
      <Header />

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
