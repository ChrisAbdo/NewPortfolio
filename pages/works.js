import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import NextLink from 'next/link'
import Link from 'next/link'

import thumbMelo from '../public/images/melomania.png'
import thumbYouTube from '../public/images/links/youtube1.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch11.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/music.png'
import thumbMargelo from '../public/images/safeconnect.png'
import thumbModeTokyo from '../public/images/car.png'
import thumbStyly from '../public/images/rocket.png'
import thumbPichu2 from '../public/images/binary.png'
import thumbFreeDBTagger from '../public/images/etherscan.jpg'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="pxart" title="PxArt" thumbnail={thumbInkdrop}>
            A decentralized community pixel art building platform.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="melomania" title="Melomania" thumbnail={thumbMelo}>
            A decentralized music NFT marketplace and crowdsourcing platform.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="web3me" title="Web3.me" thumbnail={thumbYouTube}>
            A decentralized free lancing and talent finding platform.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="etherscan-api"
            thumbnail={thumbFreeDBTagger}
            title="Etherscan ERC-20 API"
          >
            Etherscan ERC-20 Token Top Mover tracker API using NodeJS
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="safeconnect"
            thumbnail={thumbMargelo}
            title="Safe Connect"
          >
            ETHNYC Hackathon prize winner for Optimism.io and WalletConnect
            (Best Social project)
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="njit-internship"
            thumbnail={thumbModeTokyo}
            title="NJIT Internship"
          >
            Summer Internship @ NJIT where my team developed a biomimetic
            navigation system.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="rocket-renegade"
            thumbnail={thumbStyly}
            title="Rocket Renegade"
          >
            A 2D platformer game which utilizes a real-time physics engine
            developed by our group.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem
            id="binary-search-tree"
            thumbnail={thumbPichu2}
            title="Visual Binary Search Tree"
          >
            A visual representation of a binary search tree coded using HTML,
            CSS, and JavaScript.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="music-visualizer"
            thumbnail={thumbMenkiki}
            title="Music Visualizer"
          >
            Music Visualizer coded with HTML, CSS, and JavaScript. This program
            with visualize any audio you input.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
