import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import Label from './components/Label';
import Text from './components/Text';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './components/Table';
import Dropdown from './components/Dropdown';
import RadioButton from './components/RadioButton';
import Img from './components/Img';
import HeroImage from './components/HeroImage';
import Card from './components/Card';

const Page = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
`;
const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: #1e1b4b;
  margin: 0 0 0.25rem;
`;
const PageSub = styled.p`
  color: #6b7280;
  margin: 0 0 3rem;
  font-size: 1.05rem;
`;
const Section = styled.section`
  margin-bottom: 3.5rem;
`;
const STitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: #4f46e5;
  border-bottom: 2px solid #ede9fe;
  padding-bottom: 0.4rem;
  margin: 0 0 1.5rem;
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
`;
const Divider = styled.hr`
  border: none
  border-top: 1px solid #e5e7eb;
  margin: 1.25rem 0;
`;

export default function App() {
  const [radio, setRadio] = useState('opt1');

  return (
    <Page>
      <PageTitle>🌸 UI Component Garden</PageTitle>
      <PageSub>React · TypeScript · Vite · Styled-Components · Storybook</PageSub>

      <Section>
        <STitle>Hero Image</STitle>
        <HeroImage
          src="https://placehold.co/1200x420/4f46e5/ffffff"
          title="Welcome to UI Garden"
          subtitle="Run npm run storybook for interactive controls"
        />
        <Divider />
        <HeroImage title="Disabled Hero" subtitle="Greyed out and non-interactive" disabled />
      </Section>

      <Section>
        <STitle>Button</STitle>
        <Row>
          <Button label="Primary" backgroundColor="#4f46e5" />
          <Button label="Success" backgroundColor="#10b981" />
          <Button label="Small" size="small" backgroundColor="#f59e0b" />
          <Button label="Large" size="large" backgroundColor="#6366f1" />
          <Button label="Disabled" disabled />
        </Row>
      </Section>

      <Section>
        <STitle>Label</STitle>
        <Row>
          <Label text="Default Label" />
          <Label text="Styled Label" backgroundColor="#4f46e5" color="#fff" />
          <Label text="Green Label" backgroundColor="#10b981" color="#fff" />
          <Label text="Disabled Label" disabled />
        </Row>
      </Section>

      <Section>
        <STitle>Text</STitle>
        <Text content="This is a default paragraph text component." />
        <br />
        <Text as="h3" content="Heading variant (h3)" fontWeight="700" fontSize="1.4rem" />
        <br />
        <Text content="This text is disabled — greyed out." disabled />
      </Section>

      <Section>
        <STitle>Table</STitle>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell isHeader>Name</TableCell>
              <TableCell isHeader>Role</TableCell>
              <TableCell isHeader>Status</TableCell>
            </TableRow>
          </TableHeader>
          <tbody>
            <TableRow>
              <TableCell>Alice Johnson</TableCell>
              <TableCell>Developer</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bob Smith</TableCell>
              <TableCell>Designer</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
          </tbody>
          <TableFooter>
            <TableRow>
              <TableCell isHeader>Total</TableCell>
              <TableCell>2 members</TableCell>
              <TableCell>All active</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <Divider />
        <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0 0 0.75rem' }}>
          Disabled state:
        </p>
        <Table disabled>
          <TableHeader disabled>
            <TableRow disabled>
              <TableCell isHeader disabled>
                Name
              </TableCell>
              <TableCell isHeader disabled>
                Role
              </TableCell>
            </TableRow>
          </TableHeader>
          <tbody>
            <TableRow disabled>
              <TableCell disabled>Alice</TableCell>
              <TableCell disabled>Developer</TableCell>
            </TableRow>
          </tbody>
          <TableFooter disabled>
            <TableRow disabled>
              <TableCell disabled>Total</TableCell>
              <TableCell disabled>1</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Section>

      <Section>
        <STitle>Dropdown</STitle>
        <Row>
          <Dropdown
            placeholder="Choose a framework"
            options={[
              { value: 'react', label: 'React' },
              { value: 'vue', label: 'Vue' },
              { value: 'angular', label: 'Angular' },
            ]}
          />
          <Dropdown
            placeholder="Disabled dropdown"
            disabled
            options={[{ value: 'a', label: 'A' }]}
          />
        </Row>
      </Section>

      <Section>
        <STitle>Radio Button</STitle>
        <Row>
          <RadioButton
            label="Option 1"
            name="demo"
            value="opt1"
            checked={radio === 'opt1'}
            onSelect={setRadio}
          />
          <RadioButton
            label="Option 2"
            name="demo"
            value="opt2"
            checked={radio === 'opt2'}
            onSelect={setRadio}
          />
          <RadioButton
            label="Option 3"
            name="demo"
            value="opt3"
            checked={radio === 'opt3'}
            onSelect={setRadio}
          />
          <RadioButton label="Disabled" name="demo" value="opt4" disabled />
        </Row>
      </Section>

      <Section>
        <STitle>Img</STitle>
        <Row>
          <Img
            src="https://placehold.co/300x200/4f46e5/ffffff"
            alt="Active image"
            width="300px"
            height="200px"
          />
          <Img
            src="https://placehold.co/300x200"
            alt="Disabled image"
            width="300px"
            height="200px"
            disabled
          />
        </Row>
      </Section>

      <Section>
        <STitle>Card</STitle>
        <Row>
          <Card
            title="React Library"
            description="Build reusable components with React & TypeScript."
            imageSrc="https://placehold.co/340x180/4f46e5/ffffff"
            footerText="Engineering · Jan 2025"
          />
          <Card
            title="Storybook Docs"
            description="Document your components with interactive stories."
            imageSrc="https://placehold.co/340x180/10b981/ffffff"
            footerText="Design Ops · Feb 2025"
          />
          <Card
            title="Disabled Card"
            description="This card is disabled and greyed out."
            imageSrc="https://placehold.co/340x180"
            footerText="Unavailable"
            disabled
          />
        </Row>
      </Section>
    </Page>
  );
}
