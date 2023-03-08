import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Toolbar, AppBar as MuiAppBar, IconButton, Drawer } from '@mui/material';
import { Button, Container, Divider, Filter } from './styles'
import { Header } from "../Menu/styles";
import { GitMerge, Heart, Lightning, MagnifyingGlass, X, Clock, CaretLeft, Hamburger } from "phosphor-react";
import { Link } from "react-router-dom";
import { Historic } from "../../components/Historic";
import { IconsList } from "../../components/IconsList";
import { Search } from "../../components/Inputs/Search";
import MealMenu from "../../components/MealMenu";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        className="drawer"
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <Hamburger size={23} /> : <X size={23} />}
          </IconButton>
        </DrawerHeader>
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
          <Historic />
        </div>
        {/* <div className="elipse"/> */}
      </Drawer>
    </Container>
  );
}
