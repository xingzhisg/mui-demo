import * as React from "react";
import { Box, Grid } from "@mui/material";
import AppCard, { AppCardProps } from "./AppCard";

interface AppGridProps {
  apps: AppCardProps[];
}

export default function AppGrid(props: AppGridProps) {
  return (
    <Grid container spacing={5}>
      {props.apps.map((app, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <AppCard {...app} />
        </Grid>
      ))}
    </Grid>
  );
}
