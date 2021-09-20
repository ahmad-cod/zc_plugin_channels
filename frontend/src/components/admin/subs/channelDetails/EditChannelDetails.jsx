import React, { useRef } from 'react'
import { Button } from "@chakra-ui/button"
import { FormControl } from "@chakra-ui/form-control"
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure, Text } from "@chakra-ui/react"

const EditChannelDetails = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initRef = useRef()
  // const finalRef = useRef()
  return (
    <>
      <Button initRef={initRef} onClick={onOpen}>Edit</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='lg'
        initialFocusRef={initRef}
        border='1px solid #E7E7E7'
        borderRadius='4px'
        boxSizing='border-box'
        backgroundColor='#F9F9F9'
        maxW='604px'
        h='383px'
        box-shadow='1px 1px 44px rgba(64, 64, 64, 0.5)'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Description</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Textarea ref={initRef} maxW='540px' h='165px' border='1px solid #A1A1A1'/>
            </FormControl>
            <Text color='rgba(139, 139, 139, 1)' borderRadius='3px' pb={8} h='22px' w='533px' lineHeight='22px' mt='8px'>
              Let people know what this channel is for.
            </Text>
          </ModalBody>
          <ModalFooter mb='11px'>
            <Button
              variant='outline'
              colorScheme='whatsapp'
              border='1px solid #E7E7E7'
              borderRadius='3px'
              backgroundColor='#F9F9F9'
              box-shadow='1px 1px 44px rgba(64, 64, 64, 0.5)'
              color='#00B87C'
              py='14px'
              px='18px'
              padding='14px 18px 14px 18px'
              d='flex' 
              justifyContent='center'
              alignItems='center'
              w='105px'
              h='30px'
              mr='8px'
              onClick={onClose}>Cancel</Button>
            <Button
              colorScheme='whatsapp'
              onClick={onClose}
              borderRadius='3px'
              padding='14px 18px 14px 18px'
              d='flex' 
              justifyContent='center'
              alignItems='center'
              w='105px'
              h='30px'
              ml='8px' >Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditChannelDetails