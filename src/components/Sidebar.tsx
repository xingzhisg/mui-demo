import React from "react";

import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Link from "@mui/material/Link";

const sidebarWidth = 100;

interface SidebarItem {
  label: string;
  icon: React.ReactElement;
  to: string;
}

interface SidebarProps {
  items: SidebarItem[];
  sx?: CSSObject;
}

export default function SideBar(props: SidebarProps) {
  const items = props.items;
  const width = props.sx?.width ?? '80px';
  
  return (
    <Box
      sx={{
        width: width,
        backgroundColor: "#fafafa",
        justifyContent: "center",
        boxShadow: 1,
        ...props.sx,
      }}
    >
      <List disablePadding>
        {items.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              href={item.to}
              sx={{
                px: 0,
                py: 2,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.icon}
              <Typography variant="caption" sx={{ "paddingTop": "5px", }}>
                {item.label}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
