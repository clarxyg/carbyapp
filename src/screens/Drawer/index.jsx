import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import { GitMerge, Heart, Lightning, MagnifyingGlass, X, Clock, CaretLeft } from "phosphor-react";
import { Link } from "react-router-dom";
import { IconsList } from "../../components/IconsList";
import { Search } from "../../components/Inputs/Search";
import MealMenu from "../../components/MealMenu";
import { Header } from "../Menu/styles";
import { Button, Container, Divider, Filter } from "./styles";



export function Drawer() {
  return (
    <Container>
      <Header>
        <Link to="/menu">
          <button>
            <CaretLeft size={22} />
          </button>
        </Link>
        <h1>Almoço</h1>
        <MealMenu />
      </Header>
      <div className="containerButton">
        <Button>
          <Heart size={12} weight="fill" />
          Favoritos
        </Button>
        <Button>
          <GitMerge size={12} weight="fill" />
          Indicados
        </Button>
        <Button>
          Rápidos
          <Lightning size={12} weight="fill" />
        </Button>
      </div>
      <IconsList />
      <Divider />
      <div className="containerForm">
        <Search />
      </div>
      <div className="containerSearchItems">
        <p className="title">Histórico</p>
        {/* <p>
          <Clock size={16} weight="fill" color="#B4C0FE" />
          Tilápia
        </p>
        <p>
          <Clock size={16} weight="fill" color="#B4C0FE" />
          Pizza
        </p>
        <p>
          <Clock size={16} weight="fill" color="#B4C0FE" />
          Churraco
        </p> */}

      </div>
      {/* <div className="elipse"/> */}
    </Container>
  )
}
