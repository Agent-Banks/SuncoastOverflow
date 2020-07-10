import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { authHeader } from '../auth'

export function AddQuestion() {
  const history = useHistory()

  const [errorMessage, setErrorMessage] = useState()
  const [newQuestion, setNewQuestion] = useState({
    title: '',
    body: '',
    tags: '',
  })

  const handleFormFieldChange = event => {
    const whichFieldChanged = event.target.id
    const newValue = event.target.value
    setNewQuestion({
      ...newQuestion,
      [whichFieldChanged]: newValue,
    })
  }

  const handleFormSubmit = event => {
    event.preventDefault()

    fetch('/api/Questions', {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(newQuestion),
    })
      .then(response => {
        if (response.status === 401) {
          return { status: 401, errors: { login: 'Not Authorized ' } }
        } else {
          return response.json()
        }
      })
      .then(apiData => {
        if (apiData.status === 201) {
          history.push('/')
        } else {
          const newMessage = Object.values(apiData.errors).join(' ')
          setErrorMessage(newMessage)
        }
      })
  }
  return (
    <div className="card">
      <div className="card-header">Ask A Public Question</div>
      <div className="card-body">
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={newQuestion.title}
              onChange={handleFormFieldChange}
            />
            <small id="titleHelp" className="form-text text-muted">
              Be specific and imagine you’re asking a question to another person
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea
              type="text"
              className="form-control"
              id="body"
              value={newQuestion.body}
              onChange={handleFormFieldChange}
            />
            <small id="bodyHelp" className="form-text text-muted">
              Include all the information someone would need to answer your
              question
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              className="form-control"
              id="tags"
              value={newQuestion.tags}
              onChange={handleFormFieldChange}
            />
            <small id="tagHelp" className="form-text text-muted">
              Add up to 5 tags to describe what your question is about
            </small>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
