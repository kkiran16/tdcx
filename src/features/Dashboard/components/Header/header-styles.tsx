import React from 'react'
import styled from 'styled-components/macro'

/* export const StyledHeaderContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 123px;
  box-shadow: 0px 3px 6px #00000029;
  background: #ffffff 0% 0% no-repeat padding-box;
  height: 72px;
` */

export const StyledHeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 72px;
  z-index: 100;
  display: flex;
  /* width: 100%; */
  box-shadow: 0px 3px 6px #00000029;
  background: #ffffff 0% 0% no-repeat padding-box;
`
export const StyledHeaderWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #6d8187;
  font-size: 1rem;
`

export const StyledIcon = styled.div`
  border-radius: 50%;
  border: 1px solid #6d8187;
  padding: 5px;
`

export const StyledLogout = styled.div`
  cursor: pointer;
`
