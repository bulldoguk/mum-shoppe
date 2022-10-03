<template>
  <div class="modal-dialog pointer-events-none relative w-auto">
    <div
      class="modal-content pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none"
    >
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-gray-200 p-4"
      >
        <h5
          class="text-xl font-medium leading-normal text-gray-800"
          id="exampleModalLabel"
        >
          Secure login
        </h5>
        <button
          type="button"
          class="btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body relative p-4">
        <div class="flex mx-auto">
          <div class="w-full p-2 rounded-lg border-2 flex flex-row justify-between cursor-pointer" @click="doLogin">
            <SvgBrandGoogle class="h-12" />
            <div class="font-semibold">Login with Google</div>
          </div>
        </div>
      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t border-gray-200 p-4"
      >
        <button
          type="button"
          class="ml-1 inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
          @click="clearModal"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations({
      clearModal: 'MODAL_RESET'
    }),
    doLogin() {
      this.$auth.loginWith('google')
    },
  },
}
</script>
