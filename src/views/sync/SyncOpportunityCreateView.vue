<template>
  <div>
    <router-link
      to="/sync-opportunities"
      class="inline-flex items-center gap-1.5 text-[13px] text-subtext hover:text-accent transition-colors mb-3"
    >
      <Icon name="chevron-left" :size="14" /> Back to all opportunities
    </router-link>

    <PageHeader title="Create New Sync Opportunity" description="Publish a licensing brief for artists to apply to." />

    <div class="max-w-2xl bg-white border border-hairline rounded-card shadow-card p-5 space-y-4">
      <TextInput label="Title" placeholder="e.g. Fun & Chaotic Pop Anthems for Comedy Trailer" v-model="form.title" />

      <div class="grid grid-cols-2 gap-4">
        <TextInput label="Start date" type="date" v-model="form.startDate" />
        <TextInput label="Deadline" type="date" v-model="form.deadline" />
      </div>

      <TextAreaField label="Description" placeholder="Describe the brief, mood, tempo and usage…" v-model="form.description" />

      <div class="grid grid-cols-2 gap-4">
        <TextInput label="Reference" placeholder="https://…" icon="external" v-model="form.reference" />
        <TextInput label="Reference display text" placeholder="e.g. Watch the previous campaign" v-model="form.referenceText" />
      </div>

      <!-- Keywords -->
      <div>
        <span class="block text-xs font-medium text-subtext mb-1">Keywords</span>
        <div class="flex flex-wrap items-center gap-1.5 rounded-control border border-hairline-strong px-2.5 py-2">
          <button
            v-for="k in form.keywords"
            :key="k"
            @click="toggleKeyword(k)"
            class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent-soft text-accent text-xs font-medium hover:bg-accent/15 transition-colors"
          >
            {{ k }} <Icon name="x" :size="10" />
          </button>
          <span v-if="form.keywords.length === 0" class="text-[13px] text-prompt px-0.5">Pick keywords below…</span>
        </div>
        <div class="flex flex-wrap gap-1.5 mt-2">
          <button
            v-for="k in availableKeywords"
            :key="k"
            @click="toggleKeyword(k)"
            class="px-2 py-0.5 rounded-full bg-lavender text-subtext text-xs hover:bg-hairline hover:text-ink transition-colors"
          >
            + {{ k }}
          </button>
        </div>
      </div>

      <!-- Artwork uploads -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <span class="block text-xs font-medium text-subtext mb-1">Square logo</span>
          <button class="w-full h-24 rounded-control border border-dashed border-hairline-strong hover:border-accent hover:bg-accent-soft/40 transition-colors flex flex-col items-center justify-center gap-1.5 text-subtext">
            <Icon name="upload" :size="16" />
            <span class="text-xs">Upload 1:1 image</span>
          </button>
        </div>
        <div>
          <span class="block text-xs font-medium text-subtext mb-1">Banner</span>
          <button class="w-full h-24 rounded-control border border-dashed border-hairline-strong hover:border-accent hover:bg-accent-soft/40 transition-colors flex flex-col items-center justify-center gap-1.5 text-subtext">
            <Icon name="upload" :size="16" />
            <span class="text-xs">Upload wide banner</span>
          </button>
        </div>
      </div>

      <div class="flex items-center gap-2 pt-2 border-t border-hairline">
        <Btn variant="primary" icon="check">Create opportunity</Btn>
        <Btn variant="ghost">Reset form</Btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import PageHeader from '../../components/layout/PageHeader.vue'
import TextInput from '../../components/ui/TextInput.vue'
import TextAreaField from '../../components/ui/TextAreaField.vue'
import Btn from '../../components/ui/Btn.vue'
import Icon from '../../components/ui/Icon.vue'
import { keywordSuggestions } from '../../data/mockSync'

const form = reactive({
  title: '',
  startDate: '',
  deadline: '',
  description: '',
  reference: '',
  referenceText: '',
  keywords: [] as string[],
})

const availableKeywords = computed(() => keywordSuggestions.filter(k => !form.keywords.includes(k)))

const toggleKeyword = (k: string) => {
  const i = form.keywords.indexOf(k)
  i === -1 ? form.keywords.push(k) : form.keywords.splice(i, 1)
}
</script>
