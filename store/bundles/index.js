export default {
  state() {
    return {
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
          id: 1,
          type: 'mum',
          size: 'large single',
          description: '9.5" Flower with Sunburst points',
          price: 70,
          credits: [
            { optionid: 1, credits: 2 }
          ]
        },
        {
          id: 2,
          type: 'garter',
          size: 'large single',
          description: '6.5" Flower with Sunburst points',
          price: 67.5,
          credits: [
            { optionid: 1, credits: 1 }
          ]
        }
      ]
    }
  },
}
