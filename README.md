# `TaleCraft`

A storytelling platform built on blockchain, where creators can craft, share, and monetize their digital stories as NFTs, offering a unique experience for writers and readers alike.

# Features

- **Story Crafting:** TaleCraft offers a user-friendly interface powered by state-of-the-art AI. Craft your stories effortlessly with creative prompts and intuitive editing tools.

- **NFT Art Generation:** Seamlessly create NFT artwork that complements your narratives. Our AI-driven image generation engine, powered by Leonardo AI, brings your stories to life with stunning visuals.

- **Author Rewards:** Incentivize writers by rewarding them with NFT tokens linked to their stories. This feature encourages content creation and community engagement.

- **Prompt Safety Checks:** Your safety is our priority. TaleCraft includes robust prompt safety checks, leveraging ChatGPT, to ensure a secure and enjoyable experience for all users.

# Local Installation

1. Install Dependencies

Install the project's dependencies using Yarn:

```
yarn setup
```

2. Start the Project

Once all the dependencies are installed, you can start the project:

```
yarn dev
```

The project should now be running on `http://localhost:5173`

# Usage

- Visit TaleCraft in your web browser and securely sign in using Internet Identity to access the platform.
- Click "Create Story" to start crafting your narratives. Utilize AI-enhanced prompts and editing tools to shape your stories.
- Explore the "Generate NFT Art" feature to automatically transform your stories into visually stunning NFT artworks, powered by Leonardo AI.
- To incentivize content creators, mint NFT tokens linked to their stories by selecting "Mint NFT." This process celebrates and rewards authors.
- Immerse yourself in the TaleCraft community, share your stories, collect NFTs, and celebrate the fusion of storytelling and art. Your creative journey begins here.

## Types

**Story**

A Story is represented by the following fields:

- **id:** A unique identifier for the story.
- **title:** The title of the story.
- **initialAuthor:** The author of the first page of the story.
- **pageCount:** The total number of pages in the story.
- **pages:** An array of Page objects representing the story's pages.
- **owner:** The principal of the story's owner.

**Page**

A Page is represented by the following fields:

- **id:** A unique identifier for the page.
- **author:** The author of the page.
- **prompt:** The prompt for the page.
- **content:** The content of the page.
- **image:** The URL of the associated image.

**NFT**

An NFT is used to represent the index of a story associated with an NFT.

## Actor Class

The TaleCraft actor class is the core component of the canister, responsible for managing stories and NFTs. It contains functions for creating stories, contributing to stories, and minting NFTs.

## Functions

- **createStory(id, title, prompt, content, imageUrl, metadataUrl)**
  This function allows users to create a new story with the specified parameters. It mints an NFT for the associated image and initializes the story.

- **contributeToStory(storyId, prompt, content, imageUrl, metadataUrl)**
  Users can contribute to existing stories using this function. It also mints NFTs for associated images and adds a new page to the story.

- **getAllStories()**
  This query function returns a list of all existing stories.

## Minting NFTs

Minting NFTs is done internally within the canister. The mintImageAsNFT private function is responsible for this process. It should take a metadata URL as input and return true if successful or false if there's an error.

## Queries

The canister supports a single query function, getAllStories, which allows users to retrieve a list of all available stories.

- **Identity Provider Issues**

Internet Identity relies on identity providers like DFINITY Foundation's Identity Provider (IDP). If the IDP experiences downtime or issues, it can affect your ability to log in. Check the status of the identity provider, if possible.

# Acknowledgements

We would like to acknowledge the following individuals and resources for their contributions and support:

- **Internet Computer Protocol:** The foundation of TaleCraft relies on the Internet Computer Protocol (ICP), enabling the secure and decentralized nature of our Dapp.
- **OpenAI:** Our sincere thanks to OpenAI for the incredible GPT-3.5 model that powers the prompt safety checks and story generation in TaleCraft.
- **Leonardo AI:** We acknowledge Leonardo AI for its exceptional image generation capabilities, bringing our stories to life as stunning NFT art.
- **Storychain** We'd like to express our gratitude to the creators of "Storychain" for their innovative contributions to the blockchain storytelling domain. Their work has inspired and informed our development efforts for TaleCraft.
