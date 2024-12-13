import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaChartLine, FaBars, FaTimes, FaTrash } from 'react-icons/fa';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true); // State to handle loading

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setSidebarOpen(false); // Close sidebar after navigation
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Fetch data from the backend
    axios.get('http://192.168.133.4:6009/api/appointments/get')
      .then(response => {
        console.log('Fetched appointments:', response.data.data); // Log data to debug
        setAppointments(response.data.data); // Update state with the correct key
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
        setLoading(false);
      });

  }, []);
  const userId = localStorage.getItem("userId");
  console.log(userId)
  // Individual delete function
  const handleDelete = (userId) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      // Add token or headers if necessary
      axios.delete(`http://192.168.133.4:6009/api/appointments/delete/${userId}`)
        .then(response => {
          if (response.status === 200 || response.status === 204) {
            // If the response status is success, filter the appointment out of the state
            setAppointments(prevAppointments => prevAppointments.filter(app => app._id !== userId));
            alert('Appointment deleted successfully');
          } else {
            alert('Failed to delete appointment');
          }
        })
        .catch(error => {
          console.error('Error deleting appointment:', error);
          alert('Failed to delete appointment');
        });
    }
  };

  // Delete all function
  const handleDeleteAll = () => {
    if (window.confirm('Are you sure you want to delete all appointments? This action cannot be undone.')) {
      // Add token or headers if necessary
      axios.delete('http://192.168.133.4:6009/api/appointments/delete/all')
        .then(response => {
          if (response.status === 200 || response.status === 204) {
            setAppointments([]); // Clear the state if the deletion is successful
            alert('All appointments deleted successfully');
          } else {
            alert('Failed to delete all appointments');
          }
        })
        .catch(error => {
          console.error('Error deleting all appointments:', error);
          alert('Failed to delete all appointments');
        });
    }
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <h2>Hospital Admin</h2>
          <button className="close-sidebar" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="active" onClick={() => handleNavigation('/admin')}><FaChartLine /> Appointments</li>

          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header className="dashboard-header">
          <button className="menu-toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <div className="header-right">
            <span>Admin Name:Senthilkumar</span>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="dashboard-content">


          {/* Recent Appointments */}
          <div className="appointments-section">
            <div className="appointments-header">
              <h2>Recent Appointments</h2>
              <button
                onClick={handleDeleteAll}
                className="delete-all-btn"
                title="Delete all appointments"
              >
                <FaTrash /> Delete All Appointments
              </button>
            </div>
            const userId = localStorage.getItem("userId");
            console.log(userId)

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
                    <tr><td colSpan="8">Loading appointments...</td></tr>
                  ) : appointments && appointments.length > 0 ? (
                    appointments.map((appointment, index) => (
                      <tr key={index}>
                        <td>{appointment?.name || 'N/A'}</td>
                        <td>{appointment?.practitioner || 'N/A'}</td>
                        <td>{appointment?.service || 'N/A'}</td>
                        <td>{appointment?.branch || 'N/A'}</td>
                        <td>{appointment?.date ? new Date(appointment.date).toLocaleDateString() : 'N/A'}</td>

                        <td>
                          {appointment?.email || 'N/A'}<br />
                          {appointment?.mobile || 'N/A'}
                        </td>
                        <td>
                          <button
                            onClick={() => handleDelete(appointment._id)} // Pass the appointment's _id
                            className="delete-btn"
                            title="Delete appointment"
                          >
                            <FaTrash />
                          </button>

                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr><td colSpan="8">No appointments found</td></tr>
                  )}
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
