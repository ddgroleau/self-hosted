import Link from "next/link";

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer>
        <div className="footer__content">
            <strong>{year} | Dan Groleau</strong>
            <Link className="footer__privacy" href="/privacy">Privacy Policy and Terms of Use</Link>
        </div>
    </footer>
  )}

export default Footer;
