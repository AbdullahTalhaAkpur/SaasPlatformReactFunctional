import React, { useState, useEffect } from 'react';
import './mission.css';
import { Box, Button, Card, CardContent, Grid, TextField, Typography, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, MenuItem, Select, FormControl, InputLabel, Checkbox } from '@mui/material';
import { Add, Delete, CheckBoxOutlineBlank, CheckBox } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Missions = ({ members = [], missions = [], setMissions }) => {
  const {t} = useTranslation()
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
      employeeRole: selectedMember ? selectedMember.role : ''
    });
  };

  const handleAddTask = () => {
    const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const updatedTasks = [...tasks, { ...newTask, id: newId }];
    setTasks(updatedTasks);
    setMissions(updatedTasks); // Update parent state
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
    setMissions(updatedTasks); // Update parent state
  };

  const handleToggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    setMissions(updatedTasks); // Update parent state
  };

  return (
    <div>
      <Box p={2}>
        <Button variant="contained" color="primary" startIcon={<Add />} onClick={handleClickOpenTaskDialog}>
          {t('missions.add_task')}
        </Button>
        
        {/* Task Dialog */}
        <Dialog open={openTaskDialog} onClose={handleCloseTaskDialog}>
          <DialogTitle>{t('missions.dialog_title')}</DialogTitle>
          <DialogContent>
            <TextField autoFocus margin="dense" name="taskName" label={t('missions.task_name')} fullWidth value={newTask.taskName} onChange={handleTaskChange} />
            <FormControl fullWidth margin="dense">
              <InputLabel id="employee-label">{t('missions.employee')}</InputLabel>
              <Select
                labelId="employee-label"
                name="employee"
                value={newTask.employee}
                onChange={handleEmployeeChange}
                label={t('missions.employee')}
              >
                {members.map(member => (
                  <MenuItem key={member.id} value={`${member.firstName} ${member.lastName}`}>
                    {`${member.firstName} ${member.lastName}`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField margin="dense" name="facility" label={t('missions.facility')} fullWidth value={newTask.facility} onChange={handleTaskChange} />
            
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseTaskDialog} color="primary">
              {t('missions.cancel')}
            </Button>
            <Button onClick={handleAddTask} color="primary">
              {t('missions.submit')}
            </Button>
          </DialogActions>
        </Dialog>

        <Grid container spacing={2} mt={2}>
          {tasks.length > 0 ? (
            tasks.map(task => (
              <Grid item xs={12} sm={6} md={4} key={task.id}>
                <Card>
                  <CardContent style={{ position: 'relative' }}>
                    <IconButton 
                      style={{ position: 'absolute', top: 0, right: 0 }}
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      <Delete />
                    </IconButton>
                    <Typography variant="h6" style={{ marginTop: '10px', textAlign: 'center' }}>
                      {task.taskName}
                    </Typography>
                    <Box mt={2}>
                      <Grid container spacing={1}>
                        <Grid item xs={4} style={{ textAlign: 'left' }}>
                          <Typography variant="body2" color="textSecondary"><strong>{t('missions.employee')}:</strong></Typography>
                        </Grid>
                        <Grid item xs={8} style={{ textAlign: 'left' }}>
                          <Typography variant="body2" color="textSecondary">{task.employee}</Typography>
                        </Grid>
                        <Grid item xs={4} style={{ textAlign: 'left' }}>
                          <Typography variant="body2" color="textSecondary"><strong>{t('missions.role')}:</strong></Typography>
                        </Grid>
                        <Grid item xs={8} style={{ textAlign: 'left' }}>
                          <Typography variant="body2" color="textSecondary">{task.employeeRole}</Typography>
                        </Grid>
                        <Grid item xs={4} style={{ textAlign: 'left' }}>
                          <Typography variant="body2" color="textSecondary"><strong>{t('missions.facility')}:</strong></Typography>
                        </Grid>
                        <Grid item xs={8} style={{ textAlign: 'left' }}>
                          <Typography variant="body2" color="textSecondary">{task.facility}</Typography>
                        </Grid>
                        <Grid item xs={4} style={{ textAlign: 'left' }}>
                          <Typography variant="body2" color="textSecondary"><strong>{t('missions.status')}:</strong></Typography>
                        </Grid>
                        <Grid item xs={8} style={{ textAlign: 'left' }}>
                          <Typography variant="body2" color="textSecondary">
                            {task.completed ? t('missions.completed') : t('missions.in_progress')}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: 'center', position: 'absolute',  right: '0', marginTop: '72px' }}>
                          <Checkbox
                            checked={task.completed}
                            onChange={() => handleToggleTaskCompletion(task.id)}
                            icon={<CheckBoxOutlineBlank />}
                            checkedIcon={<CheckBox />}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="h6" style={{ margin: 'auto', textAlign: 'center' }}>
              {t('missions.no_tasks')}
            </Typography>
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default Missions;