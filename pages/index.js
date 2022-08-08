import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box marginTop={5} display={{ md: 'flex' }}>
        <Box marginTop={3} flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Christopher Abdo
          </Heading>
          <p>Software Engineer ( Blockchain / Web2 / UI/UX )</p>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/me.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hey there! I'm a full stack developer based in Philadelphia.
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        {/* <Paragraph>
          Takuya is a freelance and a full-stack developer based in Osaka with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called{' '}
          <NextLink href="/works/inkdrop" passHref scroll={false}>
            <Link>Inkdrop</Link>
          </NextLink>
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <NextLink href="https://www.youtube.com/devaslife" passHref>
            <Link target="_blank">Dev as Life</Link>
          </NextLink>
          &quot; has more than 100k subscribers.
        </Paragraph> */}
        <Paragraph>
          I am a full-stack developer based in Philadelphia with a passion for
          building dApps and Web2.0 platforms. I have always had a knack for
          problem solving and trying to find the most efficient way to solve
          them. I love developing new platforms, launching them, and finding new
          ways to constantly better them. In the past year, I have built and
          pushed 3 decentralized Applications to the Ethereum chain:{' '}
          <NextLink href="/works/melomania" passHref scroll={false}>
            <Link>Melomania</Link>
          </NextLink>
          ,{' '}
          <NextLink href="/works/web3me" passHref scroll={false}>
            <Link>Web3.Me</Link>
          </NextLink>
          , and{' '}
          <NextLink href="/works/pxart" passHref scroll={false}>
            <Link>PxArt.</Link>
          </NextLink>
          &nbsp;When I am not coding, I love playing video games, watching
          movies, playing basketball, and going hiking.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              View my projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in New Brunswick, NJ.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Research Internship at the New Jersey Institute of Technology.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Graduated South Brunswick High School with the accomplishment of being
          top 15% in the class. Began studying Software Engineering at Drexel
          University with a candidate for Bachelor of Science in Software
          Engineering.
        </BioSection>

        <BioSection>
          <BioYear>'19 - present</BioYear>
          Working as a full time student while creating projects on the side!
          Actively looking for internship opportunities.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Producing Music, Programming, Web Development, and Learning.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/chrisabdo" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @chrisabdo
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/melomania_eth" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @melomania_eth (project twitter)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/chrisabdo_eth" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @chrisabdo_eth (personal twitter)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/chris.abdo" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @chris.abdo
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
