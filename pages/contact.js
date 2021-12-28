import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from 'react';

const Contact = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            document.getElementById("contact").style="display:none";
        }
    });
    return (
        <div class="contact-container">
            <Header pageTitle={'Contact | Dan Groleau'} />
                <div className="content-box">
                    <form method="POST" action="" className="contact-form">
                        <div className="form-item">
                            <h3>Contact</h3>
                        </div>
                        <div className="form-item">
                            <input name="contact_name" type="text" className="btn form-input" placeholder="Name" />
                        </div>
                        <div className="form-item">
                            <input name="contact_email" type="email"className="btn form-input" placeholder="Email (Optional)" />
                        </div>
                        <div className="form-item">
                            <input name="contact_phone" type="phone" className="btn form-input" placeholder="Phone (Optional)" />
                        </div>
                        <div className="form-item">
                            <textarea name="contact_message" type="text" className="btn form-input  form-textarea" placeholder="Your message"></textarea>
                        </div>
                        <div className="form-item">
                            <button className="btn form-submit" type="submit">Submit</button>
                        </div>
                    </form>
                    <a className="link return-home" href="/">Return to Home</a>
                </div>
            <Footer/>
        </div>
    );
}

export default Contact;