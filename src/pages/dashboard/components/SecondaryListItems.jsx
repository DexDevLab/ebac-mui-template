import AssignmentIcon from "@mui/icons-material/Assignment";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import * as React from "react";

export default function SecondaryListItems() {
  return (
    //export const SecondaryListItems = (
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
}
