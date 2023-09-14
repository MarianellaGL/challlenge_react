import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    backgroundColor: "#555"
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    backgroundColor: "#555",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: "#555", // Agrega aquí el color de fondo
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


const CustomDrawer = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);


    const handleDrawerClose = () => {
        setOpen(prev => !prev);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer variant="permanent" open={open} onMouseEnter={handleDrawerClose}>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <MailIcon style={{ color: "white" }} /> {/* Icono "Profit" */}
                        </ListItemIcon>
                        <ListItemText primary="Profit" style={{ color: "white" }} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon style={{ color: "white" }} /> {/* Icono "Inventory" */}
                        </ListItemIcon>
                        <ListItemText primary="Inventory" style={{ color: "white" }} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon style={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText primary="Autoresponder" style={{ color: "white" }} />
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    )
};

export default CustomDrawer;