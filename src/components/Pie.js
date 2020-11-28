import React, { Component } from 'react'
import './Pie.css'

class Pie extends Component {

  state= {
    1: {
      question: 'Health',
      rotate: 'rotate(0.0000, 220, 220)',
      fill: '#9d228c',
      transform: '0.1'
    },
    2: {
      question: 'Love Life',
      rotate: 'rotate(45.0000, 220, 220)',
      fill: '#08bef2',
      transform: '0.1'
    },
    3: {
      question: 'Career',
      rotate: 'rotate(90.0000, 220, 220)',
      fill: '#b1e12f',
      transform: '0.1'
    },
    4: {
      question: 'Personal Growth',
      rotate: 'rotate(135.0000, 220, 220)',
      fill: '#181e5c',
      transform: '0.1'
    },
    5: {
      question: 'Money Freedom',
      rotate: 'rotate(180.0000, 220, 220)',
      fill: '#c3c47f',
      transform: '0.1'
    },
    6: {
      question: 'Friends and Family',
      rotate: 'rotate(225.0000, 220, 220)',
      fill: '#16a54b',
      transform: '0.1'
    },
    7: {
      question: 'Fun and Recreation',
      rotate: 'rotate(270.0000, 220, 220)',
      fill: '#91b9da',
      transform: '0.1'
    },
    8: {
      question: 'Physical Environment',
      rotate: 'rotate(315.0000, 220, 220)',
      fill: '#ccc0d0',
      transform: '0.1'
    },
  }

  render() {
    return (
      <div className="Content">
        <div className="QuestionBlock">
          <ul>
            <li>Question</li>
          </ul>
        </div>
      <div className="ChartBlock">
        <div className="ChartPie" style={{width: '450px'}}>
          Chart here
        </div>
      </div>
      </div>
    )
  }
}

export default Pie
