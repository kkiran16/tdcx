import React from 'react'
import styled from 'styled-components/macro'

export const StyledCardContainer = styled.div`
  height: 158px;
  width: 320px;
  max-width: 320px;
  padding: 24px;
  background: #ffffff 0% 0% no-repeat padding-box;
`

export const StyledTaskCompletedHeader = styled.div`
  font-size: 1.25rem;
  color: #537178;
`

export const StyledCompleted = styled.div`
  font-size: 4rem;
  color: #5285ec;

  &::after {
    position: relative;
    content: '${(props) => props.totalTasks}';
    /* content: '/20'; */
    /* top: -27px;
    left: 30px;*/
    color: #8f9ea2;
    font-size: 1.25rem;
    /* padding-left: 3px; */
  }
`

export const StyledTotal = styled.div``

export const StyledCompletedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const StyledLatestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const StyledListWrapper = styled.div`
  color: #8f9ea2;
  font-size: 0.85rem;

  li {
    padding-bottom: 10px;
  }
`
export const StyledChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
