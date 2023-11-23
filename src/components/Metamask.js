import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ethers } from "ethers";

function MetamaskButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const connectMetamask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        // Solicitar la conexión a la cuenta MetaMask
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Obtener la dirección después de que el usuario haya autorizado
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        console.log(address);
      } catch (err) {
        console.error(err);

        // Si el usuario cancela la autorización, puede manejarlo aquí
        if (err.code === 4001) {
          console.log("Usuario canceló la autorización.");
        }
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
          <Modal.Title>Metamask not installed</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please install Metamask to continue.</Modal.Body>
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
