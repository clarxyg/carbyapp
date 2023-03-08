import { CaretLeft, GitMerge, Heart, List, MagnifyingGlass, Plus } from "phosphor-react";
import { Button, Container, Header, Card } from "./styles";
import pizza from '../../assets/pizza.png'
import { Link } from "react-router-dom";
import BottomTabs from '../../components/BottomTabs'
import { Search } from "../../components/Inputs/Search";
import MealMenu from "../../components/MealMenu";
import { AppBar as MuiAppBar, IconButton, Toolbar } from "@mui/material";
import { useState } from "react";
import PersistentDrawerLeft from "../Drawer";
import { styled, useTheme } from '@mui/material/styles';

const drawerWidth = 450;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


export function Menu() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <Container>
      <Header>
        <button>
          <AppBar position="fixed" open={open} className="appBar">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
              >
                <CaretLeft size={22} />
              </IconButton>
            </Toolbar>
          </AppBar>
          <h1>Almoço</h1>
          <MealMenu />
        </button>
      </Header>
      {
        open ?
          <PersistentDrawerLeft

            open={open} /> :
          <>
            <div className="containerSearch">
              <Search />
            </div>
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
          </>
      }
    </Container >
  )
}
