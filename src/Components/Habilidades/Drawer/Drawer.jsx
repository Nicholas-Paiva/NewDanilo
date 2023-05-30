import React, { useState} from 'react'
import {
    Text,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

function ConfigDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const [sys, setSys] = useState([
        [99, 20, 6, 1],
        [20, 19, 5, 1],
        [20, 18, 4, 1],
        [19, 17, 4, 1],
        [19, 16, 4, 1],
        [18, 15, 3, 1],
        [18, 14, 3, 1],
        [17, 13, 3, 1],
        [17, 12, 3, 1],
        [16, 11, 3, 1],
        [16, 10, 3, 1],
        [15, 9, 3, 1],
        [15, 8, 3, 1],
        [14, 7, 3, 1],
        [14, 6, 3, 1],
        [13, 5, 2, 1],
        [13, 3, 2, 1],
        [12, 3, 2, 1],
        [12, 2, 0, 1],
        [11, 0, 0, 1]
    ])

    return (
    <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
            Config
        </Button>
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
            size={'xl'}
        >
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Configurações do Dado</DrawerHeader>
            <DrawerBody>

                <TableContainer>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Valor da Habilidade</Th>
                                <Th>Fracasso</Th>
                                <Th>Neutro</Th>
                                <Th>Bom</Th>
                                <Th>Sucesso Extremo</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                            sys.map((e, i)=>(
                                <Tr>
                                    <Td>{i+1}</Td>
                                    {sys[i].map((e, i)=>(
                                        <Td>{e}</Td>
                                    ))}
                                </Tr>
                            ))
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </DrawerBody>
            <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
                </Button>
                <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
        </DrawerContent>
        </Drawer>
    </>
    )
}

export default ConfigDrawer