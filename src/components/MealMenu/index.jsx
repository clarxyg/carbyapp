import React, { useState } from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material';
import { DotsThreeOutline } from 'phosphor-react';
import styled from '@emotion/styled';

const Container = styled.div`

.button {
    background: #F7F8F8;
    border-radius: 8px;
    border: none;
    padding: 10px;
  }
`

const options = [
  'Almoço',
  'Café',
  'Janta'
];

const ITEM_HEIGHT = 48;

export default function MealMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        className="button"
      >
        <DotsThreeOutline size={22} weight="fill" color='#000'/>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        style={{
          zIndex: 99999
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '7rem'
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Almoço'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Container>
  );
}
