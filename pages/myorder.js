import { Flex, Heading } from '@chakra-ui/layout';
import IncomingOrder from '../components/IncomingOrder';
import styles from '../styles/MyOrder.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <Heading size="md">
          My Order List
        </Heading>

        <Flex flexDirection="column" gridGap="12px" paddingTop="12px">
          <IncomingOrder
            customerName="Ade Kurniawan"
            address="Tebet Timur Dalam no.12"
            merchantName="Bakwan Malang Tebet Raya"
            itemList={[
              {
                name: 'Bihun Kuah',
                quantity: 1,
              },
              {
                name: 'Kwetiaw Goreng',
                quantity: 1,
              },
              {
                name: 'Es Teh Manis',
                quantity: 2,
              },
            ]}
            status="WAITING"
          />
          <IncomingOrder
            customerName="Mariska Gina"
            address="Tebet Barat Luar no.134"
            merchantName="Batagor Kang Budi"
            itemList={[
              {
                name: 'Batagor Komplit',
                quantity: 1,
              },
              {
                name: 'Es Kelapa',
                quantity: 3,
              },
            ]}
            status="PAID"
          />
        </Flex>
      </main>
    </div>
  )
}
