import {
  Modal,
  ModalOverlay,
  FormControl,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContent } from "../../context";

export default function TransactionForm({ isOpen, onClose }) {
  const { value, setValue, formData, setFormData, handleFormSubmit } =
    useContext(GlobalContent);

  function handleFormChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleFormSubmit(formData);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter Description</FormLabel>
              <Input
                placeContent="Enter Transaction description"
                name="description"
                type="text"
                onChange={handleFormChange}
              />
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeContent="Enter Transaction Amount"
                name="amount"
                type="number"
                onChange={handleFormChange}
              />
              <RadioGroup mt={"5"} value={value} onChange={setValue}>
                <Radio
                  value="income"
                  colorScheme="blue"
                  name="type"
                  checked={formData.type === "income"}
                  onChange={handleFormChange}
                >
                  Income
                </Radio>
                <Radio
                  value="expense"
                  colorScheme="red"
                  name="type"
                  checked={formData.type === "expense"}
                  onChange={handleFormChange}
                >
                  Expense
                </Radio>
              </RadioGroup>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={"4"}>
              Cancel
            </Button>
            <Button onClick={onClose} type="submit">
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
