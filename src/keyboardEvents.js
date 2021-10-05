const turnOnAndOffTheTest = (e, store) => {
  if (e.getModifierState('Control') === true &&
    e.getModifierState('Alt') === true &&
    e.getModifierState('Shift') === true) {
    if (e.code === 'KeyT') {
      store.state.isTest = !store.state.isTest
    }
  }
}

export default {turnOnAndOffTheTest}
export {turnOnAndOffTheTest}
