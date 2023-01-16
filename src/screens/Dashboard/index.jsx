
import { Bell } from "phosphor-react";
import BottomTabs from "../../components/BottomTabs";
import { Box, Button, CardUpdateWeight, Container, ContainerChart, Filter, Header } from "./styles";
import cardhealth from '../../assets/cardhealth.png'
import { Button as ButtonView } from "../../components/Button";
import { LineChart } from "../../components/Charts/LineChart";
import { CaloriesTimeline } from "../../components/CaloriesTimeLine";



export function Dashboard() {
  return (
    <Container>
      <Header>
        <div>
          <span>Bem vinda</span>
          <h1>Maria Silva</h1>
        </div>
        <Button>
          <Bell size={22} />
        </Button>
      </Header>
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          paddingBottom: '50px'
        }}>
          <div className="containerCard">
            <Filter />
            <img src={cardhealth} />
          </div>
          <div className="descriptionCard">
            <p>Tratamentos</p>
            <span>Diabetes, colesterol e perda de peso</span>
            <ButtonView>Ver mais</ButtonView>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 0 }}>
          <CardUpdateWeight>
            <p>Atualizar peso</p>
            <div>
              <ButtonView>Agora</ButtonView>
            </div>
          </CardUpdateWeight>
          <ContainerChart>
            <LineChart />
          </ContainerChart>
        </div>
        <Box>
          <div>
            <CaloriesTimeline />
          </div>
          <div>
            <div>
              aaaa
            </div>
            <div>
              aaaa
            </div>
          </div>
        </Box>
      </div>
      <BottomTabs />
    </Container>
  )
}
