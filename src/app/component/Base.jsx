import React from 'react'
import '@/app/component/css/Base.css';
import Course from './Course';
function Base() {
  return (
    <>
       <br/>
       <hr/>
       <div className="container2">
        <div className ="main">
            <h2>Start learning new skill with your buddies</h2>
            <p>Building a community of people who want to develop their skills by providing best content on the web for free in one place.</p>
            <button>Start Learning Now</button>
        </div>

        <div className="sidebar">
            <img src="/base_1.png" alt="Example" />
        </div>
    </div>
    <Course/>
    </>
  )
}

export default Base;