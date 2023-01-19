import { Container, Header } from "./styles";
import workout3 from '../../assets/workout3.svg'
import workout2 from '../../assets/workout2.svg'
import workout1 from '../../assets/workout1.svg'
import { CaretCircleRight } from "phosphor-react";
import { Link } from "react-router-dom";


const workoutData = [
  {
    id: 1,
    image: workout3,
    name: 'Fullbody Workout',
    description: '180 Calories Burn | 20minutes'
  },
  {
    id: 2,
    image: workout2,
    name: 'Lowerbody Workout',
    description: '200 Calories Burn | 30minutes'
  },
  {
    id: 3,
    image: workout1,
    name: 'Ab Workout',
    description: '300 Calories Burn | 25minutes'
  }
]

export function WorkoutCard() {
  return (
    <>
      <Header>
        <p>Últimos Treinos</p>
        <Link className="see" to="/workouttracker">Ver mais</Link>
      </Header>
      {
        workoutData.map((item) =>
          <Container key={item.id}>
            <div className="content">
              <img src={item.image} />
              <div className="text">
                <span>{item.name}</span>
                <div className="descriptioncontainer">
                  <span className="description">{item.description}</span>
                  <CaretCircleRight size={36} color="#C58BF2" />
                </div>
                <div className="bar">
                  <span className="progress"></span>
                </div>
              </div>
            </div>
          </Container>
        )
      }
    </>
  )
}
