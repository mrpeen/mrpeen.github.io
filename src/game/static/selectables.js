import peen from './icons/peen.png';
import blush from './icons/blush.png';
import condom from './icons/condom.png';
import handcuffs from './icons/handcuffs.png';
import ballgag from './icons/ballgag.png';
import collar from './icons/collar.png';
import collarRed from './icons/collar-red.png';
import eyeMask from './icons/eye-mask.png';
import latexMask from './icons/latex-mask.png';
import latexMaskPink from './icons/latex-mask-pink.png';
import heartCollar from './icons/heart-collar.png';
import heartCollarPink from './icons/heart-collar-pink.png';
import hishiKarada from './icons/hishi-karada.png';
import wand from './icons/wand.png';
import ankleCuffs from './icons/ankle-cuffs.png';
import ropeCuffs from './icons/rope-cuffs.png';
import thoughtBubble from './icons/thought-bubble.png';
import room from './icons/room.png';
import Clouds from './icons/clouds.png';
import Galaxy from './icons/galaxy.jpg';
import Galaxy2 from './icons/galaxy2.jpg';
import Galaxy3 from './icons/galaxy3.jpg';
import Sharks from './icons/sharks.jpg';
import Sparkle from './icons/sparkle.png';
import CloudsBg from './backgrounds/clouds.png';
import GalaxyBg from './backgrounds/galaxy.jpg';
import Galaxy2Bg from './backgrounds/galaxy2.jpg';
import Galaxy3Bg from './backgrounds/galaxy3.jpg';
import SharksBg from './backgrounds/sharks.jpg';
import SparkleBg from './backgrounds/sparkle.png';

export default [
  {
    id: 1,
    name: 'skintone',
    icon: peen,
    isSelected: true,
    toClear: false,
    items: [
      {
        id: 1,
        type: 'color',
        fill: '#FFC9EF',
        stroke: '#FFABE6'
      },
      {
        id: 2,
        type: 'color',
        fill: '#a6fcfc',
        stroke: '#71e5f2'
      },
      {
        id: 3,
        type: 'color',
        fill: '#dfabf2',
        stroke: '#d06bf4'
      },
      {
        id: 4,
        type: 'color',
        fill: '#9de295',
        stroke: '#5ecc51'
      },
      {
        id: 5,
        type: 'color',
        fill: '#f7f25d',
        stroke: '#e8d90b'
      },
      {
        id: 6,
        type: 'color',
        fill: '#c8c6ef',
        stroke: '#ada9f2'
      },      
      {
        id: 7,
        type: 'color',
        fill: '#f9b672',
        stroke: '#f78f25'
      },
      {
        id: 8,
        type: 'color',
        fill: '#eaceef',
        stroke: '#e2a8ed'
      },
      {
        id: 9,
        type: 'color',
        fill: '#f4abf3',
        stroke: '#ef83ee'
      },
      {
        id: 10,
        type: 'color',
        fill: '#90f9e8',
        stroke: '#4de2ca'
      },
      {
        id: 11,
        type: 'color',
        fill: '#b2e2f7',
        stroke: '#83ceef'
      }
    ]
  },
  {
    id: 2,
    name: 'makeUp',
    icon: blush,
    isSelected: false,
    toClear: false,
    items: [
      {
        id: 1,
        type: 'color',
        fill: '#ff81d2'
      },
      {
        id: 2,
        type: 'color',
        fill: '#ea8f8f'
      },
      {
        id: 3,
        type: 'color',
        fill: '#FFC9EF'
      },
      {
        id: 4,
        type: 'color',
        fill: '#f7a3b1'
      },
      {
        id: 5,
        type: 'color',
        fill: '#f4c6ce'
      },
      {
        id: 6,
        type: 'color',
        fill: '#ed7bb2'
      },
      {
        id: 7,
        type: 'color',
        fill: '#f49c61'
      },
      {
        id: 8,
        type: 'color',
        fill: '#f28ef2'
      },
      {
        id: 9,
        type: 'color',
        fill: '#fcd4ed'
      }
    ]
  },
  {
    id: 3,
    name: 'toys',
    icon: handcuffs,
    isSelected: false,
    toClear: true,
    items: [
      {
        id: 1,
        type: 'icon',
        name: 'handcuffs',
        icon: handcuffs,
        clears: [13]
      },
      {
        id: 2,
        type: 'icon',
        name: 'ballgag',
        icon: ballgag,
        clears: []
      },
      {
        id: 3,
        type: 'icon',
        name: 'eyeMask',
        icon: eyeMask,
        clears: []
      },
      {
        id: 4,
        type: 'icon',
        name: 'collar',
        icon: collar,
        clears: [5, 8, 9]
      },
      {
        id: 5,
        type: 'icon',
        name: 'collarRed',
        icon: collarRed,
        clears: [4, 8, 9]
      },
      {
        id: 6,
        type: 'icon',
        name: 'latexMask',
        icon: latexMask,
        clears: [7]
      },
      {
        id: 7,
        type: 'icon',
        name: 'latexMaskPink',
        icon: latexMaskPink,
        clears: [6]
      },
      {
        id: 8,
        type: 'icon',
        name: 'heartCollar',
        icon: heartCollar,
        clears: [4, 5, 9]
      },
      {
        id: 9,
        type: 'icon',
        name: 'heartCollarPink',
        icon: heartCollarPink,
        clears: [4, 5, 8]
      },
      {
        id: 10,
        type: 'icon',
        name: 'hishiKarada',
        icon: hishiKarada,
        clears: []
      },
      {
        id: 11,
        type: 'icon',
        name: 'wand',
        icon: wand,
        clears: []
      },
      {
        id: 12,
        type: 'icon',
        name: 'ankleCuffs',
        icon: ankleCuffs,
        clears: []
      },
      {
        id: 13,
        type: 'icon',
        name: 'ropeCuffs',
        icon: ropeCuffs,
        clears: [1]
      },
      {
        id: 14,
        type: 'icon',
        name: 'thoughtBubble',
        icon: thoughtBubble,
        clears: []
      }
    ]
  },
  {
    id: 4,
    name: 'condom',
    icon: condom,
    isSelected: false,
    toClear: true,
    items: [
      {
        id: 1,
        type: 'color',
        fill: '#FFABE6'
      },
      {
        id: 2,
        type: 'color',
        fill: '#71e5f2'
      },
      {
        id: 3,
        type: 'color',
        fill: '#ada9f2'
      },
      {
        id: 4,
        type: 'color',
        fill: '#e8d90b'
      },
      {
        id: 5,
        type: 'color',
        fill: '#82edde'
      },
      {
        id: 6,
        type: 'color',
        fill: '#f78f25'
      },
      {
        id: 7,
        type: 'color',
        fill: '#edf3fc'
      }
    ]
  },
  {
    id: 5,
    name: 'background',
    icon: room,
    isSelected: false,
    toClear: true,
    items: [
      {
        id: 1,
        type: 'color',
        fill: '#c3f7f1'
      },
      {
        id: 2,
        type: 'color',
        fill: '#fcdbfa'
      },
      {
        id: 3,
        type: 'color',
        fill: '#000'
      },
      {
        id: 4,
        type: 'color',
        fill: '#cce8ae'
      },
      {
        id: 5,
        type: 'color',
        fill: '#f9f5c0'
      },
      {
        id: 6,
        type: 'background',
        fill: CloudsBg,
        icon: Clouds
      },
      {
        id: 7,
        type: 'background',
        fill: GalaxyBg,
        icon: Galaxy
      },
      {
        id: 8,
        type: 'background',
        fill: Galaxy2Bg,
        icon: Galaxy2
      },
      {
        id: 9,
        type: 'background',
        fill: Galaxy3Bg,
        icon: Galaxy3
      },
      {
        id: 10,
        type: 'background',
        fill: SharksBg,
        icon: Sharks
      },
      {
        id: 11,
        type: 'background',
        fill: SparkleBg,
        icon: Sparkle
      }
    ]
  }
]
