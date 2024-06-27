import React, { Component } from 'react'
import images from './news.jpg'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
            <span className="badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <img src={imageUrl ? imageUrl : images} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
