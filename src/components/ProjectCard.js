import '../styles/projectcard.css'

export const ProjectCard = ({title, children, link, linkName}) => {
        return (
                
                <div className="col-1-of-3 projectcard">
                        <h2>{title}</h2>
                        <div className="card__details">
                        <p>
                                {children}
                        </p>
                        
                        <a href={`${link}`} target='_blank' rel="noreferrer" className="btn btn--white">{linkName}</a>
                        </div>
                </div>
        )
}