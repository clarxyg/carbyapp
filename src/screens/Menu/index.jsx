import { CaretLeft, GitMerge, Heart, List, MagnifyingGlass, Plus } from "phosphor-react";
import { Button, Container, Header, Card } from "./styles";
import food01 from '../../assets/3.webp'
import { Link } from "react-router-dom";
import BottomTabs from '../../components/BottomTabs'
import { Search } from "../../components/Inputs/Search";
import MealMenu from "../../components/MealMenu";
import { AppBar as MuiAppBar, IconButton, Toolbar } from "@mui/material";
import { useEffect, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false)
  const [text, setText] = useState("");
  const textRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = textRef.current.offsetWidth;
      const maxWidth = 165;
      const truncatedText = textRef.current.textContent.slice(0, -1) + "..";
      setText(width > maxWidth ? truncatedText : textRef.current.textContent);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      {
        !open ?
          <Header>
            <AppBar open={open} className="appBar" position="inherit">
              <CaretLeft size={22} onClick={handleDrawerOpen} />
            </AppBar>
            <h1>Almoço</h1>
            <MealMenu />
          </Header> : ''
      }
      {
        open ?
          <PersistentDrawerLeft
            handleDrawerClose={handleDrawerClose}
          /> :
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
                    <img src={food01} alt="pizza" />
                  </div>
                  <div className="description">
                    <h1 ref={textRef}>{text || 'Pizza do Zé'}</h1>
                    <p>380 kcal</p>
                  </div>
                </Card>
              </Link>
              <Link to="/item">
                <Card>
                  <div className="imageCard">
                    <img src={food01} alt="pizza" />
                  </div>
                  <div className="description">
                    <h1 ref={textRef}>{text || 'Pizza do Zé fdfdfdfdfdsf'}</h1>
                    <p>380 kcal</p>
                  </div>
                </Card>
              </Link>
              <Link to="/item">
                <Card>
                  <div className="imageCard">
                    <img src={food01} alt="pizza" />
                  </div>
                  <div className="description">
                    <h1 ref={textRef}>{text || 'Pizza do Zé hdfuwhfudhfuhs'}</h1>
                    <p>380 kcal</p>
                  </div>
                </Card>
              </Link>
              <Link to="/item">
                <Card>
                  <div className="imageCard">
                    <img src={food01} alt="pizza" />
                  </div>
                  <div className="description">
                    <h1 ref={textRef}>{text || 'Pizza do Zé'}</h1>
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
