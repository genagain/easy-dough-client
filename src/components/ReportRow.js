import React from 'react'
import { formatAmount } from '../utils'

function ReportRow({ label, actualAmount, expectedAmount, difference}) {
  const intViewportWidth = window.innerWidth
  const rowWidth = intViewportWidth > 1000 ? 1000 : intViewportWidth * 0.8
  const rowHeight = intViewportWidth > 1000 ? 25 : 50

  const formattedActualAmount = formatAmount(actualAmount)
  const formattedExpectedAmount = formatAmount(expectedAmount)
  const formattedDifference = formatAmount(difference)

  let bar;
  let spentVerb;

  if (actualAmount <= expectedAmount) {
    const actualWidth = actualAmount / expectedAmount * rowWidth
    spentVerb = 'left'
			bar = (
      <svg  width={rowWidth} height={rowHeight}>
				<rect data-testid="gray-bar" height={rowHeight} width={rowWidth} style={{
				fill: 'rgb(229, 231, 235)'
				}}></rect>
				<rect data-testid="green-bar" height={rowHeight} width={actualWidth} style={{
				fill: '#048c71'
				}}></rect>
			</svg>
      )
  } else {
    spentVerb = 'over'
    bar = (
			<svg width={rowWidth} height={rowHeight}>
				<rect data-testid="gray-bar" height={rowHeight} width={rowWidth} style={{
				fill: 'rgb(229, 231, 235)'
				}}></rect>
				<rect data-testid="red-bar" height={rowHeight} width={rowWidth} style={{
				fill: '#d72229'
				}}></rect>
			</svg>
    )
  }

  return ( 
    <div className="m-auto p-2">
      <h1 className="text-5xl lg:text-xl">{label}</h1>
			<div className="text-3xl lg:text-base">Spent ${formattedActualAmount} of ${formattedExpectedAmount} </div>
			<div className="flex flex-col lg:flex-row lg:items-center">
				<div className="lg:flex-grow">
				{ bar }
				</div>
			<div className="text-3xl lg:text-lg">${formattedDifference} {spentVerb}</div>
			</div>
    </div>
  )
}

export default ReportRow
