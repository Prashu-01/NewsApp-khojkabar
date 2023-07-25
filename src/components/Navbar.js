import React, { Component } from 'react'
import {Link} from "react-router-dom"
import insta from './img/insta.png'
import github from './img/github.png'
import lkin from './img/linkedin.png'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary px-4">
                <div className="container-fluid">
                    <div className="navbar-brand" href="/">KhojKhabar</div> { /* GetNews*/ }
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto justify-content-end">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/business">Buissness</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="icon-link">
                        <a rel="noreferrer" target='_blank' href="https://github.com/Prashu-01" className='link'><img src={github} alt="github" className="icon mx-1"    /></a>
                        <a rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/prashu-verma-517890227/" className='link'><img src={lkin} alt="linkedIn" className="icon mx-1" /></a>
                        <a rel="noreferrer" target='_blank' href="/kuch_nahi_abhi" className='link'><img src={insta} alt="insta" className="icon mx-1" /></a>
                    </div>
                    <button className="navbar-toggler" style={{padding:'0 .4rem 0 .4rem'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="navbar-toggler-icon fa-sharp fa-regular fa-bars"></i>
                    </button>
                </div>
            </nav>
        )
    }
}

export default Navbar
