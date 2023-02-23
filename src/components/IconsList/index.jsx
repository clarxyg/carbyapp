import { Container } from './styles'
import food01 from '../../assets/food01.svg'
import food02 from '../../assets/food02.svg'
import food03 from '../../assets/food03.svg'
import food04 from '../../assets/food04.svg'
import food05 from '../../assets/food05.svg'
import food06 from '../../assets/food06.svg'
import food07 from '../../assets/food07.svg'
import food08 from '../../assets/food08.svg'
import food09 from '../../assets/food09.svg'
import food10 from '../../assets/food10.svg'



export function IconsList() {
  return (
    <Container>
      <div className='row'>
        <div className='column'>
          <img src={food01} />
          <span>Japonesa</span>
        </div>
        <div className='column'>
          <img src={food02} />
          <span>Carne</span>
        </div>
        <div className='column'>
          <img src={food03} />
          <span>Massa</span>
        </div>
        <div className='column'>
          <img src={food04} />
          <span>Peixe</span>
        </div>
        <div className='column'>
          <img src={food05} />
          <span>Frango</span>
        </div>
      </div>
      <div className='row'>
        <div className='column'>
          <img src={food06} />
          <span>Sobremesa</span>
        </div>
        <div className='column'>
          <img src={food07} />
          <span>Frutas</span>
        </div>
        <div className='column'>
          <img src={food08} />
          <span>Pizza</span>
        </div>
        <div className='column'>
          <img src={food09} />
          <span>Delivery</span>
        </div>
        <div className='column'>
          <img src={food10} />
          <span>Salada</span>
        </div>
      </div>
    </Container>
  )
}
