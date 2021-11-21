import { Button, Box, Flex, Heading, Icon, UnorderedList, ListItem, Tag } from '@chakra-ui/react';
import { FaMapMarkerAlt } from 'react-icons/fa'
import styles from './IncomingOrder.module.css';

const STATUS = {
  WAITING: 'Waiting to be accepted',
  PAID: 'Paid, ready to be served'
}

const STATUS_COLOR = {
  PAID: 'green'
}

export default function IncomingOrder({
  customerName,
  address,
  merchantName,
  itemList,
  status
}) {
  return (
    <div className={styles.card}>
      <Heading size="sm">{customerName}</Heading>
      <Icon as={FaMapMarkerAlt} height="12px" width="12px" marginRight="4px"/>
      <Box as="span">{address}</Box>
      <Box paddingLeft="12px" paddingTop="4px">
        <Heading size="sm">{merchantName}</Heading>
        <UnorderedList fontSize="sm">
          {itemList.map(item => (
            <ListItem>
              {item.name} {item.quantity}x
            </ListItem>
          ))}
        </UnorderedList>
        <Box marginTop="4px">Total: <b>Rp125.000</b></Box>
      </Box>
      <Tag marginTop="4px" colorScheme={STATUS_COLOR[status]}>{STATUS[status]}</Tag>
      <Flex paddingTop="12px" justifyContent="center">
        {status === "WAITING" ? (
          <>
            <Button size="sm" marginRight="4px" colorScheme="red">Decline</Button>
            <Button size="sm" colorScheme="green">Accept</Button>
          </>
        ) : (
          <Button size="sm" colorScheme="green">Start delivering</Button>
        )}
      </Flex>
    </div>
  )
}
