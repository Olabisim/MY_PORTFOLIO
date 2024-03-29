import { HeaderInn } from '../components/HeaderInn'
import Footer from '../components/Footer'
import { ProjectCard } from '../components/ProjectCard'
import Navigation from '../components/Navigation'
import { Link } from 'react-router-dom'


export const Works = () => {
        return (
                <>
                        <HeaderInn purpose="works" />
                        <Navigation />
                        <Link to="/">
                                <div>
                                        <h2 className='heading-secondary'> GO BACK</h2>
                                </div>
                        </Link>
                        <div className='works'>
                                <div className="row">
                                        <ProjectCard title={"PAYSLICE"} link="https://dev.payslices.com/" linkName="View github"> 
                                                <li>React</li>
                                                <li>Redux</li>
                                                <li>Redux Saga</li>
                                        </ProjectCard>
                                        {/* <ProjectCard title={"YOUTUBE CLONE"} link="https://github.com/Olabisim/youtube_clone" linkName="View github"> 
                                                <li>React</li>
                                                <li>Redux</li>
                                                <li>React native navigation</li>
                                        </ProjectCard> */}
                                        <ProjectCard title={"E-COMMERCE"} link="https://github.com/Olabisim/MERN-ECOMMERCE" linkName="View github" > 
                                                <li>React</li>
                                                <li>Redux</li>
                                                <li>Node</li>
                                        </ProjectCard>
                                        <ProjectCard title={"COVID-19"} link="https://guarded-tundra-34082.herokuapp.com/" linkName="View Live" > 
                                                <li>Sass</li>
                                                <li>Less</li>
                                                <li>Node</li>
                                        </ProjectCard>
                                </div>
                                <div className="row">
                                        <ProjectCard title={"prodhit"} link="https://prodhit.netlify.app/" linkName="View live"> 
                                                <li>React</li>
                                                <li>Metamask connection</li>
                                                <li>Tailwind</li>
                                        </ProjectCard>
                                        <ProjectCard title={"BLOCK-CHAIN KITS"} link="https://mpanew.netlify.app/" linkName="View live" > 
                                                <li>React</li>
                                                <li>PINATA</li>
                                                <li>Metamask</li>
                                        </ProjectCard>
                                        <ProjectCard title={"LOGIN-FRAMER-MOTION"} link="https://login-with-framer-motion.netlify.app/" linkName="View live" > 
                                                <li>react</li>
                                                <li>framer-motion</li>
                                                <li>tailwind</li>
                                        </ProjectCard>
                                
                                </div>
                                <div className="row">
                                        <ProjectCard title={"LASU FRONT PAGE"} link="https://lasufrontpagedemo.netlify.app/" linkName="View LIVE"> 
                                                <li>React</li>
                                                <li>Redux</li>
                                                <li>React native navigation</li>
                                        </ProjectCard>
                                        <ProjectCard title={"LASU_LIBRARY"} link="https://lasu-library.netlify.app/" linkName="View LIVE" > 
                                                <li>Sass</li>
                                                <li>jquery</li>
                                                <li>svg</li>
                                        </ProjectCard>
                                        <ProjectCard title={"BELLA OLONJE"} link="https://bellaolonje.netlify.app/" linkName="View Live" > 
                                                <li>Sass</li>
                                                <li>Less</li>
                                                <li>Node</li>
                                        </ProjectCard>
                                
                                </div>
                                <div className="row">
                                        <ProjectCard title={"eko-uni-multistep"} link="https://eko-uni-multistep.netlify.app/" linkName="View LIVE"> 
                                                <li>React</li>
                                                <li>jquery</li>
                                                <li>css</li>
                                        </ProjectCard>
                                        <ProjectCard title={"EKO-ANIME"} link="https://ekounianime.netlify.app/" linkName="View LIVE" > 
                                                <li>animation</li>
                                                <li>javasript</li>
                                                <li>svg</li>
                                        </ProjectCard>
                                        <ProjectCard title={"SIWES-APPLICATION-PORTAL"} link="https://github.com/Olabisim/SIWES-APPLICATION-PORTAL" linkName="View github" > 
                                                <li>PHP</li>
                                                <li>Hack</li>
                                                <li>Css</li>
                                        </ProjectCard>
                                
                                </div>
                        </div>
                        <div style={{marginTop: '10em'}}>
                                <Footer />
                        </div>
                </>
        )
}