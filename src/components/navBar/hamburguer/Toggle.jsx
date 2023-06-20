import React from 'react'
import { useState } from 'react';
import './Toggle.css'

export const Toggle = () => {

  return (
    <div>
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="toggle">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </label>
    </div>

  )
}