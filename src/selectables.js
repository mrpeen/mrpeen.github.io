import peen from './icons/peen.png';
import blush from './icons/blush.png';
import condom from './icons/condom.png';

export default [
  {
    id: 1,
    name: 'skintone',
    icon: peen,
    isSelected: true,
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
        fill: '#f7f25d',
        stroke: '#e8d90b'
      },
      {
        id: 5,
        fill: '#90f9e8',
        stroke: '#4de2ca'
      }
    ]
  },
  {
    id: 2,
    name: 'blush',
    icon: blush,
    isSelected: false,
    items: []
  },
  {
    id: 3,
    name: 'background',
    icon: '',
    isSelected: false,
    items: []
  },
  {
    id: 4,
    name: 'condom',
    icon: condom,
    isSelected: false,
    items: []
  },
  {
    id: 5,
    name: 'toys',
    icon: '',
    isSelected: false,
    items: []
  }
]
