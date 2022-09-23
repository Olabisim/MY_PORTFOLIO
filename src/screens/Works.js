
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
                                                <li>React</li>
                                                <li>Redux</li>
                                                <li>React native navigation</li>
                                        </ProjectCard>
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
                                        <ProjectCard title={"SIWES-APPLICATION-PORTAL"} link="hhttps://github.com/Olabisim/SIWES-APPLICATION-PORTAL" linkName="View github" > 
                                                <li>PHP</li>
                                                <li>Hack</li>
                                                <li>Css</li>
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
                                
                                </div>
                        </div>
                        <div style={{marginTop: '10em'}}>
                                <Footer />
                        </div>
                </>
        )
}