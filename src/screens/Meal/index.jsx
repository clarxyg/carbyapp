import { Container, ContainerCard, CardButton } from './styles'
import pizza from '../../assets/pizza.png'
import { TopBar } from '../../components/TopBar'
import { Button } from '../../components/Button'
import { Switch } from '@mui/material'

export function Meal() {
  return (
    <Container>
      <div className='imageContainer'>
        <TopBar goBack />
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
          <Switch />
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
             <Button>
               Foto
             </Button>
             <Button disabled>
               Estatística
             </Button>
           </div>
        </CardButton>
      </ContainerCard>
    </Container>
  )
}
