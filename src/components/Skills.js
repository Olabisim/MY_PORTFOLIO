import React from 'react'
import '../styles/skills.css'

const Skills = ({name, skillsPage}) => {
        return (
                <div className='skill_conatiner'>
  
                        <section className="skills-section my-skills" id="skills">
                        <h1 className="text-skills" data-aos="slide-up">{name}</h1>
                        {/* {
                                skillsPage 
                                &&
                                <img src="https://raw.githubusercontent.com/Sacsam005/my_portfolio_website/0fc1dccb57e4a40e1751d695fbd5b8048fae6471/img/skills.svg" alt="Skills" data-aos="zoom-out" />
                        } */}
                        
                        </section>
                  
                </div>
        )
}

export default Skills;