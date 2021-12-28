const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer>
        <div className="footer-box">
            <strong>{year} | Dan Groleau</strong>
            <a href="contact">Contact</a>
        </div>
    </footer>
  )}

export default Footer;
