import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Projects from './components/projects'
import Introduction from './components/introduction'
import About from './components/about'
import Experience from './components/timeline'
import Blog from './components/blog'
import Skill from './components/skill'



class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
                    <Skill></Skill>
					<Experience></Experience>
                    <Projects></Projects>

          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
