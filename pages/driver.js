import { Button, IconButton } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Box, Divider, Flex, Heading, Spacer, Text } from '@chakra-ui/layout';
import { Drawer } from '@chakra-ui/react';
import Image from 'next/image';
import { DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from '@chakra-ui/modal';
import { FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa'
import DriverOpenOrder from '../components/DriverOpenOrder';
import styles from '../styles/MyOrder.module.css';
import { useState } from 'react';
import DriverItem from '../components/DriverItem';
import { useRouter } from 'next/dist/client/router';

export default function Driver() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleOpenOrder = () => {
    router.push('/open-new-order')
  }

  const handleViewMyOrder = () => {
    router.push('/myorder')
  }

  return (
    <div className={styles.container}>
      <Box textAlign="center">
        <Image src="/profile.jpg" width="60px" height="60px"/>
        <Heading size="md">Rahman Solihin</Heading>
        <Box>
          <Icon as={FaMapMarkerAlt} height="12px" width="12px"/>
          &nbsp;
          Jakarta Pusat
        </Box>
        <Box>
          <Icon as={FaRegCalendarAlt} height="12px" width="12px"/>
          &nbsp;
          15.00 - 20.00
        </Box>
        <Box>
          Total Order: 54
        </Box>
        <Button marginTop="12px" onClick={handleViewMyOrder}>
          View My Order
        </Button>
      </Box>
      <Divider marginTop="24px" marginBottom="24px"/>
      <Flex flexDirection="column">
        <DriverOpenOrder
          merchantName="RM. Pagi Sore"
          image="/dimsum.jpg"
          onOpenDrawer={() => setIsOpen(true)}
        />
        <DriverOpenOrder
          merchantName="Batagor Kang Budi"
          image="/batagor.jpg"
          onOpenDrawer={() => setIsOpen(true)}
        />
      </Flex>
      <Drawer placement="bottom" onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">RM. Pagi Sore</DrawerHeader>
          <DrawerBody>
            <Flex flexDirection="column" gridGap="4px">
              <DriverItem title="Ayam Bakar" price="Rp29.000" image="/dimsum.jpg" limit="2" />
              <Divider />
              <DriverItem title="Ayam Pop" price="Rp25.000" image="/dimsum.jpg" limit="2"/>
              <Divider />
              <DriverItem title="Ayam Goreng" price="Rp15.000" image="/dimsum.jpg" limit="2"/>
            </Flex>
          </DrawerBody>
          <DrawerFooter>
          <Button size="sm" colorScheme="blue">+ Add new item</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
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
        <Button width="100%" colorScheme="red" onClick={handleOpenOrder}>
          Open New Order
        </Button>
      </Box>
    </div>
  )
}
