<script lang="ts" setup>
/*
    pre-requisites.. Tailwind + DaisyUI

    setup...
    import { ModalType } from '~~/components/modal.type';
    const myCoolModal = ref<ModalType>();

    myCoolModal.value!.open();

    template...
    <Modal ref="myCoolModal" showCancel @closeOk="doSomethingUsefulOnClose()">
      <h3 class="font-bold text-xl">Modal Title</h3>
      <p class="py-4">Some kind of text</p>
    </Modal>
  */
import { ref } from 'vue'

const props = withDefaults(defineProps<Props>(), {
  showOk: true,
  showCancel: false,
})

// close events emitted on modal close
const emit = defineEmits(['closeOk', 'closeCancel'])

// component property that controls the visibility of the modal
const modalIsVisible = ref(false)

// props for which buttons to show
interface Props {
  showOk?: boolean
  showCancel?: boolean
}
// open event (exposed to parent)
function open() {
  modalIsVisible.value = true
}
defineExpose({ open })

function closeOk() {
  emit('closeOk')
  modalIsVisible.value = false
}
function closeCancel() {
  emit('closeCancel')
  modalIsVisible.value = false
}
</script>

<template>
  <!-- the input controls the visibility of the modal (css shenanigans) the v-model allows me to control it in turn from the wrapper component -->
  <input id="my-modal" v-model="modalIsVisible" type="checkbox" class="modal-toggle">
  <div class="modal">
    <div class="modal-box">
      <slot />
      <div class="flex justify-end space-x-2">
        <!-- I decided not to use the 'for' directives which do the close in css so I can control the emission of events explicitly -->
        <div v-if="showOk" class="modal-action">
          <label class="btn btn-success" @click="closeOk()">Ok</label>
        </div>
        <div v-if="showCancel" class="modal-action">
          <label class="btn btn-error" @click="closeCancel()">Cancel</label>
        </div>
      </div>
    </div>
  </div>
</template>
