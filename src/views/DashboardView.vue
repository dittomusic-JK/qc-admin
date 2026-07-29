<template>
  <div>
    <PageHeader title="Dashboard" description="Operational overview across orders, users and code inventory." />

    <!-- Activity (last 7 days) -->
    <h2 class="text-2xs uppercase text-subtext mb-2.5">Last 7 days</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 mb-6">
      <StatCard label="Orders" value="33,419" icon="cart" tint="accent" to="/orders" />
      <StatCard label="Renewals" value="0" icon="refresh" tint="warning" to="/orders" />
      <StatCard label="New Users" value="13,058" icon="users" tint="info" to="/users" />
    </div>

    <!-- Code inventory -->
    <h2 class="text-2xs uppercase text-subtext mb-2.5">Code inventory</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
      <StatCard label="Barcodes Remaining" value="118,067" icon="tag" tint="neutral" />
      <StatCard label="UK ISRC Codes Remaining" value="161,052" icon="music" tint="neutral" />
      <StatCard label="US ISRC Codes Remaining" value="84,310" icon="music" tint="neutral" />
      <StatCard label="AU ISRC Codes Remaining" value="92,675" icon="music" tint="neutral" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '../components/layout/PageHeader.vue'
import StatCard from '../components/ui/StatCard.vue'
</script>
