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
  <Layout title="njit-internship">
    <Container>
      <Title>
        NJIT Internship <Badge>2019</Badge>
      </Title>
      <P>
        Summer Internship @ NJIT where my team developed a biomimetic navigation
        system using Python and RaspberryPi.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Raspbian / Ubuntu</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, RaspberryPi, MATLAB</span>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://pdfhost.io/v/mDhWATyBD_NJIT_HS_Internship_PPT_Presentation_Templatepdf.pdf">
            Presentation <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/car.png" alt="Inkdrop" />
      <WorkImage src="/images/njit.png" alt="Inkdrop" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          width="1140"
          height="448"
          src="https://www.youtube.com/embed/x_IxKGmSKoA?list=TLGGATNRC-FxFPAwODA4MjAyMg"
          title="C elegans worm imaged with SCAPE 2.0 at 25 volumes per second"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
