import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from "@mui/icons-material/Layers";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";

export const MainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon sx={{ ml: 1 }}>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Quadro Financeiro" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{ ml: 1 }}>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Pedidos" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{ ml: 1 }}>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Vendedores" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{ ml: 1 }}>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Relatórios" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{ ml: 1 }}>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrações" />
    </ListItemButton>
  </React.Fragment>
);
