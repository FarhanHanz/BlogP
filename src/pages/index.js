import React, { Fragment } from "react"
import { Link } from "gatsby"
import Usage from "./about.mdx"
import "./index.css"

const Index = () => {
    return(
        <Fragment>
            <div id="header">
                <h1 id="logo">Tech Blog Demo</h1>
                <div className="gatsby-logo">
                    <svg role="img" fill="rebeccapurple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Gatsby icon</title><path d="M12.001.007C5.326.007.007 5.326.007 12S5.326 23.995 12 23.995s11.994-5.319 11.994-11.994S18.676.007 12.001.007zM2.614 12.105l9.283 9.283c-5.111 0-9.283-4.172-9.283-9.283zm11.473 9.074L2.823 9.915C3.76 5.743 7.516 2.614 12 2.614a9.476 9.476 0 0 1 7.614 3.86L18.259 7.62a7.657 7.657 0 0 0-6.362-3.337A7.555 7.555 0 0 0 4.7 9.393l9.804 9.805c2.4-.835 4.276-2.92 4.798-5.424h-4.068v-1.773h6.154c0 4.485-3.129 8.24-7.301 9.178z"/></svg>
                </div>
            </div>
            <div className="container">
                <div className="col">
                    <Link to="/blog" style={{textDecoration: `none`}}>
                        <div className="card">
                            <div className="title">
                                <h2 id="tech">Tech</h2><h2 id="blog"> Blog</h2>
                            </div>
                            <p id="tblink">Tech Blog theme demo</p>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <a href="https://www.gatsbyjs.org/docs/" style={{textDecoration: `none`, color: `rebeccapurple`}}>
                        <div className="card">
                            <div id="gatsby" className="title">
                                <h2>Gatsby</h2>
                            </div>
                            <p>Official Gatsby Docs</p>
                            <div className="gatsby-logo">
                                <svg role="img" fill="rebeccapurple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Gatsby icon</title><path d="M12.001.007C5.326.007.007 5.326.007 12S5.326 23.995 12 23.995s11.994-5.319 11.994-11.994S18.676.007 12.001.007zM2.614 12.105l9.283 9.283c-5.111 0-9.283-4.172-9.283-9.283zm11.473 9.074L2.823 9.915C3.76 5.743 7.516 2.614 12 2.614a9.476 9.476 0 0 1 7.614 3.86L18.259 7.62a7.657 7.657 0 0 0-6.362-3.337A7.555 7.555 0 0 0 4.7 9.393l9.804 9.805c2.4-.835 4.276-2.92 4.798-5.424h-4.068v-1.773h6.154c0 4.485-3.129 8.24-7.301 9.178z"/></svg>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div id="markdown">
                <Usage />
            </div>
            
        </Fragment>
    )
}

export default Index