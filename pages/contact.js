import Layout from '../pages/layout';
import { useEffect } from 'react';
import ReturnHomeLink from '../components/return-home-link';

const Contact = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            document.getElementById("contact").style="display:none";
        }
    });
    return (
        <Layout pageTitle={'Contact | Dan Groleau'} >
            <div className="contact__container">
                <div className="content__container">
                    <form method="POST" action="" className="contact__form">
                        <div className="form__item">
                            <h3>Contact</h3>
                        </div>
                        <div className="form__item">
                            <label for="contactName">Name</label>
                            <input id="contactName" name="contactName" type="text" className="btn form__input" placeholder="Name" />
                        </div>
                        <div className="form__item">
                            <label for="contactEmail">Email</label>
                            <input id="contactEmail" name="contactEmail" type="email"className="btn form__input" placeholder="Email" />
                        </div>
                        <div className="form__item">
                            <label for="contactCompany">Company</label>
                            <input id="contactCompany" name="contactCompany" type="phone" className="btn form__input" placeholder="Company (Optional)" />
                        </div>
                        <div className="form__item">
                            <label for="contactMessage">Email</label>
                            <textarea id="contactMessage" name="contactMessage" type="text" className="btn form__input  form__textarea" placeholder="Your message"></textarea>
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