export default {
  state() {
    return {
      customer: {
        email: '',
        name: '',
        cellPhone: '',
        orderDate: '',
        KHSBandMember: false,
        KHSBandMemberColorGuard: false,
        bandInstrument: '',
        wearerGrade: { name: 'Junior', colors: 'red/silver/white' },
        orderTitle: ''
      },
      ribbonNames: {
        ribbonName1: '',
        grade1: '',
        activity1: '',
        school1: '',
        ribbonName2: '',
        grade2: '',
        activity2: '',
        school2: '',
      },
      bundle: null,
      options: [],
      guid: '',
      shoppe_guid: '',
      notes: null,
    }
  },
}
