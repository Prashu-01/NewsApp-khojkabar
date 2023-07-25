import React, { Component } from 'react'

export class Newsdetails extends Component {
  render() {
    let { title, desc, source, link, img, author, publish } = this.props
    return (
      <div className="card">
        <img src={!img? "https://marketplace.canva.com/EAE-rJIvbB8/1/0/1600w/canva-animated-breaking-news-intro-youtube-iLFaWSSGOzg.jpg" :img} className="card-img" alt="error" />
        <small className='publish'><b style={{color: 'red'}}>{source}</b> - {new Date(publish).toGMTString().slice(0,17)}</small>
        <h5 className='title' style={{color:'#2d2d2d'}}><b>{title}</b></h5>
        <div className="card-body my-2">
          <p className="card-text">{desc} <a href={link} rel="noreferrer" target="_blank" style={{ textDecoration: 'none' }}>..full article</a><br/></p>
        <p className="card-text">
            Author: {author}
        </p>
        </div>
        {/* <hr style={{width: '80%', margin: 'auto'}}/> */}
      </div>

    )
  }
}

export default Newsdetails
