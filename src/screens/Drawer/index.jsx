import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import { GitMerge, Heart, Lightning, MagnifyingGlass, X, Clock } from "phosphor-react";
import { Link } from "react-router-dom";
import { IconsList } from "../../components/IconsList";
import { Search } from "../../components/Inputs/Search";
import { Button, Container, Divider, Filter } from "./styles";



export function Drawer() {
  return (
    <Container>
      <Filter />
      <div className="drawer">
        <div className="titleAndHour">
          <h1>Almoço</h1>
          <span>12:00</span>
        </div>
        <Link to="/menu">
          <X size={22} color="#000" />
        </Link>
      </div>
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
        <p>Cancelar</p>
      </div>
      <div className="containerSearchItems">
        <p className="title">Buscas recentes</p>
        <p>
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
        </p>
      </div>
      {/* <div className="elipse"/> */}
    </Container>
  )
}
