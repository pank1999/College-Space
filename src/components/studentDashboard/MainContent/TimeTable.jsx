import React from "react";

import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



     
function createData(name, calories, fat, carbs, protein,saturday) {
    return { name, calories, fat, carbs, protein,saturday };
  }
  
  const rows = [
    createData("01", 159, 6.0, 24, 4.0,5),
    createData("02", 237, 9.0, 37, 4.3,5),
    createData("03", 262, 16.0, 24, 6.0,4),
    createData("04", 305, 3.7, 67, 4.3,7),
    createData("05", 356, 16.0, 49, 3.9,3),
    createData("06", 356, 16.0, 49, 3.9,8),

  ];


function TimeTable(){


    return(
         <div >
         <div>
           <h2 style={{marginBottom:"50px",padding:"10px",backgroundColor:"lightcoral"}}>Time Table</h2>
         </div>
        <TableContainer component={Paper}>
       <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:"lightcoral"}}>
            <TableCell>S.NO</TableCell>
            <TableCell align="right">Monday</TableCell>
            <TableCell align="right">Tuesday&nbsp;</TableCell>
            <TableCell align="right">Wednessday&nbsp;</TableCell>
            <TableCell align="right">Thursday&nbsp;</TableCell>
            <TableCell align="right">Friday&nbsp;</TableCell>
            <TableCell align="right">Saturday&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    );
}

export default TimeTable;