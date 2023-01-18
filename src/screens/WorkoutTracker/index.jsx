import { TopTabs } from "../../components/TopTabs";
import { Container, Header } from "./styles";
import movie from '../../assets/exercise.mp4'
import thumbnail from '../../assets/thumbnail.png'


const videoData = [
  {
    video: movie,
    thumbnail: thumbnail
  }
]

export function WorkoutTracker() {
  return (
    <Container>
      <Header>
        <TopTabs />
      </Header>
      {
        videoData.map((item) =>
          <video width="320" height="240" controls poster={item.thumbnail}>
            <source src={item.video} type="video/mp4" />
          </video>
        )
      }
    </Container>
  )
}
