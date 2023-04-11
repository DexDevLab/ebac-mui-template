import AssignmentIcon from "@mui/icons-material/Assignment";
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from "@mui/icons-material/Layers";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import * as React from "react";

export const mainListItems = (
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

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Relatórios
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon sx={{ ml: 1 }}>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Mês atual" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{ ml: 1 }}>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Último trimestre" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{ ml: 1 }}>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Comparativo ano" />
    </ListItemButton>
  </React.Fragment>
);
