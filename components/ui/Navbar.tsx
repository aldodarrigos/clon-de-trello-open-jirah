import React, { FC, useContext } from 'react'
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material';
import { UIContext } from '../../context/ui/UiContext';
import NextLink from 'next/link';

export const Navbar:FC = () => {

  const { openSideMenu } = useContext(UIContext);
  return (
    <AppBar position='sticky' >
        <Toolbar>
            <IconButton   color='inherit' size='large' edge='start' onClick={ openSideMenu }>
                <MenuOutlined />
            </IconButton>

              <NextLink href='/' passHref  >
                  <Typography variant='h6' color='white' textAlign='center' >
                    Trello
                  </Typography>
              </NextLink>
        </Toolbar>
    </AppBar>
  )
}
