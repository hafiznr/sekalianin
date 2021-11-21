import { Divider, Flex, Heading, Text } from '@chakra-ui/layout';
// import OpenOrder from '../components/OpenOrder';
import Image from 'next/image';
import styles from './OpenOrderDetail.module.css';

import { Tag } from "@chakra-ui/react";
import { AddIcon, ChevronLeftIcon, ChevronRightIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, Spacer } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { useRouter } from 'next/router';
import OrderItem from '../../components/OrderItem';

export default function OpenOrderDetail() {
  const router = useRouter();
  
  const handleClickBack = () => {
    router.back()
  }

  const handleCheckout = () => {
    router.push("/order-detail")
  }

  return (
    <div>
      <div className={styles.container}>
        <Flex alignItems="center">
          <ChevronLeftIcon w={8} h={8} onClick={handleClickBack} />
        </Flex>
        <main>
          <Flex alignItems="center" marginTop="8px" marginBottom="8px" background="#e7e7e7" borderRadius="lg" padding="12px">
            <Box marginRight={4} verticalAlign="bottom">
              <Image src="/profile.jpg" width={50} height={50}/>
            </Box>
            <Box>
              <Heading size="sm" marginBottom="4px">Dwi Nanda Susanto</Heading>
              <Box fontSize="sm" marginBottom="4px">
                Total Order: <Tag variant="solid" colorScheme="green" borderRadius="full">142</Tag>
              </Box>
              <Box fontSize="sm">
                Schedule: <Tag variant="solid" colorScheme="cyan" borderRadius="full">Senin, 15.00 - 20.00 </Tag>
              </Box>
            </Box>
          </Flex>

          <Box>
            <Heading size="md" marginBottom={4} marginTop={4}>Open Order Items</Heading>
          </Box>

          <Flex flexDirection="column">
            <Box>
              <Heading size="sm" marginBottom={4}>Batagor Kang Budi</Heading>
              <OrderItem 
                title="Batagor Komplit" 
                limit="2" 
                price="Rp30.000" 
                image="/batagor.jpg"
                quantity={1}
              />
              <OrderItem 
                title="Batagor Biasa" 
                limit="3" 
                price="Rp20.000" 
                image="/batagor.jpg"
                quantity={1}
              />
            </Box>
            <Box>
              <Heading size="sm" marginBottom={4}>Dimsum Legendaris</Heading>
              <OrderItem 
                title="Dimsum 3 pcs" 
                limit="5" 
                price="Rp12.000" 
                image="/dimsum.jpg"
                quantity={1}
              />
              <OrderItem 
                title="Dimsum 3 pcs" 
                limit="5" 
                price="Rp12.000" 
                image="/dimsum.jpg"
                quantity={0}
              />
            </Box>
          </Flex>
          
        </main>
      </div>
      <Box 
        position="fixed" 
        bottom="0" 
        maxWidth="480px" 
        width="100%"
        background="white"
        padding="16px"
        right="0px"
        left="50%"
        transform="translate(-50%)" 
        borderTopWidth="1px"
        onClick={handleCheckout}
      >
        <Flex  padding="10px" background="red.400" borderRadius="lg" color="white" alignItems="center">
          <Text>3 items</Text>
          <Spacer />
          <Text>Rp120.000</Text>
          <ChevronRightIcon height="100%" marginLeft="2px"/>
        </Flex>
      </Box>
    </div>
  )
}
