import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { Questions } from './Questions'
import format from 'date-fns/format'

const dateFormat = `EEEE, MMMM do, yyyy 'at' h:mm aaa`

export function ShowQuestion() {
  const params = useParams()
  const id = parseInt(params.id)

  const [question, setQuestion] = useState({
    title: '',
    body: '',
    tags: '',
    createdAt: '',
    answers: [],
  })

  const [newAnswer, setNewAnswer] = useState({
    body: '',
    questionId: id,
  })

  const fetchQuestion = () => {
    fetch(`/api/Questions/${id}`)
      .then(response => response.json())
      .then(apiData => setQuestion(apiData))
  }

  useEffect(() => {
    fetchQuestion()
  }, [])

  const handleNewAnswerFieldChange = event => {
    const whichFieldChanged = event.target.id
    const value = event.target.value
    setNewAnswer({ ...newAnswer, [whichFieldChanged]: value })
  }

  const handleNewAnswerSubmit = event => {
    event.preventDefault()

    fetch(`/api/Answers`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newAnswer),
    })
      .then(response => response.json)
      .then(apiResponse => {
        fetchQuestion()
        setNewAnswer({ ...newAnswer, body: '' })
      })
  }

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
          <h2 className="mt-0">{question.title}</h2>
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
                    <p className="postedAnswerTitle mb-2">
                      <span>
                        {format(new Date(answer.createdAt), dateFormat)}
                      </span>
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
          <form onSubmit={handleNewAnswerSubmit}>
            <div className="form-group">
              <label for="answer">Answer</label>
              <textarea
                type="text"
                className="form-control"
                id="body"
                value={newAnswer.body}
                onChange={handleNewAnswerFieldChange}
              />
              <small id="summaryHelp" className="form-text text-muted">
                Enter a brief summary of your Answer.
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
