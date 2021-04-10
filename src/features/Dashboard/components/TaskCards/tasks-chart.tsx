import React from 'react'
import { Chart } from 'react-google-charts'
import { StyledCardContainer, StyledChartWrapper } from './task-cards-styles'

type TProps = {
  completedCount: number
  totalCount: number
}

function TasksChart({
  completedCount,
  totalCount
}: TProps): React.ReactElement {
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
            ['Completed', completedCount],
            ['Remaining', totalCount - completedCount]
          ]}
          rootProps={{ 'data-testid': '1' }}
        />
      </StyledChartWrapper>
    </StyledCardContainer>
  )
}

export default TasksChart
