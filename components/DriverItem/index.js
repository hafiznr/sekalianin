import { Button, IconButton } from '@chakra-ui/button';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex, Heading, Spacer, Text } from '@chakra-ui/layout';
import Image from 'next/image';

export default function DriverItem({
  title,
  price,
  image,
  limit
}) {
  return (
    <Box>
      <Flex >
        <Box marginRight={4} borderRadius="lg" overflow="hidden" height="60px" width="60px">
          <Image src={image} width={60} height={60} />
        </Box>
        <Box>
          <Heading fontSize="xs">
            {title}
          </Heading>
          <Text fontSize="sm">
            Limit: {limit}
          </Text>
          <Text fontSize="sm">
            {price}
          </Text>
        </Box>
        <Spacer />
        <Flex gridGap="4px" alignItems="center">
          <IconButton 
            icon={<DeleteIcon />} 
            size="sm" 
            colorScheme="red" 
            variant="outline" 
          />
          <IconButton 
            icon={<EditIcon />} 
            size="sm" 
            colorScheme="green" 
            variant="outline"
          />
        </Flex>
      </Flex>
      <Divider marginTop={2} marginBottom={2}/>
    </Box>
  )
}
