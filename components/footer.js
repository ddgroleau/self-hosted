const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer>
        <div className="footer-box">
            <strong>{year} | Dan Groleau</strong>
            <a className="privacy-text" href="privacy">Privacy Policy and Terms of Use</a>
        </div>
    </footer>
  )}

export default Footer;
