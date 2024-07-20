import React, { useState } from 'react';
import { Button, Container, Typography, Modal, TextField, Box, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReferEarnPage = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    course: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://accredian-backend-task-qgc3.onrender.com/api/referrals', formData);
      if (response.status === 200) {
        setFormData({
          referrerName: '',
          referrerEmail: '',
          refereeName: '',
          refereeEmail: '',
          course: '',
        });
        setOpen(false);
        setError(null);
        toast.success('Referral submitted successfully!');
      }
    } catch (err) {
      setError('Failed to submit referral. Please try again.');
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Refer & Earn
      </Typography>
      <Typography variant="h5" align="center" paragraph>
        Refer a course and earn rewards!
      </Typography>
      <Box textAlign="center">
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Refer Now
        </Button>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <Box bgcolor="white" p={3} borderRadius={8} boxShadow={3} position="relative">
            <IconButton
              aria-label="close"
              onClick={handleClose}
              style={{ position: 'absolute', top: 8, right: 8 }}
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" gutterBottom>
              Refer a Course
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Referrer Name"
                name="referrerName"
                fullWidth
                required
                margin="normal"
                value={formData.referrerName}
                onChange={handleChange}
              />
              <TextField
                label="Referrer Email"
                name="referrerEmail"
                fullWidth
                required
                margin="normal"
                type="email"
                value={formData.referrerEmail}
                onChange={handleChange}
              />
              <TextField
                label="Referee Name"
                name="refereeName"
                fullWidth
                required
                margin="normal"
                value={formData.refereeName}
                onChange={handleChange}
              />
              <TextField
                label="Referee Email"
                name="refereeEmail"
                fullWidth
                required
                margin="normal"
                type="email"
                value={formData.refereeEmail}
                onChange={handleChange}
              />
              <TextField
                label="Course"
                name="course"
                fullWidth
                required
                margin="normal"
                value={formData.course}
                onChange={handleChange}
              />
              <Box textAlign="center" mt={2}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Box>
            </form>
            {error && <Typography color="error">{error}</Typography>}
          </Box>
        </Box>
      </Modal>
      <ToastContainer />
    </Container>
  );
};

export default ReferEarnPage;
