import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/layout';
import { Switch } from '@chakra-ui/react';
import Image from 'next/image';
import styles from '../../styles/MyOrder.module.css';

export default function DriverOpenOrder({
  onOpenDrawer,
  merchantName,
  image
}) {
  return (
    <Flex flexDirection="column">
      <div className={styles.card}>
        <Flex gridGap="12px">
          <Box borderRadius="lg" overflow="hidden" width="100px" height="100px">
            <Image src={image} width="100px" height="100px"/>
          </Box>
          <Flex flexDirection="column" gridGap="12px" flexGrow="2">
            <Heading size="sm">{merchantName}</Heading>
            <Button onClick={onOpenDrawer} width="fit-content">View Menu</Button>
          </Flex>
          <Flex alignItems="center">
            <Switch colorScheme="green"/>
          </Flex>
        </Flex>
      </div>
    </Flex>
  )
}
