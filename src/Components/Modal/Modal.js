// import React from 'react';
// import './Modal.css'

// export default function Modal({imgSrc, closeModal, closeModalByEsc}) {
//     return (
//         <div className="Overlay" onClick={closeModal}>
//             <div className="Modal">
//                 <img src={imgSrc} alt="" />
//             </div>
//         </div>
//     )
// }
import React, { Component } from 'react'
import './Modal.css'


export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleDidMount)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleDidMount)
    }
    handleDidMount = (e) => {
        if (e.code === 'Escape') {
                this.props.closeModalByEsc();
            }
    }
    
    
    render() {
        return (
             <div className="Overlay" onClick={this.props.closeModal}>
             <div className="Modal">
                 <img src={this.props.imgSrc} alt="" />
             </div>
        </div>
        )
    }
}
