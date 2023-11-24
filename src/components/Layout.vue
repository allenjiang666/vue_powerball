<template>
    <div class="min-h-screen flex flex-col">
        <div as="nav" class="bg-gray-800">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <h1 class=" text-3xl font-extrabold text-gray-100">
                                <span
                                    class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">PowerBall</span>
                            </h1>
                        </div>
                        <div>
                            <div class="ml-10 flex items-baseline space-x-4">
                                <RouterLink v-for="item in navigation" :key="item.name" :to="{ name: item.href }"
                                    :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
                                    :aria-current="item.current ? 'page' : undefined">{{ item.name }}</RouterLink>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <main class="flex-grow">
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 h-full">
                <slot>Fallback content</slot>
            </div>
        </main>
    </div>
</template>
  
<script setup>
import { RouterLink } from 'vue-router'

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Numbers', href: 'table', current: true },
    { name: 'Chart', href: 'chart', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
]
</script>