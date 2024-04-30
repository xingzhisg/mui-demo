import * as React from "react";

import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export interface AppCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function AppCard(props: AppCardProps) {
  return (
    <Link to={props.url} component={RouterLink} underline="none">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt={props.title}
        />

        <CardContent sx={{ backgroundColor: "white" }}>
          <Typography variant="h5" component="h2" color="text.primary">
            {props.title}
          </Typography>
          <Typography variant="body2" component="p" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
