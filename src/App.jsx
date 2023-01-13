import styled from "@emotion/styled"
import BottomTabs from "./components/BottomTabs"
import { Global, css } from "@emotion/react";
import { Dashboard } from "./screens/Dashboard";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./routes/routes";

const GlobalStyles = css`
    body {
      background-color: #f1f2f3;
      font-family: 'Poppins', sans-serif;
    }
`
const Container = styled.div`
  display: flex;
  justify-content: center;
`
const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  background: #fff;
  width: fit-content;
  border-radius: 40px;
  box-shadow: 0px 10px 40px 0px #1D161712;

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
