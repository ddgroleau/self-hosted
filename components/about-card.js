const AboutCard = ({header,subheader,items}) => {
    return (
        <div className="about__card">
                    <div className="about__card-content">
                        <h4 className="about__card-header">{header}</h4>
                        <div className="about__card-subheader">{subheader}</div>
                        <ul className="about__card-items">
                            {
                            items.map(item => {
                                return <li key={item}>{item}</li>
                            })
                            }
                        </ul>
                    </div>
                </div>
    )
}
export default AboutCard;