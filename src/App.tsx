import * as React from "react";
import { AppContext } from "./app_context";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LevelBook from "./components/LevelBook";

// default App component
export default function App() {
  const { api } = React.useContext(AppContext);


  const data = {
    timestamp: 1715702400,
    asks: [
      [1006, 22],
      [1005, 28],
      [1003, 27],
      [1001, 19],
      [1000, 30],
      [999, 35],
    ],
    bids: [
      [998, 40],
      [996, 25],
      [995, 30],
      [993, 25],
      [991, 20],
      [990, 25],
    ],
    orders: [
      [1001, 7, 10],
      [999, 8, 5],
      [998, 10, 10],
      [996, 5, 3],
    ],
  };


  return (
    <Container>
      <Box sx={{ height: '100vh', backgroundColor: 'white', display: 'flex', flexDirection: 'row' }}>
        <Typography variant="h1">Hello</Typography>
        <LevelBook data={data} num_levels={20} tick_size={1} />
      </Box>
    </Container>
  );
}
