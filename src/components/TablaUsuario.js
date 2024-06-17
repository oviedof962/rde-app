import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';

const columns = [
  { id: 'name', label: 'Nombre', minWidth: 170 },
  { id: 'surname', label: 'Apellido', minWidth: 100 },
  { id: 'email', label: 'Correo', minWidth: 170, align: 'right' },
  { id: 'password', label: 'Contraseña', minWidth: 170, align: 'right' }
];

function createData(name, surname, email, password) {
  return { name, surname, email, password };
}

const rows = [
  createData('John', 'Doe', 'john.doe@example.com', 'password123'),
  createData('Jane', 'Smith', 'jane.smith@example.com', 'password456'),
  createData('Alice', 'Johnson', 'alice.johnson@example.com', 'password789'),
  createData('Michael', 'Brown', 'michael.brown@example.com', 'password101'),
  createData('Emily', 'Davis', 'emily.davis@example.com', 'password202'),
  createData('Daniel', 'Miller', 'daniel.miller@example.com', 'password303'),
  createData('Sophia', 'Wilson', 'sophia.wilson@example.com', 'password404'),
  createData('James', 'Taylor', 'james.taylor@example.com', 'password505'),
  createData('Olivia', 'Anderson', 'olivia.anderson@example.com', 'password606'),
  createData('William', 'Thomas', 'william.thomas@example.com', 'password707'),
  createData('Ava', 'Jackson', 'ava.jackson@example.com', 'password808'),
  createData('Christopher', 'White', 'christopher.white@example.com', 'password909'),
  createData('Isabella', 'Harris', 'isabella.harris@example.com', 'password1010'),
  createData('Benjamin', 'Martin', 'benjamin.martin@example.com', 'password1111'),
  createData('Charlotte', 'Garcia', 'charlotte.garcia@example.com', 'password1212'),
  createData('Lucas', 'Martinez', 'lucas.martinez@example.com', 'password1313'),
  createData('Amelia', 'Robinson', 'amelia.robinson@example.com', 'password1414'),
  createData('Mason', 'Clark', 'mason.clark@example.com', 'password1515'),
  createData('Mia', 'Rodriguez', 'mia.rodriguez@example.com', 'password1616'),
];


export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.surname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.password.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TextField
        label="Buscar"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.email}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}