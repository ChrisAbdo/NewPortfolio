import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="binary-search-tree">
    <Container>
      <Title>
        Binary Search Tree <Badge>2020</Badge>
      </Title>
      <P>A visualized binary search tree using HTML, CSS, and JavaScript.</P>
      <List ml={4} my={4}>
        <ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://codepen.io/chrisabdo/pen/dyvOjgM">
              https://codepen.io/chrisabdo/pen/dyvOjgM{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/ChrisAbdo/BinarySearchTreeJS">
            BST Github
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/binary.png" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
