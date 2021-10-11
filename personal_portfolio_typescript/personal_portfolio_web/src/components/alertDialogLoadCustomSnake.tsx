import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

interface alertDialogLoadCustomSnakeProps {
  asd?: any;
}

export const AlertDialogLoadCustomSnake: React.FC<alertDialogLoadCustomSnakeProps> =
  (prop) => {
    console.log(prop.asd);

    const [isOpen, setIsOpen] = React.useState(false);
    const onClose = (val?) => {
      setIsOpen(false);
      console.log(val, " Button Pressed");
    };
    const cancelRef = React.useRef();
    return (
      <>
        <Button colorScheme="red" onClick={() => setIsOpen(true)}>
          Delete Customer
        </Button>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isCentered={true}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Customer
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} id="btnClose" onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={onClose} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    );
  };

export default AlertDialogLoadCustomSnake;
