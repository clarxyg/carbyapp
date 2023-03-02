import { Container, ContainerCard, MenuList, CardGraphics, Comments } from './styles'
import pizza from '../../assets/pizza.png'
import { TopBar } from '../../components/TopBar'
import { ChatCircleDots, Clock, Heart, PaperPlaneTilt, ThumbsUp } from 'phosphor-react'
import entry from '../../icons/entry.svg'
import maincourse from '../../icons/maincourse.svg'
import drink from '../../icons/drink.svg'
import dessert from '../../icons/dessert.svg'
import avatar from '../../assets/avatar.jpg'
import CircularStatic from '../../components/Charts/RadialChart'
import { FormControl, InputAdornment, OutlinedInput } from '@mui/material'

export function Item() {
  return (
    <Container>
      <div className='imageContainer'>
        <TopBar goBack to="/menu"/>
        <img src={pizza} />
      </div>
      <ContainerCard>
        <div className='header'>
          <div className='column'>
            <h1>Pizza do Zé</h1>
            <div className='row'>
              <span>
                <Clock size={22} weight="fill" color="#B4C0FE" />
                5 minutos
              </span>
              <span>
                <ThumbsUp size={22} weight="fill" color="#6495ED" />
                130
              </span>
            </div>
          </div>
          <Heart size={40} weight="fill" color="#C58BF2" style={{ cursor: 'pointer' }} />
        </div>
        <MenuList>
          <div>
            <h3>
              <img src={entry} alt="entrada" />
              Entrada
            </h3>
            <ul>
              <li>Rúcula  - <span>10 Folhas (60g)</span></li>
              <li>Azeite de oliva extra virgem - <span>1 Colher de sopa rasa (6g)</span></li>
            </ul>
          </div>
          <div>
            <h3>
              <img src={maincourse} alt="entrada" />
              Prato principal
            </h3>
            <ul>
              <li>Arroz integral cozido - <span>7 Colheres de sopa rasas (105g)</span></li>
              <li>Caldo de feijão cozido - <span>2 Colheres de sopa cheias (40g)</span></li>
              <li>Filé de peito de frango grelhado - <span>1 Unidade média (100g)</span></li>
              <li>Cenoura cozida - <span>1 Unidade pequena (75g)</span></li>
            </ul>
          </div>
          <div>
            <h3>
              <img src={drink} alt="entrada" />
              Bebida
            </h3>
            <ul>
              <li>Chopp IPA -<span> 5 canecos 2 litros</span></li>
            </ul>
          </div>
          <div>
            <h3>
              <img src={dessert} alt="entrada" />
              Sobremesa
            </h3>
            <ul>
              <li>Laranja lima - <span> 1 Unidade pequena</span></li>
            </ul>
          </div>
        </MenuList>
        <CardGraphics>
          <div className='chartContainer'>
            <p>Nutrientes ótimos para 💪</p>
            <div className='charts'>
              <div className='chart'>
                <CircularStatic />
                <p>Kcal</p>
              </div>
              <div className='chart'>
                <CircularStatic />
                <p>Lipídeos</p>
              </div>
              <div className='chart'>
                <CircularStatic />
                <p>Fibras</p>
              </div>
              <div className='chart'>
                <CircularStatic />
                <p>Proteínas</p>
              </div>
            </div>
          </div>
        </CardGraphics>
        <Comments>
          <h3>
            Comentários
            <ChatCircleDots size={24} />
          </h3>
          <div className='comment'>
            <span className='avatarContainer'>
              <img src={avatar} alt="avatar" />
              Maria
            </span>
            <p>
              Fiz com carne vegetal e não ficou bom.
              Melhor pedir pelo iFood - <span>24 de janeiro</span>
            </p>
          </div>
          <div className='comment'>
            <span className='avatarContainer'>
              <img src={avatar} alt="avatar" />
              Maria
            </span>
            <p>
              Fiz com carne vegetal e não ficou bom.
              Melhor pedir pelo iFood - <span>24 de janeiro</span>
            </p>
          </div>
          <div className='comment'>
            <span className='avatarContainer'>
              <img src={avatar} alt="avatar" />
              Maria
            </span>
            <p>
              Fiz com carne vegetal e não ficou bom.
              Melhor pedir pelo iFood - <span>24 de janeiro</span>
            </p>
          </div>
          <div className="containerForm">
            <FormControl variant="outlined" className="form">
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={<InputAdornment position="end"></InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight'
                }}
              />
            </FormControl>
            <button>
              <PaperPlaneTilt size={17} weight="fill" color="#fff"/>
              Enviar
            </button>
          </div>
        </Comments>
      </ContainerCard>
    </Container>
  )
}
