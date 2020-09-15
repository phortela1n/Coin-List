import React, { useRef, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from "react-redux";
import * as d3 from "d3";
import { CircularProgress } from "@material-ui/core";
import Header from "../Common/Header/Header";
import NoAuthorized from "../Common/NoAuthorized/NoAuthorized";
import { Container } from "@material-ui/core/";
import BarChartShareControl from "./Stats2";

import { select } from "d3";

export default function Stats() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [data, setData] = useState([25, 30, 45, 60, 20]);
  const svgRef = useRef();

  const dataForStats2 = [25, 30, 45, 60, 20];
  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", (value) => value)
      .attr("cx", (value) => value * 2)
      .attr("cy", (value) => value * 2)
      .attr("stroke", "green");
  }, [data]);
  useEffect(() => {
    setData(data.map((value) => value));
  }, []);
  if (isLoading) {
    return (
      <center>
        <>
          <CircularProgress className="loadcircle" color="secondary" />
        </>
      </center>
    );
  }
  return (
    (isAuthenticated && (
      <>
        <Header />
        <svg ref={svgRef}></svg>
        <br />
        <svg>
          <circle cx="150" cy="77" r="40" />
        </svg>
        <button onClick={() => setData(data.map((value) => value + 5))}>
          Update data
        </button>
        <button onClick={() => setData(data.filter((value) => value < 35))}>
          Filter data
        </button>
        <BarChartShareControl data={dataForStats2} width={120} height={300} />
      </>
    )) || <NoAuthorized />
  );
}
