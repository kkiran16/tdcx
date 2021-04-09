import React from 'react'
import styled from 'styled-components/macro'

export const StyledDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12px;

  @media (min-width: 426px) {
    width: 80%;
    margin: 0 auto;
  }
`
export const StyledCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 426px) {
    width: 100%;
    max-width: 1440px;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: space-between;

    & > div {
      border-radius: 12px;
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    & > div {
      margin: 0 auto;
    }
  }
`
