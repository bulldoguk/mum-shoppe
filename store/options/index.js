export default {
  state() {
    return {
      list: [],
      old_list: [
        {
          id: 'section1',
          title: 'Flower Back Ribbons',
          options: [
            { id: 'flowerback1', name: 'Loops', price: 4 },
            { id: 'flowerback2', name: 'Points & Notch', price: 5 },
            { id: 'flowerback3', name: 'Sunbursts', price: 5 },
            { id: 'flowerback4', name: 'Trendy Loops', price: 6 }
          ]
        },
        {
          id: 'section2',
          title: 'Chains',
          options: [
            { id: 'chains1', name: 'Loops', price: 4 },
            { id: 'chains2', name: 'Points & Notch', price: 5 },
            { id: 'chains3', name: 'Sunbursts', price: 5 },
            { id: 'chains4', name: 'Trendy Loops', price: 6 }
          ]
        },
      ],
    }
  },
}
