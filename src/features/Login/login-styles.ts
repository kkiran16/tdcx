import React from 'react'
import styled from 'styled-components/macro'

export const StyledLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vh;
  max-width: 300px;
  padding: 24px;
  margin: 0 1em;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 3px 6px #00000029;
`
export const StyledLoginHeader = styled.div`
  color: #537178;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`

export const StyledInput = styled.input`
  /* width: 240px; */
  margin-bottom: 0.75rem;
  height: 40px;
  font-size: 1rem;
  padding-left: 10px;
  background-color: #eef1f8;
  outline: 0 none;
  border: 0;
  border-radius: 8px;
`
export const StyledButton = styled.button`
  background: #5285ec 0% 0% no-repeat padding-box;
  border-radius: 8px;
  border: 0;
  height: 40px;
  color: #fff;
  font-size: 1rem;
`
