import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a PhD student from New York University. I study and research quantitative marketing, economics and data science. I love exploring large human behavior dataset and generate insights from them! </p>
                    <p>I have been working on several paper and projects in my PhD. Please do not hesitate to contact if you have any projects to collaborate. I am also looking for fulltime positions starting 2021 May! </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Quantitative Research </h3>
                    <p>I build econometrics model to estimate demand, price sensitivity, and how people make choices. I translate micro behavior data such as eye-movement to actionable insights.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Science</h3>
                    <p>Heavily trained in data science throughout my PhD, I have good grasp over fundamental concepts in Machine Learning and Deep learning. I am interested in applied machine learning casual inference.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Data Management</h3>
                    <p>As a research assistant, I help build a smooth workflow using Hadoop and Hive to facilite analysis on large data such as comscore clickstream data and Kitls Nielsen retail scanner data</p>
                </div>
                </div>
            </div>
            
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Web Development</h3>
                    <p>I build websites and applications using Wordpress, HTML, CSS and React. I learnt React and build this website in a week! </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Unstructured Data</h3>
                    <p>I scrape image, video and text data for my research projects. I analyze biometrics data generated from behavioral labs. Data to me isn't just numbers!</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>Initially started my career as a digital marketers, I am very hands on with growth-hacking, SEO and SEM. </p>
                </div>
                </div>
            </div>
            
            </div>
        </div>
        </section>
      </div>
    )
  }
}
