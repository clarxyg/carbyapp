import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import { GitMerge, Heart, List, MagnifyingGlass, Plus } from "phosphor-react";
import { Button, Container, Header, Card } from "./styles";
import pizza from '../../assets/pizza.png'
import { Link } from "react-router-dom";
import BottomTabs from '../../components/BottomTabs'
import { Search } from "../../components/Inputs/Search";


export function Menu() {
  return (
    <Container>
      <Header>
        <div className="drawer">
          <div className="titleAndHour">
            <h1>Almoço</h1>
            <span>12:00</span>
          </div>
          <Link to="/drawer">
            <List size={20} />
          </Link>
        </div>
        <Search />
      </Header>
      <div className="containerButton">
        <div className="row">
          <Button>
            <Heart size={12} weight="fill" />
            Favoritos
          </Button>
          <Button>
            <GitMerge size={12} weight="fill" />
            Indicados
          </Button>
        </div>
        <Button>
          Mais
          <Plus size={12} weight="bold" />
        </Button>
      </div>
      <div className="grid">
        <Link to="/item">
          <Card>
            <div className="imageCard">
              <img src={pizza} alt="pizza" />
            </div>
            <div className="description">
              <h1>Pizza do Zé</h1>
              <p>380 kcal</p>
            </div>
          </Card>
        </Link>
        <Link to="/item">
          <Card>
            <div className="imageCard">
              <img src={pizza} alt="pizza" />
            </div>
            <div className="description">
              <h1>Pizza do Zé</h1>
              <p>380 kcal</p>
            </div>
          </Card>
        </Link>
        <Link to="/item">
          <Card>
            <div className="imageCard">
              <img src={pizza} alt="pizza" />
            </div>
            <div className="description">
              <h1>Pizza do Zé</h1>
              <p>380 kcal</p>
            </div>
          </Card>
        </Link>
        <Link to="/item">
          <Card>
            <div className="imageCard">
              <img src={pizza} alt="pizza" />
            </div>
            <div className="description">
              <h1>Pizza do Zé</h1>
              <p>380 kcal</p>
            </div>
          </Card>
        </Link>
      </div>
      <BottomTabs />
    </Container>
  )
}
