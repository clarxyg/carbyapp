import styled from "@emotion/styled"
import { Global, css } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./routes/routes";

const GlobalStyles = css`
    body {
      background-color: #f1f2f3;
      font-family: 'Poppins', sans-serif;
    }

    .css-q0jhri-MuiInputBase-root-MuiInput-root:after {
      display: none;
    }

    .MuiOutlinedInput-notchedOutline  {
    border: none !important;
  }

    .css-q0jhri-MuiInputBase-root-MuiInput-root:before {
      display: none !important;
    }
    .apexcharts-text tspan {
      display: none;
    }
    .apexcharts-toolbar {
      display: none !important;
    }

    .apexcharts-tooltip {
      background: linear-gradient(274.42deg, #C58BF2 0%, #EEA4CE 124.45%) !important;
      color: #fff;
  }
  .css-v6mo1y-MuiTimelineDot-root {
    background: linear-gradient(274.42deg, #C58BF2 0%, #EEA4CE 124.45%) !important;
    box-shadow: unset !important;
  }

  .css-ha3bif-MuiTimelineItem-root {
    min-height: unset !important;
  }
  .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series {
    display: none !important;
  }

  a {
    text-decoration: none;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`
const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: scroll;

  background: #fff;
  width: fit-content;
  border-radius: 40px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: 0px 10px 40px 0px #1D161712;
  overflow: scroll;
  min-height: 500px;
`

function App() {

  return (
    <BrowserRouter>
      <Container>
        <Global styles={GlobalStyles} />
        <Mobile>
          <Navigation />
        </Mobile>
      </Container>
    </BrowserRouter>
  )
}

export default App
