import {
  Body,
  getHeadTags,
  Heading2,
  HStack,
  Label,
  Regular,
  SpacerHorizontal,
  SpacerVertical,
  TwitterChip,
  VStack,
} from 'components';
import Head from 'next/head';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import logoUrl from '../assets/studio721.svg';
import blocksUrl from '../assets/studio721blocks.svg';
import { SimplePrimaryButton } from '../components/MintingCardDetails';
import { socialConfig } from '../utils/socialConfig';

const LogoImage = styled.img({
  width: 'auto',
  height: '50px',
  objectFit: 'contain',
  objectPosition: 'left center',

  '@media screen and (max-width: 600px)': {
    height: 'auto',
  },
  '@media screen and (max-width: 410px)': {
    height: '20px',
  },
});

const BlocksImage = styled.img({
  width: 'auto',
  height: '100px',
});

function ToolCard({
  name,
  description,
  buttonTitle,
  comingSoon,
  linkTo,
  badge,
}: {
  name: string;
  description: string;
  buttonTitle: string;
  comingSoon?: boolean;
  linkTo: string;
  badge?: string;
}) {
  const theme = useTheme();

  return (
    <VStack
      background={theme.colors.inputBackground}
      padding={20}
      borderRadius={4}
      maxWidth={350}
      opacity={comingSoon ? 0.3 : 1}
      breakpoints={{
        [600]: {
          maxWidth: 'initial',
        },
      }}
    >
      <HStack>
        <Heading2>{name}</Heading2>
        {badge && (
          <>
            <SpacerHorizontal size={10} />
            <HStack
              background="dodgerblue"
              alignItems="center"
              padding="2px 8px"
              borderRadius={100}
            >
              <Label color="white">{badge}</Label>
            </HStack>
          </>
        )}
      </HStack>
      <SpacerVertical size={10} />
      <Body>{description}</Body>
      <SpacerVertical size={20} />
      <HStack>
        <SimplePrimaryButton
          as="a"
          href={linkTo}
          style={{
            color: 'black',
          }}
        >
          {buttonTitle}
        </SimplePrimaryButton>
      </HStack>
    </VStack>
  );
}

const Grid = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr',
  gridGap: '20px',

  '@media screen and (max-width: 600px)': {
    gridTemplateColumns: '1fr',
  },
});

export default function Studio721() {
  return (
    <>
      <Head>
        <title>Studio 721</title>
        {getHeadTags({
          pageTitle: 'Studio 721',
          pageDescription:
            'Free tools for creating and working with NFT smart contracts.',
          config: socialConfig,
        })}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack
        margin={'60px 0 0 0'}
        flex={'1 1 0px'}
        background="linear-gradient(#222,#111)"
      >
        <VStack
          flex="1 1 0px"
          alignItems="center"
          justifyContent="center"
          padding={20}
        >
          <HStack alignItems="center" gap={20}>
            <VStack background="rgba(0,0,0,0.2)" borderRadius={4} padding={10}>
              <BlocksImage src={blocksUrl} />
            </VStack>
            <VStack>
              <LogoImage src={logoUrl} />
              <SpacerVertical size={10} />
              <Heading2>Free tools for NFT creators</Heading2>
            </VStack>
          </HStack>
          <SpacerVertical size={40} />
          <Grid>
            <ToolCard
              name="Artkit"
              description="Create NFT artwork and metadata, and upload it to decentralized storage."
              buttonTitle="Create an NFT collection"
              linkTo="/artkit"
              badge="BETA"
            />
            <ToolCard
              name="Contract"
              description="Configure, compile, and deploy an ERC721 NFT smart contract."
              buttonTitle="Create a contract"
              linkTo="/contract"
            />
            <ToolCard
              name="Mint"
              description="Configure a minting interface that you can share with collectors."
              buttonTitle="Create minting UI"
              linkTo="/mint"
            />
            <ToolCard
              name="Documentation"
              description="Everything you need to know to make your own NFT collection."
              buttonTitle="Browse the docs"
              linkTo="/docs"
              badge="BETA"
            />
          </Grid>
        </VStack>
        <HStack
          justifyContent="center"
          alignItems="center"
          background="rgba(0,0,0,0.2)"
          padding={20}
          gap={40}
          breakpoints={{
            [800]: {
              flexDirection: 'column',
              gap: 0,
            },
          }}
        >
          <HStack>
            <Regular>
              By <TwitterChip value="@dvnabbott" /> ×
              <TwitterChip value="@open_pal" />
            </Regular>
          </HStack>
          <HStack
            breakpoints={{
              [800]: {
                display: 'none',
              },
            }}
          >
            •••
          </HStack>
          <HStack>
            <Regular>
              Sponsored by <TwitterChip value="@LondonDAO" />
            </Regular>
          </HStack>
        </HStack>
      </VStack>
    </>
  );
}