import {computed} from 'vue'

// 使用方法
// import useWidth from '/@/hooks/useWidth'
// const { windowWidth } = useWidth();
export default function useWidth() {
  const windowWidth = computed(() => {
    return window.innerWidth
  })

  return {
    windowWidth
  }
}
