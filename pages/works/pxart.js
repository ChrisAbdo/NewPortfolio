import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="PxArt">
    <Container>
      <Title>
        PxArt <Badge>2022-</Badge>
      </Title>
      <P>
        A decentralized community art building platform. Users are able to mint
        1 block of a 100 block canvas, allowing their ability to mint the final
        art drawing as an NFT which is able to be sold on OpenSea
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.melomania.space/">
            PLACEHOLDER
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Truffle, Web3.js, Ethers.js</span>
        </ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/ChrisAbdo/CRA-Pixel-Web3">
            CRA-Pixel-Web3
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/inkdrop_eyecatch11.png" alt="PxArt" />
      <WorkImage src="/images/pxcode.png" alt="PxArt code" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
