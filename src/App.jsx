import styled from "@emotion/styled"
import BottomTabs from "./components/BottomTabs"

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
`

function App() {

  return (
    <Container>
      <Mobile>
        <h1>CARBY APP</h1>
        <h1>CARBY APP</h1>
        <h1>CARBY APP</h1>
        <h1>CARBY APP</h1>
        <h1>CARBY APP</h1>
        <BottomTabs />
      </Mobile>
    </Container>
  )
}

export default App
