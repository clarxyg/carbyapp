import { Button, Menu, MenuItem } from "@mui/material";
import { ArrowArcRight, ArrowLeft, CaretLeft, DotsThree, X } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";


function MenuTab() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="menu"
      >
        <DotsThree size={15} weight="bold" style={{ padding: '8px 0px 8px 0px' }} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Exemplo</MenuItem>
        <MenuItem onClick={handleClose}>Exemplo</MenuItem>
        <MenuItem onClick={handleClose}>Exemplo</MenuItem>
      </Menu>
    </div>
  )
}


export function TopBar({ showMenu, goBack, to }) {
  return (
    <Container>
      {
        goBack ?

          <button className="goBack">
            <Link to={to}>
              <CaretLeft size={22} />
            </Link>
          </button>
          :
          <button>
            <Link to="/dashboard">
              <X size={15} />
            </Link>
          </button>
      }
      {
        showMenu ?
          <button>
            <MenuTab />
          </button> : <></>
      }
    </Container>
  )
}
