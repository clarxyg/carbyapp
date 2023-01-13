
import { Bell } from "phosphor-react";
import BottomTabs from "../../components/BottomTabs";
import { Container, Header } from "./styles";
import cardhealth from '../../assets/cardhealth.png'


export function Dashboard() {
  return (
    <Container>
      <Header>
        <div>
          <span>Bem vinda</span>
          <h1>Maria Silva</h1>
        </div>
        <Bell size={32} />
      </Header>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: '80px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <img src={cardhealth} style={{ width: '80%' }}/>
        </div>
        <div>
          <span>AAAA</span>
        </div>
        <div>
          <span>AAAA</span>
        </div>
        <div>
          <span>AAAA</span>
        </div>
      </div>
      <BottomTabs />
    </Container>
  )
}
