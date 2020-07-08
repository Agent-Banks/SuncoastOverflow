import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { Questions } from './Questions'

export function ShowQuestion() {
  const params = useParams()
  const id = params.id

  const [question, setQuestion] = useState({
    title: '',
    body: '',
    tags: '',
    createdAt: '',
    answers: [],
  })

  useEffect(() => {
    const fetchQuestion = () => {
      fetch(`/api/Questions/${id}`)
        .then(response => response.json())
        .then(apiData => setQuestion(apiData))
    }

    fetchQuestion()
  }, [])

  return (
    <div className="specific-question">
      <div className="media mb-5">
        <div className="votesButton">
          <small className="mr-3 pb-1">
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
          <h1 className="mt-0">{question.title}</h1>
          <Link to="user/HackerBoy">
            <strong>HackerBoy</strong>
          </Link>
          <p>{question.createdAt}</p>
          <p>{question.body}</p>
          <p>Tags: {question.tags}</p>
        </div>
      </div>

      <div className="row mb-5">
        {question.answers.length > 0 && (
          <div className="col-12">
            <h3>{question.answers.length} Answers</h3>
            <ul>
              {question.answers.map(answer => (
                <li key={answer.id} className="userAnswer">
                  <div className="votesButton">
                    <small className="mr-3 pb-1">
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
                  <div className="AnswerDetails">
                    <p className="mb-2">
                      <strong>The Gamer Guy</strong>
                      <span className="float-right">{answer.createdAt}</span>
                    </p>
                    <p>{answer.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="card">
        <div className="card-header">Your Answer</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label for="review">Answer</label>
              <textarea type="text" className="form-control" id="review" />
              <small id="summaryHelp" className="form-text text-muted">
                Enter a brief summary of your review. Example:{' '}
                <strong>Great food, good prices.</strong>
              </small>
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
