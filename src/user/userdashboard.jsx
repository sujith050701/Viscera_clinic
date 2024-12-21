import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchAppointments = async () => {
      setError(""); // Reset error before making the request

      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token"); // Get token from localStorage
      if (!userId || !token) {
        setError("You are not logged in.");
        navigate("/login"); // Redirect to login if not logged in
        setLoading(false);
        return;
      }

      try {
        const { data } = await axios.get(
          `http://192.168.2.4:6009/api/appointments/get/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (data.appointments) {
          setAppointments(data.appointments); // Assign the list of appointments
        } else {
          throw new Error("No appointments found in the response.");
        }
      } catch (error) {
        setError(error.response?.data?.message || error.message || "Error fetching appointments");
      } finally {
        setLoading(false); // Set loading to false after the request completes
      }
    };

    fetchAppointments();
  }, [navigate]); // Depend on navigate to trigger the redirection

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Appointment History</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {appointments.length > 0 ? (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse", // This will ensure borders are merged between cells
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th style={{ padding: "10px", textAlign: "left", border: "1px solid #ddd" }}>Date</th>
              <th style={{ padding: "10px", textAlign: "left", border: "1px solid #ddd" }}>Service</th>
              <th style={{ padding: "10px", textAlign: "left", border: "1px solid #ddd" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt._id}>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {new Date(appt.date).toLocaleDateString()}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {appt.service || "Unknown Doctor"}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {appt.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No appointments found.</p>
      )}
    </div>
  );
};

export default UserDashboard;
