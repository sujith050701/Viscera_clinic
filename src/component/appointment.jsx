import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import AppointmentHead from "./heading/appointmenthead";

function Appointment() {
    const location = useLocation();
    const navigate = useNavigate();
    const isAppointmentPage = location.pathname === "/appointment";
    const [showSuccess, setShowSuccess] = useState(false);
    const [showLoginMessage, setShowLoginMessage] = useState(false); // State to show login message

    useEffect(() => {
        if (isAppointmentPage) {
            const token = localStorage.getItem("token");
            if (!token) {
                setShowLoginMessage(true); // Show login message if not logged in
            }
        }
    }, [isAppointmentPage]);

    const redirectToLogin = () => {
        navigate("/login");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formElements = e.target.elements;
        const dateInput = formElements["date-input"].value;

        // Format date
        const [year, month, day] = dateInput.split("-");
        const formattedInputDate = `${Number(day)}-${month}-${year}`;

        const selectedDate = new Date(`${year}-${month}-${day}`);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate <= today) {
            alert(`Invalid date. Please provide a future date in DD-MM-YYYY format.`);
            return;
        }

        const appointmentData = {
            service: formElements[0].value,
            practitioner: formElements[1].value,
            branch: formElements[2].value,
            name: formElements[3].value,
            email: formElements[4].value,
            mobile: formElements[5].value,
            date: formattedInputDate,
        };

        console.log("Submitting appointment data:", appointmentData);

        const token = localStorage.getItem("token");
        if (!token) {
            setShowLoginMessage(true);
            return;
        }

        try {
            const response = await axios.post(
                "http://192.168.2.4:6009/api/appointments/create",
                appointmentData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 201) {
                setShowSuccess(true);
                e.target.reset();
                setTimeout(() => setShowSuccess(false), 3000);
            } else {
                alert("Unexpected server response. Please try again.");
            }
        } catch (error) {
            const errorMessage =
                error.response?.data?.message ||
                "Failed to schedule appointment. Please try again.";
            alert(errorMessage);
            console.error("Error scheduling appointment:", error);
        }
    };

    return (
        <>
            {/* Login Prompt */}
            {showLoginMessage && (
                <>
                    <div
                        className="position-fixed top-50 start-50 translate-middle"
                        style={{
                            zIndex: 1050,
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "8px",
                            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                            textAlign: "center",
                            minWidth: "300px",
                        }}
                    >
                        <h4 className="mb-3">Please Log In</h4>
                        <p className="mb-4">You must be logged in to book an appointment.</p>
                        <button className="btn btn-primary" onClick={redirectToLogin}>
                            Go to Login
                        </button>
                    </div>
                    <div
                        className="position-fixed top-0 start-0 w-100 h-100"
                        style={{
                            backgroundColor: "rgba(0,0,0,0.5)",
                            zIndex: 1040,
                        }}
                    ></div>
                </>
            )}

            {/* Success Message */}
            {showSuccess && (
                <>
                    <div
                        className="position-fixed top-50 start-50 translate-middle"
                        style={{
                            zIndex: 1050,
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "8px",
                            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                            textAlign: "center",
                            minWidth: "300px",
                        }}
                    >
                        <div className="mb-3">
                            <i className="fas fa-check-circle text-success" style={{ fontSize: "3rem" }}></i>
                        </div>
                        <h4 className="mb-3">Appointment Created Successfully!</h4>
                        <p className="mb-4">Thank you for choosing Viscera Clinic.</p>
                        <button className="btn btn-primary" onClick={() => setShowSuccess(false)}>
                            OK
                        </button>
                    </div>
                    <div
                        className="position-fixed top-0 start-0 w-100 h-100"
                        style={{
                            backgroundColor: "rgba(0,0,0,0.5)",
                            zIndex: 1040,
                        }}
                    ></div>
                </>
            )}

            {/* Appointment Page */}
            <div>
                {isAppointmentPage && <AppointmentHead />}
                <div
                    className="container-fluid bg-primary bg-appointment mb-5 wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{ marginTop: "90px" }}
                >
                    <div className="container">
                        <div className="row gx-5">
                            <div className="col-lg-6 py-5">
                                <div className="py-5">
                                    <h1 className="display-5 text-white mb-4">
                                        Your Journey to Wellness Begins with Our Viscera Clinic Healing Approach
                                    </h1>
                                    <p className="text-white mb-0">
                                        At our Viscera Clinic wellness center, we believe in treating the whole person - body, mind, and spirit.
                                        Our integrated approach combines traditional wisdom with modern therapeutic techniques to help you achieve
                                        optimal health and balance. Our experienced practitioners are dedicated to understanding your unique needs
                                        and creating a personalized healing journey for you.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div
                                    className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
                                    data-wow-delay="0.6s"
                                >
                                    <h1 className="text-white mb-4">Schedule a Consultation</h1>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row g-3">
                                            <div className="col-12 col-sm-6">
                                                <select className="form-select bg-light border-0" style={{ height: "55px" }} required>
                                                    <option value="">Select A Service</option>
                                                    <option value="Acupuncture">Acupuncture</option>
                                                    <option value="Acupressure">Acupressure</option>
                                                    <option value="Naturopathy">Naturopathy</option>
                                                    <option value="Reflexology">Reflexology</option>
                                                    <option value="Energy Healing">Energy Healing</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <select className="form-select bg-light border-0" style={{ height: "55px" }} required>
                                                    <option value="">Select Practitioner</option>
                                                    <option value="Viscera Physician">Viscera Physician</option>
                                                    <option value="Naturopathy">Naturopathy</option>
                                                    <option value="Acupuncturist">Acupuncturist</option>
                                                    <option value="Herbalist">Herbalist</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <select className="form-select bg-light border-0" style={{ height: "55px" }} required>
                                                    <option value="">Select Branch</option>
                                                    <option value="Madurai">Madurai</option>
                                                    <option value="Chennai">Chennai</option>
                                                    <option value="Thiruchirapalli">Thiruchirapalli</option>
                                                    <option value="Coimbatore">Coimbatore</option>
                                                    <option value="Ernakulam">Ernakulam</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input
                                                    type="text"
                                                    className="form-control bg-light border-0"
                                                    placeholder="Your Name"
                                                    style={{ height: "55px" }}
                                                    required
                                                />
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input
                                                    type="email"
                                                    className="form-control bg-light border-0"
                                                    placeholder="Your Email"
                                                    style={{ height: "55px" }}
                                                    required
                                                />
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input
                                                    type="tel"
                                                    className="form-control bg-light border-0"
                                                    placeholder="Your Mobile Number"
                                                    style={{ height: "55px" }}
                                                    required
                                                />
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input
                                                    type="date"
                                                    name="date-input"
                                                    className="form-control bg-light border-0"
                                                    style={{ height: "55px" }}
                                                    required
                                                />
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-dark w-100 py-3" type="submit">
                                                    Make Appointment
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Appointment;
