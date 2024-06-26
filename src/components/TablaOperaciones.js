import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Swal from 'sweetalert2'; // Importa SweetAlert2

const columns = [
  { id: 'name', label: 'Equipo', minWidth: 170 },
  { id: 'surname', label: 'Subsistema', minWidth: 100 },
  { id: 'email', label: 'Componente', minWidth: 170, align: 'right' },
  { id: 'password', label: 'Tipo de causa', minWidth: 170, align: 'right' },
  { id: 'role', label: 'Comentario', minWidth: 170, align: 'right' }
];

function createData(name, surname, email, password, role) {
  return { name, surname, email, password, role };
}

const initialRows = [
  createData('John', 'Doe', 'john.doe@example.com', 'password123', 'Admin'),
  createData('Jane', 'Smith', 'jane.smith@example.com', 'password456', 'User'),
  createData('Emily', 'Johnson', 'emily.johnson@example.com', 'password789', 'User'),
  createData('Michael', 'Brown', 'michael.brown@example.com', 'password101', 'Moderator'),
  createData('Sarah', 'Davis', 'sarah.davis@example.com', 'password202', 'User'),
  createData('David', 'Wilson', 'david.wilson@example.com', 'password303', 'Admin'),
  createData('Laura', 'Taylor', 'laura.taylor@example.com', 'password404', 'User'),
  createData('James', 'Anderson', 'james.anderson@example.com', 'password505', 'Moderator'),
  createData('Olivia', 'Thomas', 'olivia.thomas@example.com', 'password606', 'User'),
  createData('Daniel', 'Jackson', 'daniel.jackson@example.com', 'password707', 'User')
  // more initial data...
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [rows, setRows] = useState(initialRows);
  const [openModal, setOpenModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', surname: '', email: '', password: '', role: 'User' });

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

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    setRows([...rows, createData(newUser.name, newUser.surname, newUser.email, newUser.password, newUser.role)]);
    setNewUser({ name: '', surname: '', email: '', password: '', role: 'User' });
    handleCloseModal();
    Swal.fire({
      title: 'Operacion añadida',
      text: 'La nuevo operación ha sido añadido exitosamente.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.surname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.password.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <TextField
          label="Buscar"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Button variant="contained" onClick={handleOpenModal}>
          Nueva Operacion
        </Button>
      </Box>
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

      {/* Modal for adding new user */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            ...style,
            width: '100%',
            maxWidth: 900,
            maxHeight: '90vh', // Ajusta la altura máxima como prefieras
            overflowY: 'auto', // Habilita el scroll vertical
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Añadir Nueva Operacion
          </Typography>
          <Grid container spacing={2}>
            {/* Form section */}
            <Grid item xs={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="role-label">Equipo</InputLabel>
                <Select
                  labelId="role-label"
                  id="role-select"
                  value={newUser.value}
                  name="Equipo"
                  onChange={handleInputChange}
                  label="Equipo"
                >
                  <MenuItem value="Equipo1">Equipo1</MenuItem>
                  <MenuItem value="Equipo2">Equipo2</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel id="role-label">Subsistema</InputLabel>
                <Select
                  labelId="role-label"
                  id="role-select"
                  value={newUser.value}
                  name="Subsistema"
                  onChange={handleInputChange}
                  label="Subsistema"
                >
                  <MenuItem value="Subsistema1">Subsistema1</MenuItem>
                  <MenuItem value="Subsistema2">Subsistema2</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel id="role-label">Componente</InputLabel>
                <Select
                  labelId="role-label"
                  id="role-select"
                  value={newUser.value}
                  name="Componente"
                  onChange={handleInputChange}
                  label="Componente"
                >
                  <MenuItem value="Componente1">Componente1</MenuItem>
                  <MenuItem value="Componente2">Componente2</MenuItem>
                </Select>
              </FormControl>

              <FormControl component="fieldset" margin="normal">
                <FormLabel component="legend">Tipo de Causa</FormLabel>
                <RadioGroup
                  aria-label="role"
                  name="role"
                  value={newUser.role}
                  onChange={handleInputChange}
                >
                  <FormControlLabel value="Operacional" control={<Radio />} label="Operacional" />
                  <FormControlLabel value="Electrica" control={<Radio />} label="Electrica" />
                  <FormControlLabel value="Mecanica" control={<Radio />} label="Mecanica" />
                  <FormControlLabel value="Externa" control={<Radio />} label="Externa" />
                </RadioGroup>
              </FormControl>
            </Grid>
            {/* Detalles adicionales */}
            <Grid item xs={6}>
              <TextField
                fullWidth
                multiline
                rows={5} // Número de filas en el área de texto grande
                margin="normal"
                label="Detalles adicionales"
                name="additionalDetails"
                value={newUser.additionalDetails}
                onChange={handleInputChange}
              />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 40 }}>
                <Button variant="contained" color="primary" onClick={handleAddUser}>
                  Guardar
                </Button>
                <Button variant="outlined" color="secondary" onClick={handleCloseModal}>
                  Cancelar
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Paper>
  );
}
