import React from 'react'
import { Chart } from 'react-google-charts'
import { StyledCardContainer, StyledChartWrapper } from './task-cards-styles'

function TasksChart() {
  return (
    <StyledCardContainer>
      <StyledChartWrapper>
        <Chart
          width="290px"
          height="120px"
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Task', 'Per Day'],
            ['Completed', 5],
            ['Total', 20]
          ]}
          rootProps={{ 'data-testid': '1' }}
        />
      </StyledChartWrapper>
    </StyledCardContainer>
  )
}

export default TasksChart
