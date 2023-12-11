import React, { Component } from "react";
import unknown from "./newsmonk.jpg";
export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              flexDirection: "flex-end",
              position: "absolute",
              right: 0,
              top: -30,
            }}
          >
            <span className="rounded-pill bg-danger p-2">{source}</span>
          </div>
          <img
            src={!imageUrl ? unknown : imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"> {title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank_" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsItem;
