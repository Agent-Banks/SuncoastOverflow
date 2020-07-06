import React from 'react'
import { Link } from 'react-router-dom'

export function ShowQuestion() {
  return (
    <div className="specific-question">
      <div className="media mb-5">
        <div className="votesButton">
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
              <span className="mr-1" role="img" aria-label="downvote">
                👎🏻
              </span>{' '}
              20
            </button>
          </small>
        </div>
        <div className="media-body">
          <h1 className="mt-0">HTTP GET for Netflix</h1>
          <p>
            {' '}
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
          <Link to="user/HackerBoy">HackerBoy</Link>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <h3>2 Answers</h3>
          <ul className="timeline">
            <li>
              <p className="mb-2">
                The Gamer Guy
                <span className="float-right">21 March, 2014</span>
              </p>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula....
              </p>
            </li>
            <li>
              <p className="mb-2">
                Hacker Man 2018
                <span className="float-right">21 March, 2014</span>
              </p>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula....
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-header">Your Answer</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="summary">Summary</label>
              <input
                type="text"
                className="form-control"
                id="summary"
                aria-describedby="summaryHelp"
              />
              <small id="summaryHelp" className="form-text text-muted">
                Enter a brief summary of your review. Example:{' '}
                <strong>Great food, good prices.</strong>
              </small>
            </div>
            <div className="form-group">
              <label for="review">Review</label>
              <textarea type="text" className="form-control" id="review" />
            </div>
            <button type="submit" className="btn btn-primary">
              Post Your Answer
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
