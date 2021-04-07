import React from 'react'
import styled from 'styled-components/macro'

export const StyledHomeContainer = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`
export const StyledContentWrapper = styled.div`
  margin-top: 72px;
`
