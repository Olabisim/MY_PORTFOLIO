import '../styles/projectcard.css'

export const ProjectCard = ({title, children, link, linkName}) => {
        return (
                
                <div className="col-1-of-3 projectcard">
                        <h2 className='heading-secondary heading_title  '>{title}</h2>
                        <div className="card__details">
                        <ul>
                                {children}
                        </ul>
                        
                        <a href={`${link}`} target='_blank' rel="noreferrer" className="btn btn--white">{linkName}</a>
                        </div>
                </div>
        )
}

export const ProjectCard2 = ({title, children, link, linkName}) => {
        return (
                
                <div className="projectcard" style={{width: '300px', height: '400px', margin: '10px'}}>
                        <h2 className='heading-secondary heading_title  '>{title}</h2>
                        <div className="card__details">
                        <ul>
                                {children}
                        </ul>
                        
                        <a href={`${link}`} target='_blank' rel="noreferrer" className="btn btn--white">{linkName}</a>
                        </div>
                </div>
        )
}