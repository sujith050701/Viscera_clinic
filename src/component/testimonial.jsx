import React from 'react';
import { useState } from 'react';
import TestHead from './heading/testhead';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Patient",
            image: "/images/patient1.jpg",
            text: "The care I received at this hospital was exceptional. The medical staff was not only highly professional but also incredibly compassionate. They made my recovery journey much easier.",
        },
        {
            id: 2,
            name: "Dr. Michael Chen",
            role: "Referring Physician",
            image: "/images/doctor1.jpg",
            text: "As a referring physician, I've consistently seen excellent outcomes for my patients at this hospital. Their integrated approach to healthcare and state-of-the-art facilities are impressive.",
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Family Member",
            image: "/images/family1.jpg",
            text: "During my mother's extended stay, the staff went above and beyond to keep our family informed and comfortable. Their dedication to patient care is truly remarkable.",
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
        <TestHead/>
        <section className="testimonial-section">
            <div className="container">
                <h2 className="section-title">What Our Patients Says</h2>
                <div className="testimonial-carousel">
                    <button className="nav-button prev" onClick={prevTestimonial}>
                        &lt;
                    </button>
                    <div className="testimonial-card">
                        <div className="testimonial-image">
                           
                        </div>
                        <div className="testimonial-content">
                            <p className="testimonial-text">
                                "{testimonials[currentIndex].text}"
                            </p>
                            <div className="testimonial-author">
                                <h4>{testimonials[currentIndex].name}</h4>
                                <p>{testimonials[currentIndex].role}</p>
                            </div>
                        </div>
                    </div>
                    <button className="nav-button next" onClick={nextTestimonial}>
                        &gt;
                    </button>
                </div>
            </div>
        </section></>
    );
};

export default Testimonial;