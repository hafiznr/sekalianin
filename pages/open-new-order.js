import { Box, Divider, Flex, Heading, Spacer, Stack, Text } from '@chakra-ui/layout';
import styles from '../styles/OpenNewOrder.module.css';
import { useState } from 'react';
import DriverItem from '../components/DriverItem';
import { Input } from '@chakra-ui/input';
import { Image } from '@chakra-ui/image';
import { Button } from '@chakra-ui/button';
import ReactDatePicker from 'react-datepicker';
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from '@chakra-ui/modal';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from 'next/router';


export default function OpenNewOrder() {
  const [storeName, setStoreName] = useState('');
  const [coverageArea, setCoverageArea] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleClickOpenOrder = () => {
    router.push('/driver')
  }

  return (
    <>
    <div className={styles.container}>
      <Box textAlign="center" marginBottom="12px">
        <Heading size="lg">
          Open New Order
        </Heading>
      </Box>
        
      <Flex flexDirection="column" gridGap="8px">
        <Box>
          <Heading size="sm">Merchant Name</Heading>
          <Input 
            placeholder="ABC Store, XYZ Resto, etc" 
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}  
          />
        </Box>

        <Box>
          <Heading size="sm">Coverage Area</Heading>
          <Input 
            placeholder="Sesame Street, ..." 
            value={coverageArea}
            onChange={(e) => setCoverageArea(e.target.value)}  
          />
        </Box>

        <Flex flexDirection="column" gridGap="4px" marginTop="12px">
          <Heading size="sm">Item List</Heading>
          <DriverItem title="Ayam Bakar" price="Rp29.000" image="/dimsum.jpg" limit="2"/>
          <Divider />
          <DriverItem title="Ayam Pop" price="Rp25.000" image="/dimsum.jpg" limit="2"/>
          <Divider />
          <DriverItem title="Ayam Goreng" price="Rp15.000" image="/dimsum.jpg" limit="2"/>
        </Flex>

        <Box textAlign="center" paddingTop="12px">
          <Button onClick={() => setIsOpen(true)}>+ Add New Item</Button>
        </Box>
      </Flex>     

      <Box 
        position="fixed" 
        bottom="0" 
        width="100%" 
        maxWidth="480px" 
        padding="16px"
        right="0px"
        left="50%"
        transform="translate(-50%)"
      >
        <Button width="100%" colorScheme="red" onClick={handleClickOpenOrder}>Open This Order</Button>
      </Box> 
    </div>
    <Drawer placement="bottom" onClose={() => setIsOpen(false)} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Add New Item</DrawerHeader>
        <DrawerBody>
          <Stack direction="column" spacing="8px">
            <Input placeholder="Item Name"/>
            <Input placeholder="Item Limit"/>
            <Input placeholder="Item Price"/>
            <Box borderRadius="lg" borderWidth="2px" borderStyle="dashed" padding="16px" textAlign="center">
              <Text>+ Add Image</Text>
            </Box>
          </Stack>
        </DrawerBody>
        <DrawerFooter>
        <Button size="sm" colorScheme="blue" onClick={() => setIsOpen(false)}>+ Add new item</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
    </>
  )
}
