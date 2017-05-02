import React from 'react'
import { render } from 'react-dom'
import Title from 'react-title-component'

import Main from './components/Main'
import Header from './components/Header'

const App = () => {
  return (
    <Main>
      <Title render='SlideBar' />
      <Header>SlideBar Configuration</Header>
    </Main>
  )
}

render(<App />, document.getElementById('react-root'))
