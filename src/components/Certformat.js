
import '../styles/Card.css';

const Certformat = (props) => {
        return (
                <div>
                        <div className='certify_main'>

                                <div className="certify_card">
                                        <img src={props.img1} alt="second_cert" />
                                        <div className="certify_text">
                                        <h1>DEVELOPER</h1>
                                        </div>
                                </div>

                                <div className="certify_card">

                                        <img src={props.img2} alt="first_cert" />

                                        <div className="certify_text">
                                                <h1>DEVELOPER</h1>
                                        </div>
                                </div> 
                                
                                <div className="certify_card">

                                        <img src={props.img3} alt="first_cert" />
                                        
                                        <div className="certify_text">
                                                <h1>DEVELOPER</h1>
                                        </div>
                                </div>
                        
                        </div>
                </div>
        )
}

export { Certformat }