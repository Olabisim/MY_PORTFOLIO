import Skills from "./Skills";
import { SvgContact } from "./SvgContact";


export default function Contact () {
    return (
        <>
        
                <Skills name='notify me' skillsPage={true} />
                <section className="section-booking responsive_flex">
                <div className="row">
                <div className="booking">
                        <div className="booking__form">
                                
                                <form action="#" className="form">
                                        <div className="u-margin-bottom-medium">
                                        <h2 className="heading-secondary" id="special_contact_h2">
                                                WORK?
                                        </h2>
                                        </div>
                                        <div className="form__group">
                                        <input type="text" className="form__input" placeholder="Full name" id="name" required />
                                        <label htmlFor="name" className="form__label">Full name</label>
                                        </div>

                                        <div className="form__group">
                                        <input type="email" className="form__input" placeholder="Email address" id="email" required />
                                        <label htmlFor="email" className="form__label">Email address</label>
                                        </div>

                                        <div className="form__group u-margin-bottom-medium">
                                        <div className="form__radio-group">
                                                <input type="radio" className="form__radio-input" id="small" name="size" />
                                                <label htmlFor="small" className="form__radio-label">
                                                <span className="form__radio-button"></span>
                                                Single project
                                                </label>
                                        </div>

                                        <div className="form__radio-group">
                                                <input type="radio" className="form__radio-input" id="large" name="size" />
                                                <label htmlFor="large" className="form__radio-label">
                                                <span className="form__radio-button"></span>
                                                Join a team
                                                </label>
                                        </div>
                                        </div>
                                        <div className="form__group">
                                        <button className="btn btn-black">Next step &rarr;</button>
                                        </div>
                                </form>


                                <SvgContact />
                        </div>
                        
                </div>
                </div>
                </section>
        </>
    )
}