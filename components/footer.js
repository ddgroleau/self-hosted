const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer>
        <div className="footer__content">
            <strong>{year} | Dan Groleau</strong>
            <a className="footer__privacy" href="privacy">Privacy Policy and Terms of Use</a>
        </div>
    </footer>
  )}

export default Footer;
