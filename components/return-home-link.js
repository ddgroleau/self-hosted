import Link from "next/link";

const ReturnHomeLink = () => {
    return (
        <div className="return-home__container">
            <Link className="link return-home__link" href="/">Return to Home</Link>
        </div>
    )
}

export default ReturnHomeLink;