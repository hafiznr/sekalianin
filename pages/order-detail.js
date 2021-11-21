import { Button } from '@chakra-ui/button';
import { Box, Flex, Heading, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import styles from '../styles/OpenNewOrder.module.css';

export default function OrderDetail() {
  const router = useRouter();

  const handleClickOrderAgain = () => {
    router.push("/")
  }

  return (
    <div className={styles.container}>
      <Stack direction="column" spacing="12px">
      
        <Box textAlign="center">
          <Heading size="md">
            Order Details
          </Heading>
        </Box>

        <Box padding="16px" borderWidth="1px" borderRadius="lg">
          <Heading fontSize="sm">
            Bakwan Malang Tebet Raya
          </Heading>
          <Text fontSize="sm">Rp 125.000 - 3 items - Transfer</Text>
          <Text fontSize="sm">Ade Kurniawan - +628123456789 </Text>
        </Box>

        <Box padding="16px" borderWidth="1px" borderRadius="lg">
          <Heading fontSize="sm">
            Customer Address
          </Heading>
          <Text fontSize="sm">Tebet Timur Dalam no.12</Text>
        </Box>

        <Box padding="16px" borderWidth="1px" borderRadius="lg">
          <Heading size="sm">
            Bakwan Malang Tebet Raya - Rahman Solihin
          </Heading>
          <UnorderedList>
            <ListItem>
                <Flex justifyContent="space-between">
                  <Text fontSize="sm">Bihun Kuah x1</Text>
                  <Text fontSize="sm">Rp 50.000</Text>
                </Flex>
            </ListItem>
            <ListItem>
                <Flex justifyContent="space-between">
                  <Text fontSize="sm">Kwetiaw Goreng x1</Text>
                  <Text fontSize="sm">Rp 50.000</Text>
                </Flex>
            </ListItem>
            <ListItem>
              <Flex justifyContent="space-between">
                <Text fontSize="sm">Es Teh Manis</Text>
                <Text fontSize="sm">Rp 10.000</Text>
              </Flex>
            </ListItem>
          </UnorderedList>
          <Flex justifyContent="space-between" marginTop="12px">
            <Heading fontSize="sm">Subtotal (3 items)</Heading>
            <Heading fontSize="sm">Rp 110.000</Heading>
          </Flex>
          
        </Box>

        <Box padding="16px" borderWidth="1px" borderRadius="lg">
          <Flex justifyContent="space-between">
            <Text fontSize="sm">Delivery Fee</Text>
            <Text fontSize="sm">Rp 10.000</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text fontSize="sm">Service Fee</Text>
            <Text fontSize="sm">Rp 5.000</Text>
          </Flex>
        </Box>

        <Box padding="16px" borderWidth="1px" borderRadius="lg">
          <Flex justifyContent="space-between">
            <Heading fontSize="sm">Total</Heading>
            <Heading fontSize="sm">Rp 125.000</Heading>
          </Flex>
        </Box>

        <Box padding="16px" borderWidth="1px" borderRadius="lg">
          <Heading fontSize="xs">
            Order Details
          </Heading>
          <Flex justifyContent="space-between">
            <Text fontSize="xs">Notes</Text>
            <Text fontSize="xs">-</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text fontSize="xs">Order Number</Text>
            <Text fontSize="xs">10000023</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text fontSize="xs">Order Time</Text>
            <Text fontSize="xs">20 Nov 2021, 10.00</Text>
          </Flex>
        </Box>
      </Stack>

      <Button marginTop="32px" onClick={handleClickOrderAgain}>Order Again</Button>
    </div>
  )
}
