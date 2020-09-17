import React, { useRef, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { CircularProgress } from "@material-ui/core";
import Header from "../Common/Header/Header";
import NoAuthorized from "../Common/NoAuthorized/NoAuthorized";
import BarChartShareControl from "./BarChartShareControl";
import Stats3 from "./Stats3";

import { select } from "d3";

export default function Stats() {
  const { isAuthenticated, isLoading } = useAuth0();

  const dataForStats2 = [25, 30, 45, 60, 20];
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
        <BarChartShareControl data={dataForStats2} width={120} height={300} />
        <Stats3 />
      </>
    )) || <NoAuthorized />
  );
}
