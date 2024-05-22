import React, { useState, useEffect } from 'react';
import './mission.css';
import { Box, Button, Card, CardContent, Grid, TextField, Typography, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, MenuItem, Select, FormControl, InputLabel, Checkbox, FormControlLabel } from '@mui/material';
import { Add, Delete, CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material';

const Missions = ({ members }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    return savedTasks || [];
  });

  const [openTaskDialog, setOpenTaskDialog] = useState(false);

  const [newTask, setNewTask] = useState({
    taskName: '',
    employee: '',
    employeeRole: '',
    facility: '',
    completed: false
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleClickOpenTaskDialog = () => {
    setOpenTaskDialog(true);
  };

  const handleCloseTaskDialog = () => {
    setOpenTaskDialog(false);
  };

  const handleTaskChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value
    });
  };

  const handleEmployeeChange = (e) => {
    const selectedMember = members.find(member => `${member.firstName} ${member.lastName}` === e.target.value);
    setNewTask({
      ...newTask,
      employee: e.target.value,
      employeeRole: selectedMember.role
    });
  };

  const handleAddTask = () => {
    const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const updatedTasks = [...tasks, { ...newTask, id: newId }];
    setTasks(updatedTasks);
    setNewTask({
      taskName: '',
      employee: '',
      employeeRole: '',
      facility: '',
      completed: false
    });
    setOpenTaskDialog(false);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleToggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Box p={2}>
        <Button variant="contained" color="primary" startIcon={<Add />} onClick={handleClickOpenTaskDialog}>
          Görev Ekle
        </Button>
        
        {/* Task Dialog */}
        <Dialog open={openTaskDialog} onClose={handleCloseTaskDialog}>
          <DialogTitle>Görev Ekle</DialogTitle>
          <DialogContent>
            <TextField autoFocus margin="dense" name="taskName" label="Görev Adı" fullWidth value={newTask.taskName} onChange={handleTaskChange} />
            <FormControl fullWidth margin="dense">
              <InputLabel id="employee-label">Çalışan</InputLabel>
              <Select
                labelId="employee-label"
                name="employee"
                value={newTask.employee}
                onChange={handleEmployeeChange}
                label="Çalışan"
              >
                {members.map(member => (
                  <MenuItem key={member.id} value={`${member.firstName} ${member.lastName}`}>
                    {`${member.firstName} ${member.lastName}`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField margin="dense" name="facility" label="Tesis Adı" fullWidth value={newTask.facility} onChange={handleTaskChange} />
            <FormControlLabel
              control={<Checkbox checked={newTask.completed} onChange={(e) => setNewTask({ ...newTask, completed: e.target.checked })} />}
              label="Tamamlandı"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseTaskDialog} color="primary">
              İptal
            </Button>
            <Button onClick={handleAddTask} color="primary">
              Ekle
            </Button>
          </DialogActions>
        </Dialog>

        <Grid container spacing={2} mt={2}>
          {tasks.map(task => (
            <Grid item xs={12} sm={6} md={4} key={task.id}>
              <Card>
                <CardContent style={{ position: 'relative' }}>
                  <Typography variant="h6" style={{ marginTop: '10px', textAlign: 'center' }}>
                    {task.taskName}
                  </Typography>
                  <Box mt={2}>
                    <Grid container spacing={1}>
                      <Grid item xs={4} style={{ textAlign: 'left' }}>
                        <Typography variant="body2" color="textSecondary"><strong>Çalışan:</strong></Typography>
                      </Grid>
                      <Grid item xs={8} style={{ textAlign: 'left' }}>
                        <Typography variant="body2" color="textSecondary">{task.employee}</Typography>
                      </Grid>
                      <Grid item xs={4} style={{ textAlign: 'left' }}>
                        <Typography variant="body2" color="textSecondary"><strong>Rol:</strong></Typography>
                      </Grid>
                      <Grid item xs={8} style={{ textAlign: 'left' }}>
                        <Typography variant="body2" color="textSecondary">{task.employeeRole}</Typography>
                      </Grid>
                      <Grid item xs={4} style={{ textAlign: 'left' }}>
                        <Typography variant="body2" color="textSecondary"><strong>Tesis:</strong></Typography>
                      </Grid>
                      <Grid item xs={8} style={{ textAlign: 'left' }}>
                        <Typography variant="body2" color="textSecondary">{task.facility}</Typography>
                      </Grid>
                      <Grid item xs={4} style={{ textAlign: 'left' }}>
                        <Typography variant="body2" color="textSecondary"><strong>Durum:</strong></Typography>
                      </Grid>
                      <Grid item xs={8} style={{ textAlign: 'left' }}>
                        <Checkbox
                          checked={task.completed}
                          onChange={() => handleToggleTaskCompletion(task.id)}
                          icon={<CheckBoxOutlineBlank />}
                          checkedIcon={<CheckBox />}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  <IconButton 
                    style={{ position: 'absolute', top: 0, right: 0 }}
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    <Delete />
                  </IconButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Missions;