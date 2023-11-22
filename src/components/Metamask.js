import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ethers } from 'ethers';

function MetamaskButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const connectMetamask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        console.log(address);
      } catch (err) {
        console.error(err);
      }
    } else {
      handleShow();
    }
  };

  return (
    <>
      <Button size="sm" variant="outline-secondary" onClick={connectMetamask}>
        Connect 🦊
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Metamask no instalado</Modal.Title>
        </Modal.Header>
        <Modal.Body>Por favor instala Metamask para continuar.</Modal.Body>
        <Modal.Footer>
          <Button size="sm" variant="outline-secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MetamaskButton;
