import React from 'react'
import { Link } from 'react-router-dom'

export function Questions() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            2 Questions Found
          </li>
        </ol>
      </nav>
      <div className="list-group">
        <Link
          to="/questions/42"
          className="list-group-item list-group-item-action"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">
              How to access the correct `this` inside a callback?
            </h5>
            <small>12 Answers</small>
          </div>
          <p className="mb-1">70 Votes</p>
          <small className="mr-3">
            <button className="btn btn-success btn-sm">
              <span className="mr-2" role="img" aria-label="upvote">
                👍🏻
              </span>
              50
            </button>
          </small>
          <small className="mr-3">
            <button className="btn btn-danger btn-sm">
              <span className="mr-2" role="img" aria-label="downvote">
                👎🏻
              </span>{' '}
              20
            </button>
          </small>
        </Link>

        <Link
          to="/questions/42"
          className="list-group-item list-group-item-action"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">
              What is the difference between client-side and server-side
              programming?
            </h5>
            <small>4 Answers</small>
          </div>
          <p className="mb-1">90 Votes</p>
          <small className="mr-3">
            <button className="btn btn-success btn-sm">
              <span className="mr-2" role="img" aria-label="upvote">
                👍🏻
              </span>
              85
            </button>
          </small>
          <small className="mr-3">
            <button className="btn btn-danger btn-sm">
              <span className="mr-2" role="img" aria-label="downvote">
                👎🏻
              </span>{' '}
              5
            </button>
          </small>
        </Link>
      </div>
    </>
  )
}
