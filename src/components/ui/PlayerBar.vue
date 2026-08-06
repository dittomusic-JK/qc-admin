<template>
  <Teleport to="body">
    <Transition name="player-slide">
      <div
        v-if="track"
        class="fixed bottom-0 left-0 lg:left-[232px] right-0 z-40 bg-white border-t border-hairline shadow-[0_-4px_16px_rgba(16,31,60,0.08)]"
      >
        <!-- Seek bar along the top edge -->
        <div
          ref="seekRef"
          class="group relative h-1 -mt-px cursor-pointer"
          @click="seek"
        >
          <div class="absolute inset-0 bg-lavender"></div>
          <div class="absolute inset-y-0 left-0 bg-accent transition-[width] duration-300 ease-linear" :style="{ width: `${fraction * 100}%` }"></div>
          <div
            class="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity shadow"
            :style="{ left: `calc(${fraction * 100}% - 6px)` }"
          ></div>
        </div>

        <div class="flex items-center gap-4 px-4 py-2.5">
          <!-- Track identity -->
          <div class="flex items-center gap-3 min-w-0 w-64 flex-shrink-0">
            <span class="w-10 h-10 rounded-md bg-lavender flex items-center justify-center flex-shrink-0">
              <Icon name="music" :size="16" class="text-subtext" />
            </span>
            <div class="min-w-0">
              <p class="text-[13px] font-medium text-ink truncate">{{ track.title }}</p>
              <p class="text-xs text-subtext truncate">{{ track.artist }}</p>
            </div>
          </div>

          <!-- Transport -->
          <div class="flex items-center gap-1 mx-auto">
            <button class="w-8 h-8 flex items-center justify-center rounded-full text-subtext hover:text-ink hover:bg-lavender-soft transition-colors" @click="$emit('previous')">
              <Icon name="skip-back" :size="14" />
            </button>
            <button
              class="w-9 h-9 flex items-center justify-center rounded-full bg-ink text-white hover:bg-accent transition-colors mx-1"
              @click="playing = !playing"
            >
              <Icon :name="playing ? 'pause' : 'play'" :size="14" />
            </button>
            <button class="w-8 h-8 flex items-center justify-center rounded-full text-subtext hover:text-ink hover:bg-lavender-soft transition-colors" @click="$emit('next')">
              <Icon name="skip-forward" :size="14" />
            </button>
          </div>

          <!-- Time -->
          <p class="text-xs text-subtext tabular-nums flex-shrink-0 w-24 text-center">
            {{ format(elapsed) }} <span class="text-prompt">/ {{ format(duration) }}</span>
          </p>

          <!-- Playback speed -->
          <button
            @click="cycleRate"
            :aria-label="`Playback speed ${rate}×, click to change`"
            :class="[
              'flex-shrink-0 h-7 w-11 rounded-control text-xs font-semibold tabular-nums transition-colors',
              rate === 1
                ? 'text-subtext hover:text-ink hover:bg-lavender-soft'
                : 'bg-accent-soft text-accent hover:bg-accent-soft/70'
            ]"
          >
            {{ rate }}×
          </button>

          <!-- Volume + close -->
          <div class="hidden md:flex items-center gap-2 flex-shrink-0 w-40">
            <Icon name="volume" :size="15" class="text-subtext flex-shrink-0" />
            <div class="relative h-1 flex-1 rounded-full bg-lavender overflow-hidden">
              <div class="absolute inset-y-0 left-0 w-3/4 bg-prompt"></div>
            </div>
          </div>
          <button
            class="w-8 h-8 flex items-center justify-center rounded-full text-subtext hover:text-ink hover:bg-lavender-soft transition-colors flex-shrink-0"
            @click="$emit('close')"
          >
            <Icon name="x" :size="15" />
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'
import Icon from './Icon.vue'

export interface PlayerTrack {
  title: string
  artist: string
  /** seconds */
  duration?: number
}

const props = defineProps<{
  track: PlayerTrack | null
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'previous'): void
  (e: 'next'): void
  (e: 'playing', value: boolean): void
}>()

const playing = ref(false)
const elapsed = ref(0)
const seekRef = ref<HTMLElement | null>(null)

// Speed persists across tracks — a reviewer working at 2× wants it to stay.
const rates = [1, 1.5, 2] as const
const rate = ref<number>(1)
const cycleRate = () => {
  rate.value = rates[(rates.indexOf(rate.value as typeof rates[number]) + 1) % rates.length]
}

const duration = computed(() => props.track?.duration ?? 204)
const fraction = computed(() => (duration.value ? Math.min(elapsed.value / duration.value, 1) : 0))

let timer: ReturnType<typeof setInterval> | null = null

const tick = () => {
  if (elapsed.value >= duration.value) {
    playing.value = false
    elapsed.value = duration.value
  } else {
    elapsed.value = Math.min(elapsed.value + 0.5 * rate.value, duration.value)
  }
}

watch(playing, val => {
  emit('playing', val)
  if (timer) { clearInterval(timer); timer = null }
  if (val) timer = setInterval(tick, 500)
})

// New track: restart from the top, keep playing
watch(() => props.track, (t, old) => {
  if (!t) { playing.value = false; return }
  if (t !== old) {
    elapsed.value = 0
    playing.value = true
  }
})

const seek = (e: MouseEvent) => {
  const el = seekRef.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  elapsed.value = ((e.clientX - rect.left) / rect.width) * duration.value
}

const format = (s: number) => {
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${String(sec).padStart(2, '0')}`
}

onUnmounted(() => { if (timer) clearInterval(timer) })

defineExpose({
  play: () => { playing.value = true },
  pause: () => { playing.value = false },
})
</script>

<style scoped>
.player-slide-enter-active,
.player-slide-leave-active {
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.player-slide-enter-from,
.player-slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
