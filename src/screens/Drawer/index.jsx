import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import { GitMerge, Heart, Lightning, MagnifyingGlass, X, Clock } from "phosphor-react";
import { Link } from "react-router-dom";
import { IconsList } from "../../components/IconsList";
import { Button, Container, Divider } from "./styles";



export function Drawer() {
  return (
    <Container>
      <div className="drawer">
        <div className="titleAndHour">
          <h1>Almoço</h1>
          <span>12:00</span>
        </div>
        <Link to="/menu">
          <X size={22} color="#fff" />
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
        <FormControl variant="outlined" className="form">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"><MagnifyingGlass size={22} /></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight'
            }}
          />
        </FormControl>
        <p>Cancelar</p>
      </div>
      <div className="containerSearchItems">
        <p className="title">Buscas recentes</p>
        <p>
          <Clock size={14} color="#f1f2f3" />
          Tilápia
        </p>
        <p>
          <Clock size={14} color="#f1f2f3" />
          Pizza
        </p>
        <p>
          <Clock size={14} color="#f1f2f3" />
          Churraco
        </p>
      </div>
    </Container>
  )
}
