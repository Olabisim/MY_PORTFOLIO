
import '../styles/cardarticle.css'


const Card = (props) => {
        return (
                <a className="cards__item" href={props.link} target="_blank" rel="noreferrer" >
                        <span className="cards__date">{props.date}</span>
                        <h3 className="cards__title">
                                {props.description}
                        </h3>
                        <span className="cards__more">Read More</span>
                </a>

        )
}


export default Card 