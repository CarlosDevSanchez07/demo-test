"use client";

import CustomPaginationActionsTable from "@/components/table";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
};

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(!show);
  };

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="flex justify-end">
        <Button variant="contained" onClick={() => setShow(true)}>
          Add
        </Button>
      </div>
      <CustomPaginationActionsTable />
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="w-full grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-12">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Title
              </Typography>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="col-span-12 lg:col-span-12">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Body
              </Typography>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                className="w-full"
              />
            </div>
            <Button
              variant="contained"
              size="large"
              onClick={() => handleClose()}
            >
              Save
            </Button>
          </form>
        </Box>
      </Modal>
    </main>
  );
}
