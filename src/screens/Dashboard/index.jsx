
import { Bell } from "phosphor-react";
import BottomTabs from "../../components/BottomTabs";
import { Box, Button, CardUpdateWeight, Container, ContainerCard, ContainerCardStatus, ContainerChart, ContainerSplitAreaChart, Filter, Header } from "./styles";
import cardhealth from '../../assets/cardhealth.png'
import { Button as ButtonView } from "../../components/Button";
import { LineChart } from "../../components/Charts/LineChart";
import { CaloriesTimeline } from "../../components/CaloriesTimeLine";
import watergraph from '../../assets/water.svg'
import CircularStatic from "../../components/Charts/RadialChart";
import { SplineArea } from "../../components/Charts/SplineAreaChart";
import { DropButton } from "../../components/DropButton";
import { WorkoutCard } from "../../components/WorkoutCard";



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
        <ContainerCard>
          <div className="containerCard">
            <Filter />
            <img src={cardhealth} />
          </div>
          <div className="descriptionCard">
            <p>Tratamentos</p>
            <span>Diabetes, colesterol e perda de peso</span>
            <ButtonView>Ver mais</ButtonView>
          </div>
        </ContainerCard>
        <Container>
          <CardUpdateWeight>
            <p>Atualizar peso</p>
            <div>
              <ButtonView>Agora</ButtonView>
            </div>
          </CardUpdateWeight>
          <ContainerChart>
            <LineChart />
          </ContainerChart>
        </Container>
        <Box>
          <CaloriesTimeline />
          <div className="column">
            <div>
              <ContainerCardStatus>
                <p>Ingestão de água</p>
                <span>3 copos diários</span>
                <img src={watergraph} />
              </ContainerCardStatus>
            </div>
            <div>
              <ContainerCardStatus>
                <p>Meta de atividade</p>
                <span>1.000 passos</span>
                <CircularStatic />
              </ContainerCardStatus>
            </div>
          </div>
        </Box>
        <ContainerSplitAreaChart>
          <div className="dropcontainer">
            <p>Evolução de saúde</p>
            <DropButton />
          </div>
          <SplineArea />
        </ContainerSplitAreaChart>
        <WorkoutCard />
      </div>
      {/* <BottomTabs /> */}
    </Container>
  )
}
