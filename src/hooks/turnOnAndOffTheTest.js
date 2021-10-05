import {ref, onMounted, onBeforeUnmount} from 'vue'
import {useStore} from 'vuex'

export default function () {
    const store = useStore()

    function turnOnAndOffTheTest(e) {
        if (e.getModifierState('Control') === true &&
            e.getModifierState('Alt') === true &&
            e.getModifierState('Shift') === true) {
            if (e.code === 'KeyT') {
                store.state.isTest = !store.state.isTest
            }
        }
    }

    onMounted(() => {
        window.addEventListener('keydown', turnOnAndOffTheTest, false)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('keydown', turnOnAndOffTheTest)
    })

    return store
}