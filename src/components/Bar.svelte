<script>
  import { interpolateLab } from "d3-interpolate"
  import { tweened } from "svelte/motion"
  import { cubicInOut } from "svelte/easing"
  import { beforeUpdate } from "svelte"
  import { bada55, navy, colorFor, pick } from "../utils"

  export let bar = {}
  export let stroke = navy
  export let val = 0
  let current = 0
  let fade = "bada55"

  const fader = tweened(bada55, {
    duration: 800,
    interpolate: interpolateLab,
  })

  const progress = tweened(bar.height ? bar.height : 0, {
    duration: 1000,
    easing: cubicInOut,
  })

  const checkColor = () => {
    const next = $pick
    if (fade !== next) {
      // console.log("-- fade: ", fade, next)
      fade = next
      fader.set(colorFor(fade))
    }
  }

  const checkPosition = () => {
    const next = val ? val : 0
    if (current !== next) {
      // console.log("-- before: ", bar, next, current)
      current = next
      const value = bar.height * (1 - next / 100)
      progress.set(value)
    }
  }

  beforeUpdate(() => {
    checkPosition()
    checkColor()
  })
</script>

<rect
  x="0"
  y={$progress}
  width={bar.width}
  height={bar.height}
  fill={$fader}
  {stroke}
  mask={bar.maskUri}
/>
