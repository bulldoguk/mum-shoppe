export default {
  state() {
    return {
      selected: 0,
      list: [
        {
          id: 1,
          type: 'mum',
          size: 'single',
          description: '6.5" Flower with traditional loops',
          price: 70,
          credits: [
            { optionid: 1, credits: 2 }
          ]
        },
        {
          id: 2,
          type: 'garter',
          size: 'single',
          description: '5.5" Flower with traditional loops',
          price: 67.5,
          credits: [
            { optionid: 1, credits: 1 }
          ]
        },
        {
          id: 3,
          type: 'mum',
          size: 'large single',
          description: '9.5" Flower with Sunburst points',
          price: 70,
          credits: [
            { optionid: 1, credits: 2 }
          ]
        },
        {
          id: 4,
          type: 'garter',
          size: 'large single',
          description: '6.5" Flower with Sunburst points',
          price: 67.5,
          credits: [
            { optionid: 1, credits: 1 }
          ]
        },
        {
          id: 5,
          type: 'mum',
          size: 'heart',
          description: '6.5" Flower with Points and Notch',
          price: 97.5,
          credits: [
            { optionid: 1, credits: 2 }
          ]
        },
        {
          id: 6,
          type: 'garter',
          size: 'heart',
          description: '4" Flower with Points and Notch',
          price: 80,
          credits: [
            { optionid: 1, credits: 1 }
          ]
        },
        {
          id: 7,
          type: 'mum',
          size: 'large heart',
          description: '7.5" Flower with Trendy Loops',
          price: 113,
          credits: [
            { optionid: 1, credits: 1 }
          ]
        },
        {
          id: 8,
          type: 'mum',
          size: 'paw',
          description: '(4) 3.5" & (1) 7.5" flower with Boa',
          price: 135,
          credits: [
            { optionid: 1, credits: 1 }
          ]
        },
        {
          id: 9,
          type: 'mum',
          size: 'large paw',
          description: '(4) 5.5" & (1) 9.5" flower with Boa',
          price: 160,
          credits: [
            { optionid: 1, credits: 1 }
          ]
        },
      ]
    }
  },
}
