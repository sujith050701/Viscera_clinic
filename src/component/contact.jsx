import React, { useState, useEffect } from "react";
import ContactHead from "./heading/contacthead";

function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const adminPhoneNumber = "918925168697"; // Admin's phone number in international format (without + sign)
        const { name, email, subject, message } = formData;

        // Construct the WhatsApp message
        const whatsappMessage = `Hello, Admin SenthilKumar!
    
    You have a new contact form submission:
    
    Name: ${name}
    Email: ${email}
    Subject: ${subject}
    Message: ${message}`;

        // Redirect to WhatsApp
        const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, "_blank");
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div>
                <ContactHead />
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-xl-4 col-lg-6">
                                <div className="bg-light rounded h-100 p-5">
                                    <div className="section-title">
                                        <h5 className="position-relative d-inline-block text-primary text-uppercase">Contact Us</h5>
                                        <h1 className="display-6 mb-4">Feel Free To Contact Us</h1>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="bi bi-geo-alt fs-1 text-primary me-3" />
                                        <div className="text-start">
                                            <h5 className="mb-0">Our Office</h5>
                                            <span>No.29, Vaithiyanathapuram, Ellis Nagar, S S Colony, Madurai, Tamil Nadu, India - 625016</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="bi bi-envelope-open fs-1 text-primary me-3" />
                                        <div className="text-start">
                                            <h5 className="mb-0">Email Us</h5>
                                            <span>stapas2010@gmail.com</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-phone-vibrate fs-1 text-primary me-3" />
                                        <div className="text-start">
                                            <h5 className="mb-0">Call Us</h5>
                                            <span>+91 8925168697</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="form-control border-0 bg-light px-4"
                                                placeholder="Your Name *"
                                                required
                                                style={{ height: "55px" }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="form-control border-0 bg-light px-4"
                                                placeholder="Your Email *"
                                                required
                                                style={{ height: "55px" }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="form-control border-0 bg-light px-4"
                                                placeholder="Subject *"
                                                required
                                                style={{ height: "55px" }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="form-control border-0 bg-light px-4 py-3"
                                                rows={5}
                                                placeholder="Message *"
                                                required
                                            />
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-xl-4 col-lg-12">
    <iframe
        className="position-relative rounded w-100 h-100"
        src="https://www.google.com/maps/d/embed?mid=1y3RCKVHRxXj_-YJigY9-5kckZhxrgVM&ehbc=2E312F&noprof=1&output=embed"
        frameBorder={0}
        style={{ minHeight: "400px", border: "0" }}
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
    />
</div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage;
