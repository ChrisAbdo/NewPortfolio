import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Web3Me">
    <Container>
      <Title>
        Web3.Me <Badge>2021-</Badge>
      </Title>
      <P>
        A decentralized free lancing and talent finding platform. This website
        is designed to promote your Web3 skills and help you find a new opportunity working in the Web3 space. Users are able to filter by name, role, etc.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.melomania.space/">
            PLACEHOLDER <ExternalLinkIcon mx="2px" />
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
          <Link href="https://github.com/ChrisAbdo/Prisma-NextTest">
            Prisma-NextTest <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/links/youtube1.png" alt="Inkdrop" />
      <WorkImage src="/images/w3mcode.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
