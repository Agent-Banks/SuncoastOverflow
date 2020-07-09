import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import './custom.scss'

import { Questions } from './pages/Questions'
import { Header } from './components/Header'
import { AddQuestion } from './pages/AddQuestion'
import { ShowQuestion } from './pages/ShowQuestion'
import { NavBar } from './components/NavBar'
import { SignUp } from './pages/Signup'
import { SignIn } from './pages/Signin'

export default function App() {
  const [activeFilter, setActiveFilter] = useState('')
  return (
    <>
      <NavBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <main className="container-fluid p-4">
        <Header />
        <Switch>
          <Route exact path="/">
            <Questions activeFilter={activeFilter} />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/questions/add">
            <AddQuestion />
          </Route>
          <Route path="/questions/:id">
            <ShowQuestion />
          </Route>
        </Switch>
      </main>
    </>
  )
}
