import { Container, Header, Box } from "./styles";
import movie from '../../assets/exercise.mp4'
import thumbnail from '../../assets/thumbnail.png'
import { TopBar } from "../../components/TopBar";
import { HowDoItTimeline } from "../../components/HowDoItTimeline";
import { Button } from "../../components/Button"
import { Repetitions } from "../../components/Repetitions";


const videoData = [
  {
    id: 1,
    video: movie,
    thumbnail: thumbnail
  }
]

export function WorkoutTracker() {
  return (
    <Container>
      <Header>
        <TopBar goBack to="/dashboard"/>
      </Header>
      {
        videoData.map((item) =>
          <video width="320" height="240" controls poster={item.thumbnail} key={item.id}>
            <source src={item.video} type="video/mp4" />
          </video>
        )
      }
      <Box>
        <div className="text">
          <h3>Polichinelo</h3>
          <p>Fácil | Queima 390 calorias</p>
        </div>
        <div className="text">
          <h3>Descrição</h3>
          <p>Polichinelo é um exercício físico, usado principalmente para
            alongar e aquecer os músculos dos membros posteriores e
            inferiores — braços e pernas. Este é um exercício físico que
            exige uma certa coordenação motora e envolve movimentos dos
            membros superiores e inferiores.
          </p>
        </div>
      </Box>
      <HowDoItTimeline />
      <Repetitions />
      <div className="containerButton">
        <Button>
          Salvar
        </Button>
      </div>
    </Container>
  )
}
