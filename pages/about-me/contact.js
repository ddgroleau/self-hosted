import Layout from '../layout';
import { useEffect, useState } from 'react';
import ReturnHomeLink from '../../components/return-home-link';
import axios from 'axios';

const Contact = () => {
    const [contactName,setContactName] = useState("");
    const [contactEmail,setContactEmail] = useState("");
    const [contactCompany,setContactCompany] = useState("");
    const [contactMessage,setContactMessage] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            document.getElementById("contact").style="display:none";
        }
    });

    const handleNameChange = event => {
        setContactName(event.target.value)
    };
    const handleEmailChange = event => {
        setContactEmail(event.target.value)
    };
    const handleCompanyChange = event => {
        setContactCompany(event.target.value)
    };
    const handleMessageChange = event => {
        setContactMessage(event.target.value)
    };
    const handleSubmit = async event => {
        event.preventDefault();
        const response = await axios.post(process.env.NEXT_PUBLIC_CONTACT_API,{
                contactName:contactName,
                contactEmail:contactEmail,
                contactCompany:contactCompany,
                contactMessage:contactMessage
            }).catch(()=>console.log("Failed to submit contact message."));
        if (response.status === 201) {
            console.log(response.data);
        }
    };

    return (
        <Layout pageTitle={'Contact | Dan Groleau'} >
            <div className="contact__container">
                <div className="content__container">
                    <form onSubmit={handleSubmit} className="contact__form">
                        <div className="form__item">
                            <h3>Contact</h3>
                        </div>
                        <div className="form__item">
                            <label htmlFor="contactName">Name</label>
                            <input id="contactName" value={contactName} onChange={handleNameChange} type="text" className="btn form__input" placeholder="Name" />
                        </div>
                        <div className="form__item">
                            <label htmlFor="contactEmail">Email</label>
                            <input id="contactEmail" value={contactEmail} onChange={handleEmailChange} type="email"className="btn form__input" placeholder="Email" />
                        </div>
                        <div className="form__item">
                            <label htmlFor="contactCompany">Company</label>
                            <input id="contactCompany" value={contactCompany} onChange={handleCompanyChange} type="phone" className="btn form__input" placeholder="Company (Optional)" />
                        </div>
                        <div className="form__item">
                            <label htmlFor="contactMessage">Email</label>
                            <textarea id="contactMessage" value={contactMessage} onChange={handleMessageChange} type="text" className="btn form__input  form__textarea" placeholder="Your message"></textarea>
                        </div>
                        <div className="form__disclaimer">
                            <i>By submitting this from, you agree to our <a href="privacy">Privacy Policy and Terms of Use.</a></i>
                        </div>
                        <div className="form__item">
                            <button className="btn form__submit" type="submit">Submit</button>
                        </div>
                    </form>
                    <ReturnHomeLink/>
                </div>
            </div>
        </Layout>
    );
}

export default Contact;