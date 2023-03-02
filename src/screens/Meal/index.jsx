import { Container, ContainerCard, CardButton, Workout, Filter } from './styles'
import pizza from '../../assets/pizza.png'
import { TopBar } from '../../components/TopBar'
import { Button } from '../../components/Button'
import SwitchToggle from '../../components/Switch'
import workout from '../../assets/workout1.svg'

export function Meal() {
  return (
    <Container>
      <div className='imageContainer'>
        <TopBar goBack to="/menu"/>
        <img src={pizza} />
      </div>
      <ContainerCard>
        <div className='header'>
          <div className='column'>
            <h3>Pizza do Zé</h3>
            <span className='by'>
              de <span className='name'>James Ruth</span>
            </span>
          </div>
          <SwitchToggle />
        </div>
        <div className='description'>
          <h3>Descrição</h3>
          <p>Pancakes are some people's favorite breakfast, who doesn't
            like pancakes? Especially with the real honey splash on top
            of the pancakes, of course everyone loves that! besides being
            <span> Read more..</span>
          </p>
        </div>
        <CardButton>
           <div className='card'>
             <button className='enabled'>
               Foto
             </button>
             <button className='disabled'>
               Estatística
             </button>
           </div>
        </CardButton>
        <Workout>
          <div className='card'>
            <Filter />
            <p>AB Workout</p>
            <p className='description'>14 Exercises | 20mins</p>
            <Button>
              Ver mais
            </Button>
          </div>
          <img src={workout} alt="workout"/>
        </Workout>
      </ContainerCard>
    </Container>
  )
}
