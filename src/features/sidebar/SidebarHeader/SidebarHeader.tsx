import { Box, ListItem } from "@mui/material";

export const SidebarHeader = (): JSX.Element => (
  <ListItem divider>
    <Box
      component="img"
      src="/static/images/school_logo.svg"
      alt="school logo"
      sx={{ maxWidth: 100 }}
    />
  </ListItem>
);
