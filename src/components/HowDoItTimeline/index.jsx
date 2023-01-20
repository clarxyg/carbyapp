import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { RadioButton } from "phosphor-react";
import { Container, Header } from "./styles";


export function HowDoItTimeline() {
  return (
    <Container>
      <Header>
        <h3>Como fazer</h3>
        <span>4 passos</span>
      </Header>
      <Timeline position="alternate" className="timeline">
        <TimelineItem>
          <TimelineOppositeContent className="step">
            01
          </TimelineOppositeContent>
          <TimelineSeparator className="separator">
            <RadioButton size={25} weight="fill" color="#C58BF2" />
            <TimelineConnector className="connector" />
          </TimelineSeparator>
          <TimelineContent>
            <p className="title">
              Braços abertos
            </p>
            <p className="description">
              Para tornar os gestos mais relaxados, estique os braços ao iniciar o movimento. Sem dobrar as mãos.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <p className="title">
              Descanse no dedo do pé
            </p>
            <p className="description">
              A base desse movimento é o salto. Agora, o que precisa ser considerado é que você tem que usar as pontas dos pés
            </p>
          </TimelineOppositeContent>
          <TimelineSeparator className="separator">
            <RadioButton size={25} weight="fill" color="#C58BF2" />
            <TimelineConnector className="connector" />
          </TimelineSeparator>
          <TimelineContent className="step">
              02
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="step">
            03
          </TimelineOppositeContent>
          <TimelineSeparator className="separator">
            <RadioButton size={25} weight="fill" color="#C58BF2" />
            <TimelineConnector className="connector" />
          </TimelineSeparator>
          <TimelineContent>
            <p className="title">
              Ajustar o movimento do pé
            </p>
            <p className="description">Polichinelo não é apenas um salto comum. Mas você também deve prestar muita atenção aos movimentos das pernas.</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <p className="title">Bater palmas com as duas mãos</p>
            <p className="description">Isso não pode ser considerado levianamente. Veja bem, sem perceber, o bater de palmas ajuda você a manter o ritmo enquanto faz o polichinelo</p>
          </TimelineOppositeContent>
          <TimelineSeparator className="separator">
            <RadioButton size={25} weight="fill" color="#C58BF2" />
            <TimelineConnector className="connector" />
          </TimelineSeparator>
          <TimelineContent className="step">
              04
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  )
}
