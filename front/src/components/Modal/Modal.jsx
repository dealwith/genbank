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
        {console.log(this.modalNode)}
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
