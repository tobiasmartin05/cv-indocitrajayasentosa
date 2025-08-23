
import React, { useState } from 'react';
import axios from 'axios';

const TeamContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        address: '',
        note: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required';
        }
        if (!formData.address.trim()) {
            errors.address = 'Address is required';
        }
        if (!formData.note.trim()) {
            errors.note = 'Description is required';
        }
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await axios.post('YOUR_BACKEND_ENDPOINT', formData);

            setFormData({
                name: '',
                email: '',
                subject: '',
                address: '',
                note: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group half-col">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name:"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
            </div>
            <div className="form-group half-col">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email:"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
            </div>
            <div className="form-group half-col">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Subject:"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                />
                {errors.subject && <div className="error-message">{errors.subject}</div>}
            </div>
            <div className="form-group half-col">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Address:"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                />
                {errors.address && <div className="error-message">{errors.address}</div>}
            </div>
            <div className="form-group full-col">
                <textarea
                    className="form-control"
                    name="note"
                    placeholder="Description..."
                    value={formData.note}
                    onChange={handleChange}
                ></textarea>
                {errors.note && <div className="error-message">{errors.note}</div>}
            </div>
            {/* Repeat similar pattern for other form fields */}
            <div className="form-group half-col">
                <button className="btn theme-btn" type="submit">Get In Touch</button>
            </div>
        </form>
    );
};

export default TeamContactForm;
