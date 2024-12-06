import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import AppointmentHead from "./heading/appointmenthead";

function Appointment() {
    const location = useLocation();
    const isAppointmentPage = location.pathname === "/appointment";
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

 // Retrieve form values safely
const formElements = e.target.elements;
const dateInput = formElements["date-input"].value; // YYYY-MM-DD from the date input

// Parse the input date and convert to DD-MM-YYYY for validation
const [year, month, day] = dateInput.split("-");
const formattedInputDate = `${Number(day) + 1}-${month}-${year}`; // Fixed issue here

// Convert input date to Date object for comparison
const selectedDate = new Date(`${year}-${month}-${day}`);
const today = new Date();
today.setHours(0, 0, 0, 0);

if (selectedDate <= today) {
    alert(`Invalid date. Please provide a future date in DD-MM-YYYY format.`);
    return;
}

const formattedDate = formattedInputDate; // Keep DD-MM-YYYY format for submission

// Create the appointment data object
const appointmentData = {
    service: formElements[0].value,
    practitioner: formElements[1].value,
    branch: formElements[2].value,
    name: formElements[3].value,
    email: formElements[4].value,
    mobile: formElements[5].value,
    date: formattedDate, // Use the formatted date
};

console.log("Submitting appointment data:", appointmentData);


        // Make a POST request
        axios
            .post("http://192.168.1.12:4001/appointment/crt", appointmentData)
            .then((response) => {
                console.log("Response from server:", response);
                if (response.status === 201) {
                    setShowSuccess(true);
                    e.target.reset(); // Clear the form
                } else {
                    console.error("Unexpected response:", response);
                    alert("Unexpected server response. Please try again.");
                }
            })
            .catch((error) => {
                const errorMessage = error.response?.data?.message || "Failed to schedule appointment. Please try again.";
                alert(errorMessage);
                console.error("Error scheduling appointment:", error);
            });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div>
                {showSuccess && (
                    <div className="position-fixed top-50 start-50 translate-middle" 
                         style={{
                             zIndex: 1050,
                             backgroundColor: 'white',
                             padding: '20px',
                             borderRadius: '8px',
                             boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                             textAlign: 'center',
                             minWidth: '300px'
                         }}>
                        <div className="mb-3">
                            <i className="fas fa-check-circle text-success" 
                               style={{ fontSize: '3rem' }}></i>
                        </div>
                        <h4 className="mb-3">Appointment Created Successfully!</h4>
                        <p className="mb-4">Thank you for choosing Viscera Clinic.</p>
                        <button 
                            className="btn btn-primary"
                            onClick={() => setShowSuccess(false)}>
                            OK
                        </button>
                    </div>
                )}

                {showSuccess && (
                    <div 
                        className="position-fixed top-0 start-0 w-100 h-100"
                        style={{
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            zIndex: 1040
                        }}
                        onClick={() => setShowSuccess(false)}
                    ></div>
                )}

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
                                                <label htmlFor="date-input" className="form-label text-white">
                                                    Select Date
                                                </label>
                                                <div className="date">
                                                    <input
                                                        id="date-input"
                                                        name="date-input"
                                                        type="date"
                                                        className="form-control bg-light border-0"
                                                        style={{
                                                            height: "55px",
                                                            colorScheme: "light",
                                                        }}
                                                        min={new Date().toISOString().split("T")[0]}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-dark w-100 py-3" type="submit">
                                                    Schedule Appointment
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
