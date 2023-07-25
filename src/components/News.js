import React, { Component } from 'react'
import Newsdetails from './Newsdetails'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component{
  static defaultProps={
    country: 'in',
    category: 'general',
    pageSize: 20
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
    this.props.setProgress(10)  //set progress for top LoadingBar
    let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKEY}&page=${this.state.page}&pageSize=${this.props.pageSize}` //to be used for search filtrations
    let array = await fetch(URL)
    this.props.setProgress(40)
    let stream = await array.json()
    this.props.setProgress(60)
    // console.log(stream)
    this.setState({
      totalResults: stream.totalResults,
      articles: stream.articles,
      // page: this.state.page
    })
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.updatePage()
  }

  fetchMoreData = async () => {
    let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKEY}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}` //to be used for search filtrations
    this.setState({ page: this.state.page + 1 })
    let array = await fetch(URL)
    let stream = await array.json()
    
    this.setState({
      articles: this.state.articles.concat(stream.articles),
      totalResults: stream.totalResults,
    })
  }
  
  render() {
    return (
      <>
        <h2 className="heading" style={{ fontWeight: '600',marginTop:'3rem' }}>Current Headlines</h2>
        {/* infinite scroll */}
        <InfiniteScroll className='infinite'
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h5>Loading...</h5>}
        >
          <div className='container'>
            <div className="row">
              {/* map function used to iterate the articles array */}
              {this.state.articles.map((element) => { 
                return <div className="col-md-4 my-3" key={element.url}>
                  <Newsdetails title={element.title} desc={element.description ? element.description : element.content} source={element.source ? element.source['name'] : 'unknown'} link={element.url} img={element.urlToImage} author={element.author ? element.author : 'unknown'} publish={element.publishedAt} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* next prev button */}
        {/* <div className="btnn">
          <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrev} className="my-3 btn btn-secondary">&larr; Prev</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNext} className="mx-5 my-3 btn btn-secondary">Next &rarr;</button>
        </div> */}
      </>
    )
  }
}

export default News

