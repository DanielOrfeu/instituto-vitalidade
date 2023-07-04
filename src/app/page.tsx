'use client'
import React from 'react'
import { styled } from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* padding: 6rem; */
  /* min-height: 100vh; */
`

export default function Home() {
  return (
    <Container>
      <h1>Home</h1>
    </Container>
  )
}
