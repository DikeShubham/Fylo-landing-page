import React from 'react'
import ProditivePage from './images/illustration-stay-productive.png'

export const Team = () => {
  return (
    <div className="team-page">
      <div className="teamImage" >
        <img src={ProditivePage}/>
      </div>
      <div className="text-container" >
        <h1>Stay productive, wherever you are</h1>
        <p> Never let location be an issue when accessing your files.Fylo has you covered for all of your file storage needs. </p>
        <p>Securely share files and folders with friends, family and collegues for live collaboration. No email attachmets required.</p>
      </div>
    </div>
  )
}
