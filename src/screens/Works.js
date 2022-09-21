
import Header from '../components/Header'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import { ProjectCard } from '../components/ProjectCard'


export const Works = () => {
        return (
                <>
                        <Header />
                        <Skills name="WORKS" skillsPage={true} />
                        <div className='works'>
                                <div className="row">
                                        <ProjectCard title={"YOUTUBE CLONE"} link="https://github.com/Olabisim/youtube_clone" linkName="View github"> 
                                                <span>React</span>
                                                <span>Redux</span>
                                                <span>React native navigation</span>
                                        </ProjectCard>
                                        <ProjectCard title={"E-COMMERCE"} link="https://github.com/Olabisim/MERN-ECOMMERCE" linkName="View github" > 
                                                <span>React</span>
                                                <span>Redux</span>
                                                <span>Node</span>
                                        </ProjectCard>
                                        <ProjectCard title={"COVID-19"} link="https://guarded-tundra-34082.herokuapp.com/" linkName="View Live" > 
                                                <span>Sass</span>
                                                <span>Less</span>
                                                <span>Node</span>
                                        </ProjectCard>
                                </div>
                                <div className="row">
                                        <ProjectCard title={"prodhit"} link="https://prodhit.netlify.app/" linkName="View live"> 
                                                <span>React</span>
                                                <span>Metamask connection</span>
                                                <span>Tailwind</span>
                                        </ProjectCard>
                                        <ProjectCard title={"BLOCK-CHAIN KITS"} link="https://mpanew.netlify.app/" linkName="View live" > 
                                                <span>React</span>
                                                <span>PINATA</span>
                                                <span>Metamask</span>
                                        </ProjectCard>
                                        <ProjectCard title={"SIWES-APPLICATION-PORTAL"} link="hhttps://github.com/Olabisim/SIWES-APPLICATION-PORTAL" linkName="View github" > 
                                                <span>PHP</span>
                                                <span>Hack</span>
                                                <span>Css</span>
                                        </ProjectCard>
                                
                                </div>
                                <div className="row">
                                        <ProjectCard title={"LASU FRONT PAGE"} link="https://lasufrontpagedemo.netlify.app/" linkName="View LIVE"> 
                                                <span>React</span>
                                                <span>Redux</span>
                                                <span>React native navigation</span>
                                        </ProjectCard>
                                        <ProjectCard title={"LASU_LIBRARY"} link="https://lasu-library.netlify.app/" linkName="View LIVE" > 
                                                <span>Sass</span>
                                                <span>jquery</span>
                                                <span>svg</span>
                                        </ProjectCard>
                                        <ProjectCard title={"BELLA OLONJE"} link="https://bellaolonje.netlify.app/" linkName="View Live" > 
                                                <span>Sass</span>
                                                <span>Less</span>
                                                <span>Node</span>
                                        </ProjectCard>
                                
                                </div>
                                <div className="row">
                                        <ProjectCard title={"eko-uni-multistep"} link="https://eko-uni-multistep.netlify.app/" linkName="View LIVE"> 
                                                <span>React</span>
                                                <span>jquery</span>
                                                <span>css</span>
                                        </ProjectCard>
                                        <ProjectCard title={"LASU_LIBRARY"} link="https://ekounianime.netlify.app/" linkName="View LIVE" > 
                                                <span>animation</span>
                                                <span>javasript</span>
                                                <span>svg</span>
                                        </ProjectCard>
                                
                                </div>
                        </div>
                        <div style={{marginTop: '10em'}}>
                                <Footer />
                        </div>
                </>
        )
}