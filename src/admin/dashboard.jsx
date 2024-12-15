import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaChartLine, FaBars, FaTimes, FaTrash, FaEdit } from 'react-icons/fa';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editAppointment, setEditAppointment] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    practitioner: '',
    service: '',
    branch: '',
    date: '',
    email: '',
    mobile: ''
  });

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setSidebarOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get('http://192.168.133.4:6009/api/appointments/get')
      .then((response) => {
        setAppointments(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching appointments:', error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (userId) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      axios
        .delete(`http://192.168.133.4:6009/api/appointments/delete/${userId}`)
        .then((response) => {
          if (response.status === 200 || response.status === 204) {
            setAppointments((prevAppointments) =>
              prevAppointments.filter((app) => app._id !== userId)
            );
            alert('Appointment deleted successfully');
          } else {
            alert('Failed to delete appointment');
          }
        })
        .catch((error) => {
          console.error('Error deleting appointment:', error);
          alert('Failed to delete appointment');
        });
    }
  };

  const handleDeleteAll = () => {
    if (window.confirm('Are you sure you want to delete all appointments?')) {
      axios
        .delete('http://192.168.133.4:6009/api/appointments/delete/all')
        .then((response) => {
          if (response.status === 200 || response.status === 204) {
            setAppointments([]);
            alert('All appointments deleted successfully');
          } else {
            alert('Failed to delete appointments');
          }
        })
        .catch((error) => {
          console.error('Error deleting all appointments:', error);
          alert('Failed to delete appointments');
        });
    }
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    if (
      !editFormData.name ||
      !editFormData.practitioner ||
      !editFormData.service ||
      !editFormData.branch ||
      !editFormData.date ||
      !editFormData.email ||
      !editFormData.mobile
    ) {
      alert('Please fill all fields before submitting.');
      return;
    }

    const formattedDate = new Date(editFormData.date).toISOString().split('T')[0];

    const updatedAppointment = { ...editFormData, date: formattedDate };

    axios
      .put(`http://192.168.133.4:6009/api/appointments/update/${editAppointment._id}`, updatedAppointment)
      .then((response) => {
        setAppointments((prevAppointments) =>
          prevAppointments.map((app) =>
            app._id === editAppointment._id ? { ...app, ...updatedAppointment } : app
          )
        );
        alert('Appointment updated successfully');
        setEditAppointment(null);
      })
      .catch((error) => {
        console.error('Error updating appointment:', error);
        alert('Failed to update appointment');
      });
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formatDate = (date) => {
    return new Date(date).toISOString().split('T')[0];
  };

  return (
    <div className="dashboard">
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <h2>Hospital Admin</h2>
          <button className="close-sidebar" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="active" onClick={() => handleNavigation('/admin')}>
              <FaChartLine /> Appointments
            </li>
          </ul>
        </nav>
      </div>

      <div className="main-content">
        <header className="dashboard-header">
          <button className="menu-toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <div className="header-right">
            <span>Admin Name: Senthilkumar</span>
          </div>
        </header>

        <div className="dashboard-content">
          <div className="appointments-section">
            <div className="appointments-header">
              <h2>Recent Appointments</h2>
              <button onClick={handleDeleteAll} className="delete-all-btn" title="Delete all appointments">
                <FaTrash /> Delete All Appointments
              </button>
            </div>

            <div className="table-responsive">
              <table className="appointments-table">
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Doctor</th>
                    <th>Service</th>
                    <th>Branch</th>
                    <th>Date</th>
                    <th>Contact</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="8">Loading appointments...</td>
                    </tr>
                  ) : appointments.length > 0 ? (
                    appointments.map((appointment, index) => (
                      <tr key={index}>
                        <td>{appointment?.name || 'N/A'}</td>
                        <td>{appointment?.practitioner || 'N/A'}</td>
                        <td>{appointment?.service || 'N/A'}</td>
                        <td>{appointment?.branch || 'N/A'}</td>
                        <td>{appointment?.date ? new Date(appointment.date).toLocaleDateString() : 'N/A'}</td>
                        <td>
                          {appointment?.email || 'N/A'}
                          <br />
                          {appointment?.mobile || 'N/A'}
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              setEditAppointment(appointment);
                              setEditFormData({ ...appointment });
                            }}
                            className="edit-btn"
                            title="Edit appointment"
                            style={{ marginRight: '10px' }}
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDelete(appointment._id)}
                            className="delete-btn"
                            title="Delete appointment"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8">No appointments found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {editAppointment && (
        <div className="edit-modal">
          <form onSubmit={handleEditSubmit} className="edit-form">
            <h3>Edit Appointment</h3>
            <label>
              Patient Name:
              <input
                type="text"
                name="name"
                value={editFormData.name}
                onChange={handleEditFormChange}
              />
            </label>
            <label>
              Doctor:
              <input
                type="text"
                name="practitioner"
                value={editFormData.practitioner}
                onChange={handleEditFormChange}
              />
            </label>
            <label>
              Service:
              <input
                type="text"
                name="service"
                value={editFormData.service}
                onChange={handleEditFormChange}
              />
            </label>
            <label>
              Branch:
              <input
                type="text"
                name="branch"
                value={editFormData.branch}
                onChange={handleEditFormChange}
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={formatDate(editFormData.date)} // Ensure the date is formatted correctly
                onChange={handleEditFormChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={editFormData.email}
                onChange={handleEditFormChange}
              />
            </label>
            <label>
              Mobile:
              <input
                type="text"
                name="mobile"
                value={editFormData.mobile}
                onChange={handleEditFormChange}
              />
            </label>
            <div className="modal-footer">
              <button type="submit" className="submit-btn">Save Changes</button>
              <button type="button" onClick={() => setEditAppointment(null)} className="cancel-btn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
