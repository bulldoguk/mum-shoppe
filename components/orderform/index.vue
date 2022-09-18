<template>
  <div class="orderform">
    <Customer />
    <RibbonNames />
    <Instructions />
    <Bundles />
    <Section
      v-for="section of options"
      :key="section.id"
      :section="section"
    />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapGetters, mapMutations } from 'vuex'
import RibbonNames from './ribbonNames.vue'
import Instructions from './instructions.vue';
import Customer from './customer.vue';
import Bundles from './bundles.vue';
import Section from './section.vue';

export default defineComponent({
    setup() { },
    mounted() { },
    computed: {
        ...mapGetters({
            options: "options/list",
            shoppeGuid: "shoppes/getShoppeGuid",
        }),
        shopSlug() {
            const parts = this.$route.params.pathMatch.split("/");
            return parts[0];
        },
        thisShoppeGuid() {
            return this.shoppeGuid(this.shopSlug);
        },
    },
    methods: {
        ...mapMutations({
        // addShoppes: 'shoppes/shoppesList',
        }),
    },
    components: { RibbonNames, Instructions, Customer, Bundles, Section }
})
</script>
