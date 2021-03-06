import React from 'react'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, id, address, V, Q, busy, cyclesRemaining) {
  return { name, id, address, V, Q, busy, cyclesRemaining };
}

function StoreBuffer({buffer}) {
    const rows = [
        createData("S1", buffer[0].id, buffer[0].address, buffer[0].V, buffer[0].Q, buffer[0].busy, buffer[0].cyclesRemaining),
        createData("S2", buffer[1].id, buffer[1].address, buffer[1].V, buffer[1].Q, buffer[1].busy, buffer[1].cyclesRemaining)
    ];



    return (
        <div>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">V</StyledTableCell>
            <StyledTableCell align="right">Q</StyledTableCell>
            <StyledTableCell align="right">Busy</StyledTableCell>
            <StyledTableCell align="right">cycles Remaining</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.address}</StyledTableCell>
              <StyledTableCell align="right">{row.V}</StyledTableCell>
              <StyledTableCell align="right">{row.Q}</StyledTableCell>
              <StyledTableCell align="right">{row.busy}</StyledTableCell>
              <StyledTableCell align="right">{row.cyclesRemaining}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default StoreBuffer
