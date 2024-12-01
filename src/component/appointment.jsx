import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";
import AppointmentHead from "./heading/appointmenthead";

function Appointment() {
    const location = useLocation();
    const isAppointmentPage = location.pathname === "/appointment";

    const handleSubmit = (e) => {
        e.preventDefault();

        // Get form values
        const service = e.target.elements[0].value;
        const practitioner = e.target.elements[1].value;
        const name = e.target.elements[2].value;
        const email = e.target.elements[3].value;
        const phone = e.target.elements[4].value;
        const date = e.target.elements[5].value;
        const time = e.target.elements[6].value;

        // Format message for WhatsApp
        const message = `
Hello! I would like to book an appointment:
        
Service: ${service}
Practitioner: ${practitioner}
Name: ${name}
Email: ${email}
Phone: ${phone}
Date: ${date}
Time: ${time}`;

        // Replace this with your clinic's phone number
        const clinicPhone = "+919791363808";

        // Create WhatsApp link with encoded message
        const whatsappLink = `https://wa.me/${clinicPhone}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp
        window.open(whatsappLink, '_blank');
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div>
                {isAppointmentPage && <AppointmentHead />}
                <div className="container-fluid bg-primary bg-appointment mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ "margin-top": "90px" }}>
                    <div className="container">
                        <div className="row gx-5">
                            <div className="col-lg-6 py-5">
                                <div className="py-5">
                                    <h1 className="display-5 text-white mb-4">Your Journey to Wellness Begins with Our Viscera Clinic Healing Approach</h1>
                                    <p className="text-white mb-0">At our Viscera Clinic wellness center, we believe in treating the whole person - body, mind, and spirit. Our integrated approach combines traditional wisdom with modern therapeutic techniques to help you achieve optimal health and balance. Our experienced practitioners are dedicated to understanding your unique needs and creating a personalized healing journey for you.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                                    <h1 className="text-white mb-4">Schedule a Consultation</h1>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row g-3">
                                            <div className="col-12 col-sm-6">
                                                <select className="form-select bg-light border-0" style={{ "height": "55px" }} required>
                                                    <option value="">Select A Service</option>
                                                    <option value={1}>Acupuncture</option>
                                                    <option value={2}>Acupressure</option>
                                                    <option value={3}>Naturopathy</option>
                                                    <option value={4}>Reflexology</option>
                                                    <option value={5}>Energy Healing</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <select className="form-select bg-light border-0" style={{ "height": "55px" }} required>
                                                    <option value="">Select Practitioner</option>
                                                    <option value={1}>Viscera Physician</option>
                                                    <option value={2}>Naturopathy</option>
                                                    <option value={3}>Acupuncturist</option>
                                                    <option value={4}>Herbalist</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <select className="form-select bg-light border-0" style={{ "height": "55px" }} required>
                                                    <option value="">Select Branch</option>
                                                    <option value="Madurai">Madurai</option>
                                                    <option value="Chennai">Chennai</option>
                                                    <option value="Thiruchirapalli">Thiruchirapalli</option>
                                                    <option value="Coimbatore">Coimbatore</option>
                                                    <option value="Ernakulam">Ernakulam</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{ "height": "55px" }} required />
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{ "height": "55px" }} required />
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input
                                                    type="tel"
                                                    className="form-control bg-light border-0"
                                                    placeholder="Your Mobile Number"
                                                    style={{ "height": "55px" }}
                                                    required
                                                />
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="date-input" className="form-label text-white">
                                                    Select Date (DD/MM/YYYY)
                                                </label>
                                                <div className="date">
                                                    <input
                                                        id="date-input"
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
                                            <div className="col-12 col-sm-6">
                                                <label htmlFor="time-input" className="form-label text-white">
                                                    Select Time(9:00 AM - 6:00 PM)
                                                </label>
                                                <div className="time">
                                                    <input
                                                        id="time-input"
                                                        type="time"
                                                        className="form-control bg-light border-0"
                                                        style={{
                                                            height: "55px",
                                                            colorScheme: "light",
                                                        }}
                                                        min="09:00"
                                                        max="18:00"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <button className="btn btn-dark w-100 py-3" type="submit">
                                                    Appointment
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
    )
}

export default Appointment;