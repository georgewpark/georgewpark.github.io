import { Project } from '../types/types'

export const filterList: string[] = [
  'Featured',
  'CSS Grid',
  'React',
  'Speech APIs',
  'Emoji',
  '3D',
  'Text Effects',
  'Other',
]

export const projectList: Project[] = [
  {
    id: 'erPRKg',
    title: 'Rick And Morty Character Search',
    description:
      'Using React to search and display character information retrieved from the Rick & Morty API.',
    image: 'rick-and-morty.jpg',
    categories: ['featured', 'react'],
  },
  {
    id: 'xeGmmP',
    title: 'Pizza Builder',
    description: "A 'create your own' style visual pizza builder using React.",
    video: 'pizza-builder.mp4',
    categories: ['featured', 'react', 'css-grid'],
  },
  {
    id: 'MqVoYP',
    title: '3D Emoji Town',
    description: 'An animated 3D town created using emojis and pure CSS.',
    video: 'emoji-town.mp4',
    categories: ['featured', 'emoji', '3d'],
  },
  {
    id: 'VXrwOP',
    title: 'Instagram Profile Layout',
    description:
      'Using CSS grid with flexbox fallback to re-create an Instagram profile layout.',
    image: 'instagram-profile-layout.jpg',
    categories: ['featured', 'css-grid'],
  },
  {
    id: 'gKrVJe',
    title: 'Change Color With Voice',
    description:
      'Using the JavaScript speech recognition API to take a spoken CSS color and apply that color to a 3D cube.',
    video: 'change-color-with-voice.mp4',
    categories: ['featured', 'speech-apis', '3d'],
  },
  {
    id: 'PQweLr',
    title: 'LastPass Vault Layout',
    description:
      'Using CSS grid with flexbox fallback to re-create the LastPass vault layout.',
    image: 'lastpass-vault-layout.jpg',
    categories: ['css-grid'],
  },
  {
    id: 'vdqYom',
    title: 'Responsive Image Gallery',
    description:
      'Using CSS grid with flexbox fallback to create a responsive image gallery with no media queries.',
    image: 'image-gallery.jpg',
    categories: ['css-grid'],
  },
  {
    id: 'oEwYYy',
    title: 'YouTube Channel Layout',
    description:
      'Using CSS grid with flexbox fallback to re-create the layout of a YouTube channel page.',
    image: 'youtube-channel-layout.jpg',
    categories: ['css-grid'],
  },
  {
    id: 'bLLzJK',
    title: 'Trello Board Layout',
    description:
      'Using CSS grid with flexbox fallback to re-create the layout of a Trello board.',
    image: 'trello-board-layout.jpg',
    categories: [],
  },
  {
    id: 'zpRjRK',
    title: 'Full-Screen Background Video',
    description:
      "Using CSS grid and the 'object-fit' property to create a full-screen background video.",
    video: 'full-screen-video.mp4',
    categories: ['css-grid'],
  },
  {
    id: 'xJREOG',
    title: 'Responsive Emoji Toggles',
    description:
      'Using pure CSS checkbox functionality to create responsive emoji toggles.',
    video: 'emoji-toggles.mp4',
    categories: ['emoji'],
  },
  {
    id: 'bMWGRB',
    title: 'GIPHY Search API',
    description:
      'Using React to search and display gifs retrieved from the GIPHY Search API.',
    image: 'giphy-search-api.jpg',
    categories: ['react'],
  },
  {
    id: 'MBvMEN',
    title: 'SpaceX Launches Table',
    description:
      'Using React to retrieve mission data from the SpaceX API and display in a responsive table.',
    image: 'spacex-launches-table.jpg',
    categories: ['react'],
  },
  {
    id: 'GBYqZv',
    title: 'Lock & Unlock With Voice',
    description:
      'Using the JavaScript speech recognition API to lock and unlock a padlock.',
    video: 'lock-unlock-with-voice.mp4',
    categories: ['speech-apis'],
  },
  {
    id: 'mKgENQ',
    title: 'Filter Image With Voice',
    description:
      'Using the JavaScript speech recognition API to take a spoken CSS filter and apply that filter to an image.',
    video: 'filter-image-with-voice.mp4',
    categories: ['speech-apis'],
  },
  {
    id: 'jpovrm',
    title: 'Take Notes With Voice',
    description:
      'Using the JavaScript speech recognition API to retrieve a spoken note and display that note on-screen with CRUD logic.',
    video: 'take-notes-with-voice.mp4',
    categories: ['speech-apis'],
  },
  {
    id: 'aGNjZB',
    title: 'Phonetic Alphabet',
    description:
      'Press a letter key and get the corresponding term from the NATO phonetic alphabet combined with the speech synthesis API.',
    video: 'phonetic-alphabet.mp4',
    categories: ['speech-apis'],
  },
  {
    id: 'RymbRB',
    title: 'Change Element With Voice',
    description:
      'Using the JavaScript speech recognition API to retrieve a spoken chemical element and display that element on-screen.',
    video: 'change-element-with-voice.mp4',
    categories: ['speech-apis'],
  },
  {
    id: 'oVgGyM',
    title: 'Emoji Temperature Slider',
    description:
      "A temperature slider that uses emojis to envision how you'll likely feel at the given temperature.",
    video: 'emoji-temperature-slider.mp4',
    categories: ['emoji'],
  },
  {
    id: 'aazBGj',
    title: 'Simple Emoji Animations',
    description: 'Using CSS pseudo-elements to create simple emoji animations.',
    video: 'simple-emoji-animations.mp4',
    categories: ['emoji'],
  },
  {
    id: 'WgGmPq',
    title: 'Emoji Scratch Card',
    description: "An emoji based 'match 3' style scratch card game.",
    video: 'emoji-scratch-card.mp4',
    categories: ['emoji'],
  },
  {
    id: 'QWrxPyJ',
    title: '3D Paper Shredder',
    description:
      'A functional 3D CSS paper shredder, type to edit the text on the paper then press the green button to shred your text.',
    video: 'paper-shredder.mp4',
    categories: ['3d'],
  },
  {
    id: 'bQxRyN',
    title: 'Doggo Photo Printer',
    description:
      'Press the power button to switch on the printer and print a photo of a random doggo.',
    video: 'doggo-photo-printer.mp4',
    categories: ['3d'],
  },
  {
    id: 'OBBNmL',
    title: 'Trick or Treat Surprise Box',
    description:
      'A Halloween surprise box, click to open the box with a 50/50 chance of getting a trick or a treat.',
    video: 'trick-or-treat-box.mp4',
    categories: ['emoji', '3d'],
  },
  {
    id: 'wvEExqg',
    title: 'CSS Gradient Radar Scanner',
    description: 'A responsive animated radar scanner using CSS gradients.',
    video: 'radar-scanner.mp4',
    categories: ['featured', 'other'],
  },
  {
    id: 'EEGJEj',
    title: 'CSS Gradient Rounded Borders',
    description:
      'Using the CSS background-clip property to create rounded gradient borders.',
    image: 'gradient-rounded-borders.jpg',
    categories: ['other'],
  },
  {
    id: 'poVwZzP',
    title: 'Decision Tree',
    description: 'Using Tailwind CSS to create a decision tree component.',
    video: 'decision-tree.mp4',
    categories: ['other'],
  },
  {
    id: 'abGmrmr',
    title: 'SVG Theming with currentColor',
    description:
      'Using the CSS color property to theme SVG elements with currentColor.',
    video: 'svg-currentcolor.mp4',
    categories: ['other'],
  },
  {
    id: 'ELemzZ',
    title: 'Radial Gradient Spotlight',
    description:
      'Using CSS radial gradients to create a focusable spotlight effect.',
    video: 'radial-gradient-spotlight.mp4',
    categories: ['other'],
  },
  {
    id: 'QQZXNy',
    title: 'Live Screen Effect Using matrix3d()',
    description:
      'Using the matrix3d() CSS function to transform an iframe in 3D space to create an interactive laptop screen effect.',
    video: 'live-screen-effect.mp4',
    categories: ['other'],
  },
  {
    id: 'wEQpmo',
    title: 'Refracted Floating Text',
    description:
      'Using pure CSS to create an animated refracted floating text effect.',
    video: 'refracted-text-effect.mp4',
    categories: ['text-effects'],
  },
  {
    id: 'jeBbGN',
    title: 'Black Mirror Cracked Text',
    description:
      'Using pure CSS to re-create the cracked text effect from the Black Mirror TV show intro.',
    image: 'black-mirror.jpg',
    categories: ['text-effects'],
  },
  {
    id: 'zYOegLr',
    title: 'Fade-in Knockout Text',
    description:
      'Using the CSS mix-blend-mode property to create animated transparent knockout text.',
    video: 'fade-in-text.mp4',
    categories: ['text-effects'],
  },
  {
    id: 'MrjbEr',
    title: 'Flickering Neon Sign',
    description:
      'Using CSS text-shadow and box-shadow properties to create an editable animated flickering neon sign effect.',
    video: 'neon-sign.mp4',
    categories: ['text-effects'],
  },
  {
    id: 'LBPJGV',
    title: 'Video Knockout Text',
    description:
      'Using the CSS mix-blend-mode property to create knockout text with a custom YouTube video and light/dark theme.',
    video: 'knockout-video-text.mp4',
    categories: ['text-effects'],
  },
  {
    id: 'bapRBQ',
    title: 'Gradient Text Background',
    description:
      'Using the background-clip CSS property to apply a gradient background to text.',
    image: 'gradient-text.jpg',
    categories: ['text-effects'],
  },
  {
    id: 'ZoaRrV',
    title: 'CSS Gradient Clip-Path Borders',
    description:
      'Using the CSS background-clip and clip-path properties to create shaped gradient borders.',
    image: 'gradient-clip-borders.jpg',
    categories: [],
  },
]
