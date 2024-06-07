"use client"

import { Card, Modal } from "flowbite-react";
import { useState } from "react";

export default function FinanceTracker() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card
        className="grow hover:cursor-pointer"
        onClick={() => setOpenModal(true)}
      >
        <Modal
          show={openModal}
          onClose={() => setOpenModal(false)}
        >
          <Modal.Header>Finances</Modal.Header>
          <Modal.Body>
            hello finances
          </Modal.Body>
        </Modal>
      </Card>
    </>
  )
}