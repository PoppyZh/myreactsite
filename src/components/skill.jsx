import React, { Component } from 'react'
import SkillBar from 'react-skillbars';



const skills = [
  {type: "R", level: 95},
  {type: "Python", level: 85},
  {type: "Matlab", level: 85},
  {type: "SQL", level: 80},
  {type: "GraphQL", level: 55},
  {type: "JS", level: 45},
  {type: "HTML", level: 35},
];

export default class Skill extends Component {
  render() {
    return (
    <div>
	    <section className="colorlib-skills" data-section="skill">
	        <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">My Skills</span>
                <h2 className="colorlib-heading animate-box"></h2>
              </div>
            </div>
            <SkillBar skills={skills} animationDelay={1000} />
            </div>
        </section>
     </div>
    )
  }
}

