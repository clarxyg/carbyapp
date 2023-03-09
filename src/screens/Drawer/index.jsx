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

export default function PersistentDrawerLeft({ handleDrawerClose }) {

  return (
    <Container className={handleDrawerClose === true && 'setDrawerEffectWhenClose'}>
      <Header>
        <button onClick={handleDrawerClose}>
          <CaretLeft size={22} />
        </button>
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

    </Container>
  );
}
