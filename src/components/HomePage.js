import "./Home.css"
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import i404 from './img/404_notfound.jpg'
import Newsdetails from './Newsdetails'
import { Link } from "react-router-dom"

import insta from './img/insta.png'
import github from './img/github.png'
import lkin from './img/linkedin.png'

export class HomePage extends Component {
  // news loaders here
  static defaultProps = {
    country: 'in',
    category: 'general',
    pageSize: 10
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0
    }
  }

  async updatePage() {
      let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKEY}&page=${this.state.page}&pageSize=${this.props.pageSize}` //to be used for search filtrations
      let array = await fetch(URL)
      let stream = await array.json()
      // console.log(stream)
      this.setState({
        totalResults: stream.totalResults,
        articles: stream.articles,
      })
    };

  async componentDidMount() {
      await this.updatePage()
    }


    render() {
      return (
        <>
          <div className="contain">
            <div className="left">
              <h3 className="trend">Trending</h3>
              <div className="caro">
                {/* carousel */}
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {this.state.articles.slice(0, 3).map((element) => {
                      return <div className="carousel-item active" key={element.url} data-bs-interval="2000">
                        <img src={!element.urlToImage ? i404 : element.urlToImage} className="d-block c-img" alt="..." />
                        <div className="carousel-caption">
                          <div className="tag">{element.source ? element.source['name'] : 'unknown'}</div>
                          <h4 className="title">{element.title}</h4>
                        </div>
                      </div>
                    })}
                  </div>

                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              {/* top headlines */}
              <h3 className="trend" style={{ marginTop: '2rem' }}>Top headlines</h3>
              <div className="headline">
                {this.state.articles.slice(11, 20).map((element) => {
                  return <div className="headline-n my-3" key={element.url}>
                    <Newsdetails title={element.title} source={element.source ? element.source['name'] : 'unknown'} link={element.url} img={element.urlToImage} author={element.author ? element.author : 'unknown'} publish={element.publishedAt} />
                  </div>
                })}
              </div>
            </div>
            {/* category wise 1st news */}
            <div className="right">
              <h4 className="title">Top in Categories</h4>
              <hr className="line" />
              {/* category card mapping*/}
              <div className="categ">
                {this.state.articles.slice(3, 11).map((element) => {
                  return <div className="card card-m" key={element.url}>
                    <img src={!element.urlToImage ? i404 : element.urlToImage} className="cat-img" alt="..." />
                    <div className="carousel-caption" style={{ padding: '0 .5rem 0 .5rem' }}>
                      <div className="tag">{element.source ? element.source['name'] : 'unknown'}</div>
                      <h6 className="title">{element.title.substr(0, 50) + "..."}</h6>
                    </div>
                  </div>
                })}
              </div>
              <div className="newsletter">
                <div className="">
                  <h4 style={{ fontWeight: 'bold' }}>Newsletter</h4>
                  <p className="content" >Subscribe to get interested article at your fingertip</p>
                  <input type="email" className="email" name='username' placeholder='email' />
                  <p className="content" >No spam, unsubscribe later</p>
                  <button className="email btn">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
          {/* footer */}
          <div className="footer">
            <div className="contain" style={{ transform: 'translateY(0)' }}>
              <div className="left" >
                <h3 style={{ fontWeight: 'bold' }}>About KhojKhabar</h3>
                <p className="content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident facere eius dolor minima delectus assumenda quaerat, reiciendis asperiores, ad veritatis illo. Debitis, aut explicabo. Nesciunt et quasi dolore natus ullam iusto obcaecati at sequi aliquid aut modi repudiandae hic deserunt eius dolores quo accusantium quod expedita quisquam inventore officiis soluta, molestias, harum sint. Soluta suscipit, aliquam, alias nihil eaque repellat odio placeat reiciendis dolorem odit, voluptate dolorum ipsum quis architecto quaerat cumque qui doloribus ea debitis distinctio quia voluptates. Temporibus obcaecati ea quo necessitatibus iusto neque non. Rerum, facere qui odio, odit et, ut laborum possimus dolorum cupiditate eligendi aperiam.</p>
              </div>
              <div className="right" >
                <span style={{ fontWeight: 'bold' }}>Popular Categories</span> <br />
                <Link to="/science" className="item">Science</Link> <br />
                <Link to="/sports" className="item">Sports</Link> <br />
                <Link to="/business" className="item">Buissness</Link> <br />
                <Link to="/technology" className="item">Tech</Link> <br />
                <Link to="/entertainment" className="item">Entertainment</Link> <br />
                <Link to="/health" className="item">Health</Link> <br />
                <div style={{ marginTop: '1rem' }}>
                  <span style={{ fontWeight: 'bold' }}>Follow me on</span> <br />
                  <a rel="noreferrer" target='_blank' href="https://github.com/Prashu-01" className='link'><img src={github} alt="github" className="icon mx-1" /></a>
                  <a rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/prashu-verma-517890227/" className='link'><img src={lkin} alt="linkedIn" className="icon mx-1" /></a>
                  <a rel="noreferrer" target='_blank' href="/kuch_nahi_abhi" className='link'><img src={insta} alt="insta" className="icon mx-1" /></a>
                </div>
              </div>

            </div>
            <h6 style={{ textAlign: 'center' }}>Designed by <a href="https://github.com/Prashu-01">@Prashu</a>. All copyright reserved</h6>
          </div>
        </>

      )
    }
  }

export default HomePage;
