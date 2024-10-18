import { Divider, List, ListItem, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import { createLink } from "@tanstack/react-router";
const RouterButton = createLink(ListItemButton)
export const DrawerContent = (
  <div>
    <Toolbar />
    <Divider />
    <List>
      <ListItem disablePadding>
        <RouterButton to="/pessoa-fisica">
          <ListItemText primary={"Pessoa Física"} />
        </RouterButton>
      </ListItem>

      <ListItem disablePadding>
        <RouterButton to="/pessoa-juridica">
          <ListItemText primary={"Pessoa Jurídica"} />
        </RouterButton>
      </ListItem>
    </List>
  </div>
);