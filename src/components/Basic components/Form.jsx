import React, { useEffect, useState } from 'react';
import './form.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Store/auth';
import { toast } from 'react-toastify';

const defaultContactFormData = {
    username: "",
    email: "",
    phone: "",
    address: "",
    message: ""
}

const Form = () => {

    const [formData, setFormData] = useState(defaultContactFormData);
    const [user, setUser] = useState(true);
    const { userData } = useAuth();
    const Navigate = useNavigate();
    const [submitMessage, setSubmitMessage] = useState('');
    const {hostLink}=useAuth();

    useEffect(() => {
        if(userData && user){
            setFormData({
                username: userData.username,
                email: userData.email,
                phone: userData.phone,
                address: "",
                message: "",
            });
            setUser(false);
        }
    },[userData,user,setFormData]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${hostLink}/form/contact`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            })

            const res_data=await response.json();

            if (response.ok) {
                setFormData({
                    username: userData.username,
                    email: userData.email,
                    phone: userData.phone,
                    address: "",
                    message: "",
                });
                toast.success("Message sent successfully");
                Navigate('/contactus');
            }else{
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
            }
        } catch (err) {
            console.log("contact error", err);
        }
    }

    return (
        <>
            <div className='contactus-container'>
                <div class="form">
                    <form onSubmit={handleSubmit} name="submit-to-google-sheet">
                        <div className="form-box">
                            <div className="name">
                                <div className="form-name-heading heading">Your Name</div>
                                <div className="form-name">
                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="Email">
                                <div className="form-email-heading heading">Email Address</div>
                                <div className="form-email">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email address"
                                    />
                                </div>
                            </div>

                            <div className="phone-no">
                                <div className="phone-no-heading heading">Phone number</div>
                                <div className="form-phone-no">
                                    <input
                                        type="number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone no."
                                        required
                                    />
                                </div>
                            </div>

                            <div className="name">
                                <div className="form-name-heading heading">Your Address</div>
                                <div className="form-name">
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="Enter your address"
                                    />
                                </div>
                            </div>

                            <div className="message">
                                <div className="message-heading heading">Message</div>
                                <div className="form-message">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        cols="30"
                                        rows="5"
                                        placeholder="Please enter your comments..."
                                    ></textarea>
                                </div>
                            </div>

                            <div className="form-submit-btn">
                                <button type="submit">Submit</button>
                                <div id="conform-msg">{submitMessage}</div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}

export default Form