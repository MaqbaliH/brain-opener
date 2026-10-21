import { BookMasteryPackage } from '../../../types/book';
import { hbCh01Mastery, hbCh02Mastery } from './ch01-ch02';
import { hbCh03Mastery, hbCh04Mastery, hbCh05Mastery } from './ch03-ch05';

export const hemingwaysBoatBook: BookMasteryPackage = {
  bookSlug: 'hemingways-boat',
  title: "Hemingway's Boat: Everything He Loved in Life, and Lost",
  subtitle:
    'Creative Mastery Under Pressure, The Iceberg Theory of Prose, The Pilar as Psychological Sanctuary, and the Fragility of Genius',
  author: 'Paul Hendrickson',
  publicationYear: 2011,
  publisher: 'Alfred A. Knopf',
  coverAsset: 'cover.png',
  totalChapters: 5,
  totalSourceWords: 204137,
  totalFiguresExtracted: 28,
  corePromise:
    'A twenty-seven-year structural investigation into Ernest Hemingway’s creative discipline, mentorship, and psychological duality through the prism of his custom thirty-eight-foot Wheeler Playmate cruiser Pilar—revealing how physical sanctuary design, the 1:7 Iceberg Principle, and the "Never Pump the Well Dry" protocol sustained masterpieces amid concussive and emotional entropy.',
  architecturalOverview:
    'Synthesizing the entire 204,137-word biography across five mastery modules, this package deconstructs: (1) 1934 & The Commissioning of the Pilar [Ch 1: April 1934 arrival on the SS Paris, Marlene Dietrich, Wheeler Shipyard Brooklyn customization with dual 75-hp Chrysler and 40-hp Lycoming engines, 2,400-lb ice hold, lowered stern roller, standing-desk dawn pencil discipline, the Iceberg Principle, and the final 210-word June 1961 Fritz Saviers letter]; (2) Bimini, Key West, and Arnold Samuelson [Ch 2: 22-year-old hobo violinist Arnold "Mice" Samuelson haunted by the 1931 Winnie Ruth Judd trunk murder of his sister Hedvig, Monologue to the Maestro, the four rules of the Unpumped Well, Carlos Gutiérrez and Bra Saunders, the 10,000-porpoise stampede, and Samuelson’s Mesquite Lumber Company in Texas]; (3) Finca Vigía, War Correspondences, and Fracturing Worlds [Ch 3: 1935 Bimini "might-against-might" unmutilated 381-lb and 319-lb bluefin tuna, ruining Mike Strater’s 1,000-lb marlin with a Thompson submachine gun, Dodi Knapp dockside brawl, Martha Gellhorn, Gregorio Fuentes at Cojímar, and WWII "Crook Factory" Q-boat patrols]; (4) The Old Man and the Sea Resurrection [Ch 4: Rebounding from the September 1950 critical disaster of Across the River via the six-week Jan–Feb 17, 1951 sprint on the 26,500-word novella witnessed by Walter Houk and Nita Jensen, and the twin January 1954 Ugandan plane crashes at Murchison Falls and Butiaba]; and (5) Hunger of Memory & Ketchum Legacy [Ch 5: The father-son mirror with Gregory ("Gigi" / Gloria) Hemingway, Pauline’s October 1, 1951 shock death, the August 1954 "Rubbed out" reconciliation, Gregory’s heroic years as sole country doctor in Jordan, Montana, The Garden of Eden, A Moveable Feast, Mayo Clinic ECT memory erasure, and Pilar preserved at Finca Vigía].',
  chapters: [
    hbCh01Mastery,
    hbCh02Mastery,
    hbCh03Mastery,
    hbCh04Mastery,
    hbCh05Mastery
  ]
};
