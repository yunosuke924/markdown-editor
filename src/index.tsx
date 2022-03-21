import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

const Header = styled.h1`
color: #478657;
display: flex;
justify-content: center;
margin-top: 100px;
`

const Main = (<Header>最強のMarkdown Editor</Header>)
render(Main, document.getElementById('app'))