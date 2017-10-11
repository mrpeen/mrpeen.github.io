import peen from './icons/peen.png';
import blush from './icons/blush.png';
import condom from './icons/condom.png';
import handcuffs from './icons/handcuffs.png';
import ballgag from './icons/ballgag.png';
import collar from './icons/collar.png';
import eyeMask from './icons/eye-mask.png';
import latexMask from './icons/latex-mask.png';
import heartCollar from './icons/heart-collar.png';
import hishiKarada from './icons/hishi-karada.png';
import wand from './icons/wand.png';

export default [
  {
    id: 1,
    name: 'skintone',
    icon: peen,
    isSelected: true,
    toTakeOff: false,
    colorChoiceOnly: true,
    items: [
      {
        id: 1,
        fill: '#FFC9EF',
        stroke: '#FFABE6'
      },
      {
        id: 2,
        fill: '#a6fcfc',
        stroke: '#71e5f2'
      },
      {
        id: 3,
        fill: '#dfabf2',
        stroke: '#d06bf4'
      },
      {
        id: 4,
        fill: '#9de295',
        stroke: '#5ecc51'
      },
      {
        id: 5,
        fill: '#f7f25d',
        stroke: '#e8d90b'
      },
      {
        id: 11,
        fill: '#c8c6ef',
        stroke: '#ada9f2'
      },      
      {
        id: 6,
        fill: '#f9b672',
        stroke: '#f78f25'
      },
      {
        id: 7,
        fill: '#90f9e8',
        stroke: '#4de2ca'
      },
      {
        id: 8,
        fill: '#eaceef',
        stroke: '#e2a8ed'
      },
      {
        id: 9,
        fill: '#f4abf3',
        stroke: '#ef83ee'
      },
      {
        id: 10,
        fill: '#b2e2f7',
        stroke: '#83ceef'
      }
    ]
  },
  {
    id: 2,
    name: 'blush',
    icon: blush,
    isSelected: false,
    toTakeOff: false,
    colorChoiceOnly: true,
    items: [
      {
        id: 1,
        fill: '#ff81d2'
      },
      {
        id: 2,
        fill: '#ea8f8f'
      },
      {
        id: 3,
        fill: '#FFC9EF'
      },
      {
        id: 4,
        fill: '#f7a3b1'
      },
      {
        id: 5,
        fill: '#f4c6ce'
      },
      {
        id: 6,
        fill: '#ed7bb2'
      },
      {
        id: 7,
        fill: '#f49c61'
      },
      {
        id: 8,
        fill: '#f28ef2'
      },
      {
        id: 9,
        fill: '#fcd4ed'
      }
    ]
  },
  {
    id: 3,
    name: 'toys',
    icon: handcuffs,
    isSelected: false,
    toTakeOff: true,
    colorChoiceOnly: false,
    items: [
      {
        id: 1,
        name: 'handcuffs',
        icon: handcuffs
      },
      {
        id: 2,
        name: 'ballgag',
        icon: ballgag
      },
      {
        id: 3,
        name: 'eyeMask',
        icon: eyeMask
      },
      {
        id: 4,
        name: 'collar',
        icon: collar
      },
      {
        id: 5,
        name: 'latexMask',
        icon: latexMask
      },
      {
        id: 6,
        name: 'heartCollar',
        icon: heartCollar
      },
      {
        id: 7,
        name: 'hishiKarada',
        icon: hishiKarada
      },
      {
        id: 8,
        name: 'wand',
        icon: wand
      }
    ]
  },
  {
    id: 4,
    name: 'condom',
    icon: condom,
    isSelected: false,
    toTakeOff: true,
    colorChoiceOnly: true,
    items: [
      {
        id: 1,
        fill: '#FFABE6'
      },
      {
        id: 2,
        fill: '#71e5f2'
      },
      {
        id: 3,
        fill: '#d06bf4'
      },
      {
        id: 4,
        fill: '#e8d90b'
      },
      {
        id: 5,
        fill: '#4de2ca'
      },
      {
        id: 6,
        fill: '#f78f25'
      },
      {
        id: 7,
        fill: '#edf3fc'
      }
    ]
  },
  {
    id: 5,
    name: 'background',
    icon: '',
    isSelected: false,
    toTakeOff: true,
    colorChoiceOnly: false,
    items: []
  }
]
