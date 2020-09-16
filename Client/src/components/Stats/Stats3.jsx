import React, { useRef, useEffect, useState } from "react";
import { select, axisBottom, axisRight, scaleLinear, scaleBand } from "d3";

function Stats3() {
  const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75]);
/*   const data2 = [
    { value: 25, index: "ETH" },
    { value: 50, index: "BTC" },
    { value: 75, index: "BTC" },
  ];
  const symbols = ["ETH, LTC, LTC, LTC, LTC, LTC, LTC"]; */
  const svgRef = useRef();

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleBand()
      .domain(data.map((elem, index) => index))
      .range([0, 300])
      .padding(0.1);

    //Set table maximun value
    const yScale = scaleLinear().domain([0, 150]).range([150, 0]);

    const colorScale = scaleLinear()
      .domain([75, 100, 150])
      .range(["red", "orange", "green"])
      .clamp(true);

    const xAxis = axisBottom(xScale).ticks(data.length);

    svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);

    const yAxis = axisRight(yScale);
    svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")

      .style("transform", "scale(1, -1)")
      .style("fill", (d) => d.color)
      .attr("x", (value, index) => xScale(index))
      .attr("y", -150)
      .attr("width", xScale.bandwidth())
      .transition()
      .duration(1500)
      .attr("fill", colorScale)
      .attr("height", (value) => 150 - yScale(value));
  }, [data]);

  return (
    <React.Fragment>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
      <button onClick={() => setData(data.map((value) => value + 50))}>
        Update data
      </button>
    </React.Fragment>
  );
}

export default Stats3;
