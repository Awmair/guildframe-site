export type CampaignStudyStatus = "observed" | "unknown" | "not_applicable";

export type CampaignObservation = {
  status: CampaignStudyStatus;
  note: string;
  sourceUrl?: string;
};

export type CampaignStudyRecord = {
  id: string;
  title: string;
  category: "Board games" | "Card games" | "Tabletop RPGs" | "Miniatures and terrain" | "Dice and accessories";
  theme: string;
  platform: "BackerKit" | "Kickstarter";
  campaignUrl: string;
  sourceAccess: "campaign_text" | "navigation_only";
  scopeNote: string;
  explanation: CampaignObservation;
  rewards: CampaignObservation;
  shipping: CampaignObservation;
  preview: CampaignObservation;
  mobile: CampaignObservation;
  supplementalSources?: { label: string; url: string }[];
};

export const campaignStudyCaptureDate = "2026-11-06";
export const campaignStudyCsvPath = "/downloads/tabletop-campaign-page-study.csv";

export const campaignStudyStatusLabels: Record<CampaignStudyStatus, string> = {
  observed: "Observed",
  unknown: "Unknown",
  not_applicable: "Not applicable",
};

export const campaignPageStudy: CampaignStudyRecord[] = [
  {
    "id": "01",
    "title": "Red Tides: A Tale of New Caribbea",
    "category": "Board games",
    "theme": "Cooperative pirate adventure",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/tortugas-games/red-tides-a-tale-of-new-caribbea",
    "sourceAccess": "campaign_text",
    "scopeNote": "Story text was retrieved in part. Later requests timed out; image contents and the rulebook target remain unverified.",
    "explanation": {
      "status": "observed",
      "note": "The story identifies cooperative ship combat and the goal of defeating a pirate king."
    },
    "rewards": {
      "status": "observed",
      "note": "Core, expansion and accessory bundles have different item lists in the story."
    },
    "shipping": {
      "status": "observed",
      "note": "The retrieved source discusses regional restrictions, customs and import charges."
    },
    "preview": {
      "status": "unknown",
      "note": "A Rulebook section is listed, but its download target was not verified."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "02",
    "title": "Medieval Merchant",
    "category": "Board games",
    "theme": "Trading and a variable market",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/joe-foner/medieval-merchant-a-unique-buying-and-selling-board-game",
    "sourceAccess": "campaign_text",
    "scopeNote": "Campaign text was retrieved. The rules are image content, which this text review did not inspect.",
    "explanation": {
      "status": "observed",
      "note": "The story explains movement cards, buying, changing prices and a gold target."
    },
    "rewards": {
      "status": "observed",
      "note": "The basic and deluxe versions are distinguished by pawns, miniatures and coin materials."
    },
    "shipping": {
      "status": "observed",
      "note": "The creator explains later collection of shipping fees, local pickup and estimated postage."
    },
    "preview": {
      "status": "unknown",
      "note": "The Rules section embeds images. Their contents and readability were not inspected."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "03",
    "title": "POND: Froggy Mayhem",
    "category": "Board games",
    "theme": "Frogs, territory and deck building",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/brother-ming-games/pond-frog-mayhem",
    "sourceAccess": "campaign_text",
    "scopeNote": "Campaign story and native reward listings were retrieved. Linked document permissions and image details were not tested.",
    "explanation": {
      "status": "observed",
      "note": "The story connects dice combat, pond control, card purchases and recurring abilities."
    },
    "rewards": {
      "status": "observed",
      "note": "Native rewards distinguish the standard game, deluxe edition, expansion and extra merchandise.",
      "sourceUrl": "https://www.backerkit.com/c/projects/brother-ming-games/pond-frog-mayhem/pledge_levels"
    },
    "shipping": {
      "status": "observed",
      "note": "The story gives regional estimates, weight and destination assumptions, and later fee collection."
    },
    "preview": {
      "status": "observed",
      "note": "A linked rules document is explicitly labelled as still in development."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "04",
    "title": "Lava Run",
    "category": "Board games",
    "theme": "Crafting and a dinosaur escape race",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/louie-s-loops/lava-run-the-craft-able-dinosaur-board-game-out-now",
    "sourceAccess": "campaign_text",
    "scopeNote": "Campaign text was retrieved. The reward listing timed out; video contents and image details were not inspected.",
    "explanation": {
      "status": "observed",
      "note": "The opening explains placing tiles to redirect lava while racing a dinosaur to safety."
    },
    "rewards": {
      "status": "unknown",
      "note": "The native reward request timed out; image content does not establish tier differences."
    },
    "shipping": {
      "status": "unknown",
      "note": "The retrieved story did not establish shipping costs, destinations or collection timing."
    },
    "preview": {
      "status": "unknown",
      "note": "A how to play video is embedded; a rules or sample download was not verified."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "05",
    "title": "Monarch: Bluffing and Butterflies",
    "category": "Board games",
    "theme": "Bluffing and simultaneous movement",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/le-fou/monarch-a-twisty-two-player-simultaneous-movement-game",
    "sourceAccess": "campaign_text",
    "scopeNote": "The platform labels this campaign cancelled. Story text was retrieved, but many substantive sections are images.",
    "explanation": {
      "status": "observed",
      "note": "The opening names bluffing and the goal of capturing an opponent's Monarch piece."
    },
    "rewards": {
      "status": "unknown",
      "note": "The native reward request timed out, leaving tier contents unverified."
    },
    "shipping": {
      "status": "unknown",
      "note": "A shipping section exists, but its substantive content returned as an uninspected image."
    },
    "preview": {
      "status": "unknown",
      "note": "The how to play section contains media; a public rules or sample target was not verified."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "06",
    "title": "The Unheist of Hearthburn House",
    "category": "Board games",
    "theme": "Kobolds, shifting rooms and temporary teams",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/zero-strategy-games/the-unheist-of-hearthburn-house-mansion-decorating-madness",
    "sourceAccess": "campaign_text",
    "scopeNote": "Campaign story and native rewards were retrieved. Image content was not inspected.",
    "explanation": {
      "status": "observed",
      "note": "The story explains drawing tokens, returning treasures, shared teams and individual scoring."
    },
    "rewards": {
      "status": "observed",
      "note": "Native rewards distinguish a game copy, gameplay upgrades and a larger merchandise bundle.",
      "sourceUrl": "https://www.backerkit.com/c/projects/zero-strategy-games/the-unheist-of-hearthburn-house-mansion-decorating-madness/pledge_levels"
    },
    "shipping": {
      "status": "unknown",
      "note": "A planned dispatch month is visible; rates and collection terms remain unverified in the image section."
    },
    "preview": {
      "status": "unknown",
      "note": "The retrieved sections did not establish a public rules or playable sample target."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "07",
    "title": "Quartz: The Card Game",
    "category": "Card games",
    "theme": "Risk, crystals and player interference",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/grok-games/quartz-the-card-game-press-your-luck-and-sabotage-friends",
    "sourceAccess": "campaign_text",
    "scopeNote": "Campaign story and native reward listings were retrieved. Rulebook link presence was recorded; file access was not tested.",
    "explanation": {
      "status": "observed",
      "note": "The story explains revealing cards, stopping, cave ins, attacks, defence and scoring."
    },
    "rewards": {
      "status": "observed",
      "note": "Native options distinguish a game copy, pledge manager access and a retailer deposit.",
      "sourceUrl": "https://www.backerkit.com/c/projects/grok-games/quartz-the-card-game-press-your-luck-and-sabotage-friends/pledge_levels"
    },
    "shipping": {
      "status": "observed",
      "note": "The story describes combined fulfilment and conditional shipping discounts across participating campaigns."
    },
    "preview": {
      "status": "observed",
      "note": "The how to play section offers a rulebook link to Google Drive."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "08",
    "title": "Riposte! and Cell Block 18",
    "category": "Card games",
    "theme": "Fencing and an asymmetric prison escape",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/absurdist-productions/riposte-and-cell-block-18-micro-card-games",
    "sourceAccess": "campaign_text",
    "scopeNote": "Campaign story and native rewards were retrieved. A rulebook included in a purchase is not counted as a public preview.",
    "explanation": {
      "status": "observed",
      "note": "Both games have described card actions, player roles and winning conditions."
    },
    "rewards": {
      "status": "observed",
      "note": "Native rewards distinguish either individual game from the bundle containing both.",
      "sourceUrl": "https://www.backerkit.com/c/projects/absurdist-productions/riposte-and-cell-block-18-micro-card-games/pledge_levels"
    },
    "shipping": {
      "status": "observed",
      "note": "The story gives regional postage estimates and explains later collection of shipping and tax."
    },
    "preview": {
      "status": "unknown",
      "note": "A packaged rulebook is described, but a public rulebook or sample target was not verified."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "09",
    "title": "The Fifth Season Roleplaying Game",
    "category": "Tabletop RPGs",
    "theme": "Community survival in the Broken Earth setting",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/green-ronin-publishing/the-fifth-season-roleplaying-game",
    "sourceAccess": "campaign_text",
    "scopeNote": "Campaign story text was retrieved. Native reward requests later failed; the comparison uses story text only.",
    "explanation": {
      "status": "observed",
      "note": "The story explains creating a community and using three dice to generate stunt points."
    },
    "rewards": {
      "status": "observed",
      "note": "The story distinguishes standard, special and PDF formats, and a signed bookplate bundle."
    },
    "shipping": {
      "status": "observed",
      "note": "The story explains later shipping charges, regional estimates and destination restrictions."
    },
    "preview": {
      "status": "observed",
      "note": "The campaign offers a free PDF quickstart and a Roll20 version."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "10",
    "title": "High School Cthulhu",
    "category": "Tabletop RPGs",
    "theme": "Teen drama and cosmic horror",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/gear-games/high-school-cthulhu-roleplaying-game",
    "sourceAccess": "campaign_text",
    "scopeNote": "Campaign story text was retrieved. Image based tier details were not inspected and the quickstart target was not tested.",
    "explanation": {
      "status": "observed",
      "note": "The story explains matching symbols in dice pools and the Drama and Madness systems."
    },
    "rewards": {
      "status": "unknown",
      "note": "Individual products are described, but exact tier differences were not verified in the image content."
    },
    "shipping": {
      "status": "observed",
      "note": "The story says shipping will be charged later through the pledge manager at actual cost."
    },
    "preview": {
      "status": "observed",
      "note": "The story offers a free quickstart through a link on mailchi.mp; target access was not tested."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "11",
    "title": "Sophont: Visceral Symbiotic Roleplaying",
    "category": "Tabletop RPGs",
    "theme": "Symbiotes and urban espionage",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/gwendolyn-clark/sophont-visceral-symbiotic-roleplaying",
    "sourceAccess": "campaign_text",
    "scopeNote": "Campaign text was retrieved. Shipping ranges shown only in an image and native reward details were not separately verified.",
    "explanation": {
      "status": "observed",
      "note": "The story describes missions, symbiotic pressure and its modified Panic Engine rules."
    },
    "rewards": {
      "status": "observed",
      "note": "The story states that the Field Kit adds a metal die and higher tiers add merchandise."
    },
    "shipping": {
      "status": "observed",
      "note": "The creator separates pledge prices from shipping, collected after physical goods are ready."
    },
    "preview": {
      "status": "observed",
      "note": "The campaign links to the free First Cut PDF on the creator's itch.io page."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "12",
    "title": "Shadow City Mysteries",
    "category": "Tabletop RPGs",
    "theme": "Clockwork noir and supernatural investigation",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/play-on-words-studios/shadow-city-mysteries-tabletop-roleplaying-game",
    "sourceAccess": "campaign_text",
    "scopeNote": "Campaign text and reward lists were retrieved. Later updates are outside this row's coded source scope.",
    "explanation": {
      "status": "observed",
      "note": "The story describes investigations, faction choices and a setting for 5E."
    },
    "rewards": {
      "status": "observed",
      "note": "Story lists distinguish PDF, hardcover, deluxe, equipment and tarot bundles."
    },
    "shipping": {
      "status": "unknown",
      "note": "A shipping section is listed, but the retrieved body contains an uninspected image."
    },
    "preview": {
      "status": "unknown",
      "note": "A public sample target was not verified in the retrieved campaign story."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "13",
    "title": "The Between",
    "category": "Tabletop RPGs",
    "theme": "Victorian monster hunters and mysteries",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/the-gauntlet/the-between",
    "sourceAccess": "campaign_text",
    "scopeNote": "Campaign story text was retrieved. Native reward listings and linked preview permissions were not separately inspected.",
    "explanation": {
      "status": "observed",
      "note": "The story explains the hunters' investigations and a mystery system without a predetermined solution."
    },
    "rewards": {
      "status": "unknown",
      "note": "The story describes several books, but a complete tier comparison was not inspected."
    },
    "shipping": {
      "status": "observed",
      "note": "The story separates shipping fees and gives domestic and international estimates by book count."
    },
    "preview": {
      "status": "observed",
      "note": "A BackerKit preview is linked to a Google Drive target."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "14",
    "title": "Liquid Euphoria: A Cairn RPG Adventure",
    "category": "Tabletop RPGs",
    "theme": "A small fantasy adventure and print formats",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/aleksandra-stasica-fedetibaldo/liquid-euphoria-a-cairn-rpg-adventure",
    "sourceAccess": "campaign_text",
    "scopeNote": "Campaign story text was retrieved, including product formats and fulfilment terms.",
    "explanation": {
      "status": "observed",
      "note": "The story identifies the Cairn 2E requirement, adventure premise and dungeon contents."
    },
    "rewards": {
      "status": "observed",
      "note": "The story distinguishes screen PDF, printable spreads, an art bundle and limited physical booklets."
    },
    "shipping": {
      "status": "observed",
      "note": "The story explains later fees, physical delivery regions and digital delivery through the pledge manager."
    },
    "preview": {
      "status": "unknown",
      "note": "The retrieved story did not establish a public sample or rules target."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "15",
    "title": "The Baron's Grip",
    "category": "Tabletop RPGs",
    "theme": "A forest sandbox campaign for Mausritter",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/m-allen-hall/the-baron-s-grip-a-campaign-for-mausritter",
    "sourceAccess": "campaign_text",
    "scopeNote": "Campaign story text and sample image labels were retrieved. The sample artwork itself was not visually inspected.",
    "explanation": {
      "status": "observed",
      "note": "The story explains the setting, resistance goal and exploration sites for Mausritter."
    },
    "rewards": {
      "status": "observed",
      "note": "The story distinguishes a PDF, a physical book and a printed asset bundle."
    },
    "shipping": {
      "status": "observed",
      "note": "The story states that shipping is excluded and collected later through the pledge manager."
    },
    "preview": {
      "status": "observed",
      "note": "Labelled example page spreads are embedded, with a warning that designs are not final."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "16",
    "title": "Sisters of the Old Blood",
    "category": "Miniatures and terrain",
    "theme": "Dark Victorian miniature files",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/tabletop-time/sisters-of-the-old-blood-3d-printable-wargaming-miniatures",
    "sourceAccess": "campaign_text",
    "scopeNote": "Campaign text was retrieved. The row assesses file delivery separately from physical shipping.",
    "explanation": {
      "status": "not_applicable",
      "note": "Miniature files are outside the gameplay field; the story describes 28 mm gaming compatibility."
    },
    "rewards": {
      "status": "unknown",
      "note": "The story describes core squads and optional bundles; exact native tier differences were not inspected."
    },
    "shipping": {
      "status": "not_applicable",
      "note": "Digital STL delivery is described through the pledge manager. Physical shipping is outside this row's scope."
    },
    "preview": {
      "status": "unknown",
      "note": "A free STL test file target was not verified in the retrieved story."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "17",
    "title": "Fighting Fantasy Heroes",
    "category": "Miniatures and terrain",
    "theme": "Digital models, physical miniatures and a collector box",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/myminifactory/fighting-fantasy-heroes-officially-licensed-miniatures",
    "sourceAccess": "campaign_text",
    "scopeNote": "Campaign story text was retrieved. Compatibility and delivery statements are recorded as creator statements.",
    "explanation": {
      "status": "not_applicable",
      "note": "Miniature and game box contents are outside this gameplay field; the story names compatible RPGs."
    },
    "rewards": {
      "status": "observed",
      "note": "The story distinguishes digital files, printed miniatures, a collector box and combined tiers."
    },
    "shipping": {
      "status": "observed",
      "note": "The creator names shipping regions and states that shipping and VAT are charged later."
    },
    "preview": {
      "status": "unknown",
      "note": "RPG material is included in rewards, but a public rules or sample target was not verified."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "18",
    "title": "Corpus Allatum",
    "category": "Miniatures and terrain",
    "theme": "A grimdark miniature in physical and file formats",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/mortal-models/corpus-allatum-physical-and-digital-miniature",
    "sourceAccess": "campaign_text",
    "scopeNote": "Campaign story text was retrieved. Native rewards and image details were not separately inspected.",
    "explanation": {
      "status": "not_applicable",
      "note": "A miniature is outside the gameplay field; the story identifies a 60 mm base and Trench Crusade use."
    },
    "rewards": {
      "status": "unknown",
      "note": "Physical and digital formats are identified, but exact native tier differences were not inspected."
    },
    "shipping": {
      "status": "observed",
      "note": "Physical shipping varies by destination and is charged later; STL delivery uses BackerKit."
    },
    "preview": {
      "status": "unknown",
      "note": "A free STL test file target was not verified in the retrieved story."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "19",
    "title": "Wasteland Sector",
    "category": "Miniatures and terrain",
    "theme": "Modular printable science fiction terrain",
    "platform": "Kickstarter",
    "campaignUrl": "https://www.kickstarter.com/projects/miniwargaming/wasteland-sector-modular-3d-printable-sci-fi-terrain",
    "sourceAccess": "navigation_only",
    "scopeNote": "The Kickstarter title and navigation were returned. The campaign body was unavailable to this read method, including on retry.",
    "explanation": {
      "status": "not_applicable",
      "note": "Terrain is outside the gameplay field. Its campaign title establishes the product category."
    },
    "rewards": {
      "status": "unknown",
      "note": "Only campaign navigation was retrieved, so reward contents remain unknown."
    },
    "shipping": {
      "status": "unknown",
      "note": "Only campaign navigation was retrieved, so shipping and delivery terms remain unknown."
    },
    "preview": {
      "status": "unknown",
      "note": "Only campaign navigation was retrieved, so a test file or sample target remains unknown."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "20",
    "title": "The Market District",
    "category": "Miniatures and terrain",
    "theme": "Printable market terrain",
    "platform": "Kickstarter",
    "campaignUrl": "https://www.kickstarter.com/projects/kathymillatt/the-market-district",
    "sourceAccess": "navigation_only",
    "scopeNote": "The Kickstarter title and navigation were returned. The creator homepage confirms the project and links its videos, but does not establish the coded campaign features.",
    "explanation": {
      "status": "not_applicable",
      "note": "Terrain is outside the gameplay field. The creator site identifies it as tabletop terrain."
    },
    "rewards": {
      "status": "unknown",
      "note": "Only campaign navigation was retrieved, so reward contents remain unknown."
    },
    "shipping": {
      "status": "unknown",
      "note": "Only campaign navigation was retrieved, so shipping and delivery terms remain unknown."
    },
    "preview": {
      "status": "unknown",
      "note": "Only campaign navigation was retrieved, so a test file or sample target remains unknown."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    },
    "supplementalSources": [
      {
        "label": "Kathy Millatt creator homepage",
        "url": "https://www.kathymillatt.co.uk/"
      }
    ]
  },
  {
    "id": "21",
    "title": "MiniMover",
    "category": "Dice and accessories",
    "theme": "A tool for moving distant miniatures",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/gaming-paper/minimover-move-miniatures-without-reaching-across-the-table",
    "sourceAccess": "campaign_text",
    "scopeNote": "Campaign story text was retrieved, including instructions, quantities and fee collection.",
    "explanation": {
      "status": "not_applicable",
      "note": "This is a gaming tool rather than a game; the story explains assembly and pushing or pulling miniatures."
    },
    "rewards": {
      "status": "observed",
      "note": "The story compares one MiniMover with a five unit option."
    },
    "shipping": {
      "status": "observed",
      "note": "The story states that shipping fees are separate and collected after the campaign."
    },
    "preview": {
      "status": "not_applicable",
      "note": "Game rules and STL samples are outside this accessory field."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "22",
    "title": "Sci Fi Metal Dice Sets",
    "category": "Dice and accessories",
    "theme": "Nine zinc dice designs",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/robin-s-nerd-supplies/sci-fi-metal-dice-sets",
    "sourceAccess": "campaign_text",
    "scopeNote": "Campaign story text was retrieved. The row records delivery wording without endorsing product claims.",
    "explanation": {
      "status": "not_applicable",
      "note": "This is a dice accessory; the story lists the seven dice in each set and design variants."
    },
    "rewards": {
      "status": "unknown",
      "note": "Design variants are described, but exact native tier differences were not inspected."
    },
    "shipping": {
      "status": "observed",
      "note": "The creator describes later shipping collection, weight based charges and excluded import fees."
    },
    "preview": {
      "status": "not_applicable",
      "note": "Game rules and STL samples are outside this accessory field."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "23",
    "title": "MECH Dice V.1",
    "category": "Dice and accessories",
    "theme": "Stainless steel dice",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/arthun/mech-dice-v-1-expansion-and-upgrade",
    "sourceAccess": "campaign_text",
    "scopeNote": "Campaign story text was retrieved. A timeline alone is not counted as shipping policy.",
    "explanation": {
      "status": "not_applicable",
      "note": "This is a dice accessory; the story describes materials, weight and surface treatment."
    },
    "rewards": {
      "status": "unknown",
      "note": "Exact native tier contents were not inspected."
    },
    "shipping": {
      "status": "unknown",
      "note": "A manufacturing and dispatch timeline is present; rates, destinations and collection terms remain unverified."
    },
    "preview": {
      "status": "not_applicable",
      "note": "Game rules and STL samples are outside this accessory field."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "24",
    "title": "Roll With History",
    "category": "Dice and accessories",
    "theme": "Dice containing specimen inclusions",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/mini-museum/roll-with-history-mini-museum-fanroll-dice",
    "sourceAccess": "campaign_text",
    "scopeNote": "Campaign story text was retrieved. Statements about authenticity, balance and delivery performance were not evaluated.",
    "explanation": {
      "status": "not_applicable",
      "note": "This is a dice collection; the story explains individual dice, sets and related accessories."
    },
    "rewards": {
      "status": "observed",
      "note": "The story distinguishes individual dice, polyhedral sets, collector sets and larger bundles."
    },
    "shipping": {
      "status": "observed",
      "note": "The story explains separate fees, country estimates, excluded destinations and duty collection."
    },
    "preview": {
      "status": "not_applicable",
      "note": "Game rules and STL samples are outside this accessory field."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  },
  {
    "id": "25",
    "title": "Headless Horseman Dice",
    "category": "Dice and accessories",
    "theme": "Sleepy Hollow themed dice and a bag",
    "platform": "BackerKit",
    "campaignUrl": "https://www.backerkit.com/c/projects/d-arcangel-productions/headless-horseman-dice",
    "sourceAccess": "campaign_text",
    "scopeNote": "Campaign story text was retrieved. Platform fulfilment labels do not establish shipping cost information.",
    "explanation": {
      "status": "not_applicable",
      "note": "This is a dice accessory; the story identifies the theme and an optional dice bag."
    },
    "rewards": {
      "status": "unknown",
      "note": "The story describes a dice bag stretch reward, but exact native tier differences were not inspected."
    },
    "shipping": {
      "status": "unknown",
      "note": "The retrieved story did not establish rates, destinations or shipping fee collection terms."
    },
    "preview": {
      "status": "not_applicable",
      "note": "Game rules and STL samples are outside this accessory field."
    },
    "mobile": {
      "status": "unknown",
      "note": "No rendered mobile view was inspected."
    }
  }
];
