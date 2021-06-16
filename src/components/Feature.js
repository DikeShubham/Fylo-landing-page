import React from 'react'
// access anywhere icon
import AccessAnywhere from "./icons/icon-access-anywhere.svg"
// Security icon
import Security from './icons/icon-security.svg';
// Any File icon
import AnyFile from './icons/icon-any-file.svg';
// collaboration icon
import Collaboration from './icons/icon-collaboration.svg';
// css file
import "./style/components.css"
// images
export const Feature = () => {
  return (
    <div className="feature-page">
      <div className="features-btn">
        <img src={AccessAnywhere}/>
        <h1>Access your files, anywhere</h1>
        <p>The ability to use a smartphone, table, or computer to access your account means your files follow you everywhere.</p>
      </div>
      <div className="features-btn">
      <img src={Security}/>
        <h1>Security you can trust</h1>
        <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
      </div>
      <div className="features-btn">
      <img src={AnyFile}/>
        <h1>Store any type of file</h1>
        <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
      </div>
      <div className="features-btn">
      <img src={Collaboration}/>
        <h1>Real-time collaboration</h1>
        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email  attachmets required.</p>
      </div>
    </div>
  )
}
