import React, { useRef, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
/* import { connect } from "react-redux"; */
import * as d3 from "d3";

import { select } from "d3";

const BarChartShareControl = ({ width, height, data }) => {
  debugger;
  /*   const { user, isAuthenticated, isLoading } = useAuth0(); */
  let svgRef = useRef(null);

  useEffect(() => draw(), []);

  const draw = () => {
    //    Define scales
    const xScale = d3
      .scaleBand()
      .domain(d3.range(0, data.length))
      .range([0, height]);
    const yScale = d3.scaleLinear().domain([-3, 3]).range([0, height]);

    //grab elements and style positions
    d3.select(svgRef.current)
      .selectAll("rect")
      .data(data)
      .transition()
      .duration(1000)
      .attr("x", (d) => xScale(d.x))
      .attr("y", (d) => xScale(d.y))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.y))
      .style("fill", (d) => d.color);
  };

  //    Create elementsbut with anything special
  const bars = data.map((d) => <rect key={d.x} />);
  /*   if (isLoading) {
    return (
      <center>
        <>
          <CircularProgress className="loadcircle" color="secondary" />
        </>
      </center>
    );
  } */
  return (
    /*  (isAuthenticated && ( */
    <svg width={width} height={height} ref={svgRef}>
      {bars}
    </svg>
    /* )) || <NoAuthorized /> */
  );
};

export default BarChartShareControl;
