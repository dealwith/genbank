import React, { forwardRef } from "react";
import { Button } from "react-bootstrap";

export const ModalTrigger = forwardRef((props, ref) => {
  const { text, onOpen } = props;

  return (
    <Button onClick={onOpen} ref={ref}>
      {text}
    </Button>
  );
});
