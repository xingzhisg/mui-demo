import React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useLocation, matchPath } from "react-router-dom";

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


function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

export default function SideBar(props: SidebarProps) {
  const items = props.items;
  const width = props.sx?.width ?? "80px";

  const routeMatch = useRouteMatch(items.map(item => item.to));
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Box
      sx={{
        width: width,
        backgroundColor: "#f8f4f8",
        justifyContent: "center",
        ...props.sx,
      }}
    >
      <Tabs
        orientation="vertical"
        value={currentTab}
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {items.map((item, index) => (
          <Tab
            key={item.label}
            icon={item.icon}
            label={
              <Typography variant="caption" sx={{ paddingTop: "5px" }}>
                {item.label}
              </Typography>
            }
            component={Link}
            value={item.to}
            href={item.to}
            sx={{
              px: 0,
              py: 2,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}