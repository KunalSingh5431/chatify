import React from 'react'
import { IconButton, useDisclosure } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
import { Modal,ModalOverlay,ModalHeader,ModalBody,ModalContent,ModalCloseButton,ModalFooter,Button} from '@chakra-ui/react'
import { Image,Text } from '@chakra-ui/react'

const ProfileModal = ({user,children}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()


  return <>
  
  {
    children?<span onClick={onOpen}>{children}</span>:(
      <IconButton display={{base:"flex"}} icon={<ViewIcon/>} onClick={onOpen}></IconButton>
    )
  }
  <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader fontSize="40px" fontFamily="Work sans" display="flex" justifyContent="center">{user.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDir="column" alignItems="center" justifyContent="space-between">
           <Image borderRadius="full" boxSize="150px" src={user.pic} alt={user.name}></Image>
           <Text fontSize={{base:"28px",md:"30px"}} fontFamily="Work sans">Email:{user.email}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  </>
}

export default ProfileModal
