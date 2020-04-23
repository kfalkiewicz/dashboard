import React from "react";
import { Modal as BoostrapModal } from "react-bootstrap";

const Modal = ({ body, footer, title, ...otherProps }) => (
  <BoostrapModal {...otherProps} size="lg" centered>
    <BoostrapModal.Header closeButton>
      <BoostrapModal.Title>{title}</BoostrapModal.Title>
    </BoostrapModal.Header>
    <BoostrapModal.Body>{body}</BoostrapModal.Body>
    <BoostrapModal.Footer>{footer}</BoostrapModal.Footer>
  </BoostrapModal>
);

export default Modal;
