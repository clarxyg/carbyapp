import { Container } from "./styles";
import food01 from '../../assets/food01.svg'
import food02 from '../../assets/food02.svg'
import food10 from '../../assets/food10.svg'
import { CaretCircleRight } from "phosphor-react";


const historicData = [
  {
    id: 1,
    image: food02,
    name: 'Bife',
    description: 'Há 3 dias'
  },
  {
    id: 2,
    image: food10,
    name: 'Agrião',
    description: 'Há 4 dias'
  },
  {
    id: 3,
    image: food01,
    name: 'Sushi',
    description: 'Há 11 dias'
  }
]

export function Historic() {
  return (
    <>
      {
        historicData.map((item) =>
          <Container key={item.id}>
            <div className="content">
              <img src={item.image} />
              <div className="text">
                <span>{item.name}</span>
                <div className="descriptioncontainer">
                  <span className="description">{item.description}</span>
                  <CaretCircleRight size={36} color="#C58BF2" />
                </div>
              </div>
            </div>
          </Container>
        )
      }
    </>
  )
}
