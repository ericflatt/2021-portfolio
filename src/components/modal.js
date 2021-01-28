import React, { useState } from "react"

import Modal from "react-modal"
import "../styles/modal.scss"

import flux from "../images/flux.png"
import startup from "../images/startup.png"
import comotion from "../images/comotion.png"
import comotionLastYear from "../images/comotionLastYear.png"

Modal.setAppElement(document.getElementById("root"))

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="App">
      <a className="modalButton" onClick={toggleModal}>
        Open modal
      </a>

      <Modal
        // className="mymodal"
        overlayClassName="overlay"
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        ariaHideApp={false}
      >
        <div className="modal-content">
          <div className="modal-container">
            <img className="modal-image" src={flux} alt="flux" />
            <p className="modal-text">SCAD FLUX</p>
          </div>
        </div>
        <div className="modal-content">
          <div className="modal-container">
            <img className="modal-image" src={startup} alt="flux" />
            <p className="modal-text">SCAD StartUp</p>
          </div>
        </div>
        <div className="modal-content">
          <div className="modal-container">
            <img className="modal-image" src={comotion} alt="flux" />
            <p className="modal-text">SCAD Comotion</p>
          </div>
        </div>
        <div className="modal-content">
          <div className="modal-container">
            <img className="modal-image" src={comotionLastYear} alt="flux" />
            <p className="modal-text">SCAD Comotion 2020</p>
          </div>
        </div>
        <a className="modal-close" onClick={toggleModal}>X</a>
      </Modal>
    </div>
  )
}
