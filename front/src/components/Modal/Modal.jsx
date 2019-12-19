import React, { Component, createRef } from "react";

import { ModalTrigger } from "./";
import { ModalContent } from "./";

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.openButtonNode = createRef();
    this.closeButtonNode = createRef();
    this.modalNode = createRef(); 
  }

  toggleScrollLock = () =>
    document.querySelector("html").classList.toggle("overflow-hidden");

  onOpen = () => {
    this.setState({ isOpen: true }, () => this.closeButtonNode.current.focus());
    this.toggleScrollLock();
  };

  onClose = () => {
    this.setState({ isOpen: false }, () => this.openButtonNode.current.focus());
    this.toggleScrollLock();
  };

  onKeyDown = e => e.keyCode === 27 && this.onClose();

  onClickAway = e => {
    const currentNode = this.modalNode.current;
    if (currentNode && currentNode.contains(e.target)) return;
    this.onClose();
  };

  render() {
    const { isOpen } = this.state;
    const { ariaLabel, triggerText, role, children } = this.props;

    return (
      <>
        <ModalTrigger
          onOpen={this.onOpen}
          text={triggerText}
          ref={this.openButtonNode}
        />
        {isOpen && (
          <ModalContent
            role={role}
            content={children}
            ariaLabel={ariaLabel}
            ref={{
              modalRef: this.modalNode,
              buttonRef: this.closeButtonNode
            }}
            onClose={this.onClose}
            onKeyDown={this.onKeyDown}
            onClickAway={this.onClickAway}
          />
        )}
      </>
    );
  }
}



// import React, { Component } from "react";
// import { Form } from "react-bootstrap";

// export class Input extends Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     if (this.props.value !== nextProps.value) return true;

//     return false;
//   }

//   render() {
//     const {
//       name,
//       value,
//       labelName = name.substr(0, 1).toUpperCase() + name.slice(1),
//       onChange,
//       type = "text",
//       className = "",
//       children
//     } = this.props;

//     return (
//       <Form.Row>
//         <Form.Group controlId={`input-${name}`}>
//           <Form.Label>{labelName}</Form.Label>
//           <Form.Control
//             type={type}
//             placeholder={labelName}
//             name={name}
//             value={value}
//             onChange={onChange}
//             className={className}
//           />
//         </Form.Group>
//         {children}
//       </Form.Row>
//     );
//   }
// }
