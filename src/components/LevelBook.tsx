import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import { makeStyles, withStyles } from "@mui/styles";
import { SxProps } from "@mui/material";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  TableRow: {
    height: 30
  },
  TableCell: {
    padding: "0px 16px"
  }
});

const StyledTableRow = withStyles((theme: any) => ({
  root: {
    height: 30
  }
}))(TableRow);

const StyledTableCell = withStyles((theme: any) => ({
  root: {
    padding: "0px 8px",
    paddingY: '0px',
    height: 30,
  }
}))(TableCell);



interface LevelBookData {
  timestamp: number;
  bids: number[][];
  asks: number[][];
  orders: number[][];
}

interface LevelBookProps {
  num_levels: number;
  tick_size: number;
  orderbar_multiplier?: number;
  data: LevelBookData;
  sx?: SxProps;
}

export default function LevelBook(props: LevelBookProps) {
  const multiplier = props.orderbar_multiplier || 4;

  const [firstLevel, setFirstLevel] = React.useState(0);

  const best_bid = props.data.bids[0][0];
  const best_ask = props.data.asks[props.data.asks.length - 1][0];

  let loc_best_bid = Math.floor((best_bid - firstLevel) * props.tick_size);
  if ((loc_best_bid < props.num_levels / 8) || (loc_best_bid > props.num_levels * 7 / 8)) {
    setFirstLevel(best_bid - Math.floor(props.num_levels / 2 * props.tick_size));
  }

  const prices = [];
  for (let i = 0; i < props.num_levels; i++) {
    prices.push(firstLevel + (props.num_levels - 1 - i) * props.tick_size);
  }

  const level_prices = props.data.bids.map(level => level[0]).concat(props.data.asks.map(level => level[0]));
  console.log(level_prices);

  return (
    <Box>
      <Table>
        <TableHead>
          <StyledTableRow sx={{ backgroundColor: 'lavender' }}>
            <StyledTableCell>Bid</StyledTableCell>
            <StyledTableCell>Price</StyledTableCell>
            <StyledTableCell>Ask</StyledTableCell>
            <StyledTableCell>Orders</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {
            prices.map((price, index) => {
              if (!level_prices.includes(price)) {
                return (
                  <StyledTableRow key={index} sx={{ backgroundColor: (price >= best_bid ? 'pink' : 'navy') }}>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell sx={{ borderLeft: '1px solid white', borderRight: '1px solid white', backgroundColor: (price >= best_bid ? 'orchid' : 'indigo'), fontWeight: 'bold', color: (price >= best_bid ? 'black' : 'white') }}>{price}</StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell sx={{ backgroundColor: 'white', border: '1px solid white'}}></StyledTableCell>
                  </StyledTableRow>
                )
              }
              else if (price >= best_ask) {
                const level = (props.data.asks.find(level => level[0] === price));
                return (
                  <StyledTableRow key={index} sx={{ backgroundColor: 'pink' }}>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell sx={{ borderLeft: '1px solid white', fontWeight: 'bold', backgroundColor: 'orchid', borderRight: '1px solid white', color: 'black' }}>{level![0]}</StyledTableCell>
                    <StyledTableCell sx={{ paddingY: '0px' }}>{level![1]}</StyledTableCell>
                    <StyledTableCell sx={{ backgroundColor: 'white', paddingY: '0px', border: '1px solid white' }}>
                      <Box sx={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
                        <Box sx={{ backgroundColor: 'red', width: `${level![1] * multiplier}px`, height: '24px' }}></Box>
                        {
                          props.data.orders.filter(order => order[0] === level![0]).map((order, index) => (
                            <Box key={index} sx={{ backgroundColor: 'yellow', width: `${order[1] * multiplier}px`, border: '1px solid gray', height: '24px', position: 'absolute', left: `${order[2] * multiplier}px` }}></Box>
                          ))
                        }
                      </Box>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              }
              const level = props.data.bids.find(level => level[0] === price);
              return (
                <StyledTableRow key={index} sx={{ backgroundColor: 'navy' }}>
                  <StyledTableCell sx={{ paddingY: '0px', color: 'white' }}>{level![1]}</StyledTableCell>
                  <StyledTableCell sx={{ paddingY: '0px', fontWeight: 'bold', backgroundColor: 'indigo', borderLeft: '1px solid white', borderRight: '1px solid white', color: 'white' }}>{level![0]}</StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell sx={{ backgroundColor: 'white', paddingY: '0px', border: '1px solid white' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
                      <Box sx={{ backgroundColor: 'green', width: `${level![1] * multiplier}px`, height: '24px' }}></Box>
                      {
                        props.data.orders.filter(order => order[0] === level![0]).map((order, index) => (
                          <Box key={index} sx={{ backgroundColor: 'yellow', width: `${order[1] * multiplier}px`, border: '1px solid gray', height: '24px', position: 'absolute', left: `${order[2] * multiplier}px` }}></Box>
                        ))
                      }
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })
          }
        </TableBody>
      </Table>
    </Box>
  );
}
