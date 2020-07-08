import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function SingleQuestionForList(props) {
  return (
    <Link to="/questions/42" className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{props.question.title}</h5>
        <small>12 Answers</small>
      </div>
      <p className="mb-1">70 Votes</p>
      <small className="mr-3">
        <button
          className="btn btn-success btn-sm"
          onClick={event =>
            props.handleVote(event, props.question.id, 'upvote')
          }
        >
          <span className="mr-2" role="img" aria-label="upvote">
            👍🏻
          </span>
          {props.question.upvoteCount}
        </button>
      </small>
      <small className="mr-3">
        <button
          className="btn btn-danger btn-sm"
          onClick={event =>
            props.handleVote(event, props.question.id, 'downvote')
          }
        >
          <span className="mr-2" role="img" aria-label="downvote">
            👎🏻
          </span>{' '}
          {props.question.downvoteCount}
        </button>
      </small>
    </Link>
  )
}

export function Questions(props) {
  const [questions, setQuestions] = useState([])

  const handleVote = (event, id, type) => {
    event.preventDefault()
    const url = `/api/QuestionVotes/${id}/${type}`
    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
    }).then(() => {
      console.log('Need to reload the questions')
    })
  }

  useEffect(() => {
    // let url = '/api/Questions'

    // if (props.activeFilter !== '') {
    //   url = `/api/Questions?filter=${props.activeFilter}`
    // }

    const url =
      props.activeFilter.length === 0
        ? `/api/Questions`
        : `/api/Questions?filter=${props.activeFilter}`

    fetch(url)
      .then(response => response.json())
      .then(apiData => {
        setQuestions(apiData)
      })
  }, [props.activeFilter])

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {questions.length} Questions Found
          </li>
        </ol>
      </nav>
      <div className="list-group">
        {questions.map(question => (
          <SingleQuestionForList
            key={question.id}
            question={question}
            handleVote={handleVote}
          />
        ))}
      </div>
    </>
  )
}
