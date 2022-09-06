
import '../styles/cardarticle.css'


const Card = (props) => {
        return (
                <div>
                        
                        <div className="cardarticle_container">
                                <div className="cardarticle_card one">
                                                <div className="cardarticle_content">

                                                        <h1 className="cardarticle_numberHI">{props.number}</h1>

                                                        <h1>{props.title}</h1>
                                                        <p className="cardarticle_description">{props.description}</p>
                                                        <a href={`${props.link}`} target="_blank" rel="noreferrer" className="cardarticle_button">VIEW</a>
                                                </div>
                                </div>
                        </div>
                </div>
        )
}


export default Card 