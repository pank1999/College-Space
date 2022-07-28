import React from "react";
//import ResultCard from "./ResultCard";
//import { DataGrid } from "@mui/x-data-grid";
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Result(){
    // const columns = [
    //     { field: 'id', headerName: 'ID', width: 90 },
    //     {
    //       field: 'firstName',
    //       headerName: 'First name',
    //       width: 150,
    //       editable: true,
    //     },
    //     {
    //       field: 'lastName',
    //       headerName: 'Last name',
    //       width: 150,
    //       editable: true,
    //     },
    //     {
    //       field: 'age',
    //       headerName: 'Age',
    //       type: 'number',
    //       width: 110,
    //       editable: true,
    //     },
    //     {
    //       field: 'fullName',
    //       headerName: 'Full name',
    //       description: 'This column has a value getter and is not sortable.',
    //       sortable: false,
    //       width: 160,
        
    //     },
    //   ];
      
    //   const rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //   ];
    function createData(name, calories, fat, carbs, protein,saturday,percentage) {
        return { name, calories, fat, carbs, protein,saturday,percentage};
      }
    const rows = [
        createData("Mid Sem -1", 159, 6.0, 24, 4.0,5,82),
        createData("Mid Sem -2", 237, 9.0, 37, 4.3,5,84),
        createData("Average",0,0 ,0,0 ,0,83),
    
      ];

    return(
        <div className="ResultContainer" style={{marginLeft:"5%"}}>
             <h2  style={{marginBottom:"50px",padding:"10px",backgroundColor:"teal"}}>Result</h2> 
             {/* <DataGrid
               rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
               /> */}
            
            {/* <div style={{display:"flex"}}>
               <ResultCard />
               <ResultCard />

            </div>
            <div  style={{display:"flex"}}>
               <ResultCard />
               <ResultCard /> 
            </div>
            */
        }

        <TableContainer component={Paper}>
       <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:"teal"}}>
            <TableCell>S.NO</TableCell>
            <TableCell align="right">Sub 1</TableCell>
            <TableCell align="right">Sub 2&nbsp;</TableCell>
            <TableCell align="right">Sub 3&nbsp;</TableCell>
            <TableCell align="right">Sub 4&nbsp;</TableCell>
            <TableCell align="right">Sub 5&nbsp;</TableCell>
            <TableCell align="right">Total&nbsp;</TableCell>
            <TableCell align="right">Percentage&nbsp;</TableCell>
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
              <TableCell align="right">{row.percentage}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
}

export default Result;