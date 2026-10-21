import { BookMasteryPackage } from '../../../types/book';
import { rottpCh01Mastery, rottpCh02Mastery } from './ch01-ch02';
import { rottpCh03Mastery, rottpCh04Mastery } from './ch03-ch04';

export const revengeOfTheTippingPointBook: BookMasteryPackage = {
  bookSlug: 'revenge-of-the-tipping-point',
  title: 'Revenge of the Tipping Point',
  subtitle: 'Overstories, Superspreaders, Magic Thirds, and the Rise of Social Engineering',
  author: 'Malcolm Gladwell',
  publicationYear: 2024,
  publisher: 'Little, Brown and Company',
  coverAsset: 'cover.png',
  totalChapters: 4,
  totalSourceWords: 82547,
  totalFiguresExtracted: 11,
  corePromise:
    'A forensic investigation into the dark underside of social epidemics—revealing how implicit community "Overstories," nonlinear "Magic Third" group-proportion cliffs (25%–33%), and hyper-concentrated biological and institutional "Superspreaders" are used to engineer, amplify, or contain contagious behavior.',
  architecturalOverview:
    'Synthesizing all nine book chapters across four structural modules, the package deconstructs: (1) Small-Area Variation & Localized Overstories [Ch 1: Robert "Casper" Brown’s 175 Los Angeles bank takeovers vs. Willie Sutton’s solo New York craft, John Wennberg’s Vermont tonsillectomy paradox, David Molitor’s cardiologist migration shift, Elisa Sobo’s Waldorf vaccine study, and how Miami’s 1980 triple shock enabled Philip Esformes’s $1B Medicare fraud]; (2) Monoculture Fragility & Zeitgeist Overstories [Ch 2: Seth Abrutyn and Anna Mueller’s Poplar Grove adolescent suicide cluster, Stephen O’Brien’s cheetah skin-graft bottleneck and Oregon FIP outbreak, Melody Roelke-Parker’s Texas cougar hybridization of the Florida panther, and how the 1961 Wilshire survivors’ club and NBC’s 1978 Holocaust miniseries rewrote global memory]; (3) The Magic Third & Covert Proportion Engineering [Ch 3: Rosabeth Moss Kanter’s 85:15 tokenism, Ursula Burns and Indra Nooyi, 3-of-9 corporate boards, Damon Centola’s 25% name game, Tara Yosso’s classroom math gap, the Palo Alto Lawrence Tract 1/3 quota, and Harvard’s ALDC/varsity rugby proportion cap from Abbott Lawrence Lowell to SFFA]; and (4) Biological & Institutional Superspreaders [Ch 4: The Biogen C2416T COVID-19 outbreak, Donald Stedman’s 5% smog sensors, vocal-fold mucus viscosity and FEND, Will & Grace breaking Bonnie Dow’s rules to tip marriage equality, and the three-act anatomy of the opioid crisis across Paul Madden’s 1939 triplicate pads, McKinsey’s Decile-10 "Super Core" doctors, and the 2010 OxyContin OP reformulation backfire].',
  chapters: [
    rottpCh01Mastery,
    rottpCh02Mastery,
    rottpCh03Mastery,
    rottpCh04Mastery,
  ],
};
