import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import { Container, Card } from "./styles";



export function CaloriesTimeline() {
  return (
    <Container>
      <Card>
        <div className="bar">
          <span className="progress"></span>
        </div>
        <div className="description">
          <p className="title">Calorias</p>
          <span>1.830</span>
          <p>Necessidades</p>
          <Timeline className="timeline">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="dot"/>
                <TimelineConnector className="connector" />
              </TimelineSeparator>
              <div>
                <TimelineContent className="content">Treino moderado</TimelineContent>
                <TimelineContent className="quantity">+15%</TimelineContent>
              </div>
            </TimelineItem>
            <TimelineItem className="outhers">
              <TimelineSeparator className="separator">
                <TimelineDot className="dot"/>
                <TimelineConnector className="connector" />
              </TimelineSeparator>
              <div>
                <TimelineContent className="content">Outros</TimelineContent>
                <TimelineContent className="quantity">100kcal</TimelineContent>
              </div>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator className="separator">
                <TimelineDot className="dot"/>
                <TimelineConnector className="connector" />
              </TimelineSeparator>
              <div>
                <TimelineContent className="content">Fator atividade</TimelineContent>
                <TimelineContent className="quantity">200kcal</TimelineContent>
              </div>
            </TimelineItem>
            <TimelineItem className="outhers2">
              <TimelineSeparator className="separator">
                <TimelineDot className="dot"/>
                <TimelineConnector className="connector" />
              </TimelineSeparator>
              <div>
                <TimelineContent className="content">Digestão</TimelineContent>
                <TimelineContent className="quantity">100kcal</TimelineContent>
              </div>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator className="separator">
                <TimelineDot className="dot"/>
              </TimelineSeparator>
              <div>
                <TimelineContent className="content">Funções básicas</TimelineContent>
                <TimelineContent className="quantity">250kcal</TimelineContent>
              </div>
            </TimelineItem>
          </Timeline>
        </div>
      </Card>
    </Container>
  )
}
