import React from 'react'
import Card from './Card'
import Card2 from './Card2'
function Course() {
  return (
    <>
        <div className='one'>
            <Card i="/course/c1.png" str="Well Structured Courses" str2="Building a community of people who want to develop their skills"/>
            <Card2 i="/course/c2.png" str="Get Certificates" str2="Building a community of people who want to develop their skills"/>
            <Card i="/course/c3.png" str="Learn form Best Teachers out There" str2="Building a community of people who want to develop their skills"/>
            
        </div>
    </>
  )
}

export default Course