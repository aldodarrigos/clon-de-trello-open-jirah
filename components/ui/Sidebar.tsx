import React, { useContext } from 'react'
import { InboxOutlined, MailOutlineOutlined } from '@mui/icons-material'
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { UIContext } from '@/context/ui'

const menuItems:string[] = ['Inbox', 'Starred', 'Send Email']

export const Sidebar = () => {
    const { sideMenuOpen, closeSideMenu } = useContext(UIContext)
  return (
    <Drawer anchor='left' open={ sideMenuOpen } onClose={ closeSideMenu } >
        <Box sx={{width: 250}} >
            <Box sx={{padding:'10px 15px'}}>
                <Typography variant='h4'>Menú</Typography>
            </Box>
            <List>
                {
                    menuItems.map( (text,index) => (
                        <ListItem button  key={ index }>
                                <ListItemIcon>
                                    { index % 2 ?  <InboxOutlined/> : <MailOutlineOutlined />}
                                </ListItemIcon>
                                <ListItemText primary={ text } />
                        </ListItem>
                    ))
                }
            </List>
            <Divider />
        </Box>
    </Drawer>
  )
}
