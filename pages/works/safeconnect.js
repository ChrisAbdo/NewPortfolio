import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="rocket-renegade">
    <Container>
      <Title>
        SafeConnect <Badge>2022</Badge>
      </Title>
      <P>
        A security protocol built directly into WalletConnect that alerts users
        of phishy websites using a database built with Solidity. We won
        WalletConnect&apos;s prize of best Social product.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js, Truffle, Web3.js, Ethers.js, WalletConnect, Optimism
          </span>
        </ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/ETH-NYC-Hackathon/safe-connect-frontend">
            SafeConnect GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/safeconnect.png" alt="Inkdrop" />
      <WorkImage src="/images/ethcode.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
