<template>
  <div class="bg-white border border-hairline rounded-card shadow-card overflow-hidden">
    <!-- Optional panel header -->
    <div v-if="title || $slots.toolbar" class="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-hairline">
      <div v-if="title">
        <h2 class="text-h3 text-ink">{{ title }}</h2>
        <p v-if="subtitle" class="text-xs text-subtext mt-0.5">{{ subtitle }}</p>
      </div>
      <div v-if="$slots.toolbar" class="flex items-center gap-2 flex-1 justify-end">
        <slot name="toolbar" />
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-table">
        <thead>
          <tr class="border-b border-hairline">
            <th
              v-for="col in columns"
              :key="col.key"
              :class="[
                'px-4 py-2.5 text-2xs uppercase text-subtext font-satoshi select-none whitespace-nowrap',
                col.align === 'right' ? 'text-right' : 'text-left',
                col.sortable ? 'cursor-pointer hover:text-ink transition-colors' : '',
                col.width ?? '',
              ]"
              @click="col.sortable && toggleSort(col.key)"
            >
              <span class="inline-flex items-center gap-1">
                {{ col.label }}
                <Icon
                  v-if="col.sortable && sortKey === col.key"
                  :name="sortDir === 'asc' ? 'chevron-up' : 'chevron-down'"
                  :size="12"
                  class="text-accent"
                />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, i) in rows"
            :key="rowKey ? String(row[rowKey]) : i"
            class="border-b border-hairline last:border-b-0 hover:bg-lavender-soft/70 transition-colors"
          >
            <td
              v-for="col in columns"
              :key="col.key"
              :class="[
                'px-4 py-2.5 align-middle text-ink',
                col.align === 'right' ? 'text-right' : 'text-left',
              ]"
            >
              <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]">
                <span v-if="row[col.key] === null || row[col.key] === undefined || row[col.key] === ''" class="text-prompt">—</span>
                <template v-else>{{ row[col.key] }}</template>
              </slot>
            </td>
          </tr>
          <tr v-if="rows.length === 0">
            <td :colspan="columns.length">
              <EmptyState :title="emptyTitle" :hint="emptyHint" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination footer -->
    <div
      v-if="total !== undefined && total > perPage"
      class="flex items-center justify-between px-4 py-2.5 border-t border-hairline"
    >
      <p class="text-xs text-subtext tabular-nums">
        {{ rangeStart.toLocaleString() }}–{{ rangeEnd.toLocaleString() }} of {{ total.toLocaleString() }}
      </p>
      <div class="flex items-center gap-1">
        <button
          class="w-7 h-7 flex items-center justify-center rounded-md text-subtext hover:bg-lavender disabled:opacity-40 disabled:pointer-events-none transition-colors"
          :disabled="page <= 1"
          @click="$emit('update:page', page - 1)"
        >
          <Icon name="chevron-left" :size="14" />
        </button>
        <template v-for="p in pageItems" :key="`p-${p}`">
          <span v-if="p === '…'" class="w-7 text-center text-xs text-prompt">…</span>
          <button
            v-else
            :class="[
              'min-w-7 h-7 px-1 flex items-center justify-center rounded-md text-xs tabular-nums transition-colors',
              p === page ? 'bg-accent text-white font-medium' : 'text-subtext hover:bg-lavender'
            ]"
            @click="$emit('update:page', p as number)"
          >
            {{ p }}
          </button>
        </template>
        <button
          class="w-7 h-7 flex items-center justify-center rounded-md text-subtext hover:bg-lavender disabled:opacity-40 disabled:pointer-events-none transition-colors"
          :disabled="page >= pageCount"
          @click="$emit('update:page', page + 1)"
        >
          <Icon name="chevron-right" :size="14" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Icon from './Icon.vue'
import EmptyState from './EmptyState.vue'

export interface Column {
  key: string
  label: string
  align?: 'left' | 'right'
  sortable?: boolean
  width?: string
}

const props = withDefaults(defineProps<{
  columns: Column[]
  rows: Record<string, any>[]
  rowKey?: string
  title?: string
  subtitle?: string
  page?: number
  perPage?: number
  total?: number
  emptyTitle?: string
  emptyHint?: string
}>(), {
  page: 1,
  perPage: 20,
  emptyTitle: 'No records found',
  emptyHint: 'Try adjusting your filters or search.',
})

defineEmits<{
  (e: 'update:page', page: number): void
}>()

const sortKey = ref<string | null>(null)
const sortDir = ref<'asc' | 'desc'>('asc')

const toggleSort = (key: string) => {
  if (sortKey.value === key) {
    sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortDir.value = 'asc'
  }
}

const pageCount = computed(() => Math.max(1, Math.ceil((props.total ?? 0) / props.perPage)))
const rangeStart = computed(() => (props.page - 1) * props.perPage + 1)
const rangeEnd = computed(() => Math.min(props.page * props.perPage, props.total ?? 0))

// Compact pagination: 1 … p-1 p p+1 … n
const pageItems = computed<(number | string)[]>(() => {
  const n = pageCount.value
  const p = props.page
  if (n <= 7) return Array.from({ length: n }, (_, i) => i + 1)
  const items: (number | string)[] = [1]
  if (p > 3) items.push('…')
  for (let i = Math.max(2, p - 1); i <= Math.min(n - 1, p + 1); i++) items.push(i)
  if (p < n - 2) items.push('…')
  items.push(n)
  return items
})
</script>
