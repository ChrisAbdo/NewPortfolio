import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Some more about me!
      </Heading>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Abilities
        </Heading>
        <BioSection>
          <BioYear>Programming Languages</BioYear>
          JavaScript, Solidity, Python, Java, HTML/CSS
        </BioSection>
        <BioSection>
          <BioYear>Technical Abilities</BioYear>
          Next.js, React, TailwindCSS, Git, Smart Contracts, Remix, Redux,
          Firebase, Testing (Chai)
        </BioSection>
        <BioSection>
          <BioYear>Non-Technical</BioYear>
          Agile Workflow (Scrum), Interpersonal skills, Attention to detail
        </BioSection>
        <BioSection>
          <BioYear>Languages</BioYear>
          Fluent in Arabic and English, Conversational in Spanish
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Extra Curricular Activities
        </Heading>
        <BioSection>
          <BioYear>Clubs</BioYear>
          Drexel Cyber Security / Information Technology Club Drexel MENA
          (Middle Eastern and North African) Club - Organized events spreading
          awareness about current issues happening in the MENA region
        </BioSection>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
