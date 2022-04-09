<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { computed, ref, reactive } from 'vue'

const show = reactive({
    focus: 0,
    list: ['compAPI','liveDemo','optAPI'],
    live: [],
})

const count = ref(0)
const message = ref('Hello!')

function focusCheck( item: string ) {
    return show.live.includes( item );
}

function moveFocus() {
    if (show.focus < show.list.length) {
      show.live.push( show.list[show.focus++] )
  }
}

const greeting = computed<string>(() => {
  return message.value + '!'
})

const tripple = computed<number>(() => {
  return count.value * 3
})
</script>

<template>
<div>
    <h1>Compose API</h1>
    <h2>Vue Component Scripting</h2>

    <button @click="moveFocus">&gt;&gt;</button>

    <hr>
    <div>
      <transition>
        <code class="vue split left" v-if="focusCheck( 'compAPI' )">
<pre class="script">&lt;script setup lang="ts"&gt;<span class="body">
// composition API style
import { computed, ref } from 'vue'

const count = ref(0)
const message = ref('Hello!')

const greeting = computed&lt;string&gt;(() =&gt; {
  return message.value + '!'
})

const tripple = computed&lt;number&gt;(() =&gt; {
  return count.value * 3
})
</span>&lt;script/&gt;

<span class="template">&lt;template&gt;<span class="body">
Greeting: &lcub;&lcub; greeting &rcub;&rcub;&lt;br&gt;
Count: &lcub;&lcub; count &rcub;&rcub;&lt;br&gt;
Tripple: &lcub;&lcub; tripple &rcub;&rcub;&lt;br&gt;
&lt;br&gt;
&lt;input v-model="count" placeholder="Update Count" /&gt;&lt;br&gt;
&lt;input v-model="message" placeholder="Update Message" /&gt;&lt;br&gt;
</span>&lt;/template&gt;</span></pre>
        </code>
      </transition>
      <transition>
        <code class="vue split right" v-if="focusCheck( 'optAPI' )">
<pre class="script">&lt;script lang="ts"&gt;<span class="body">
// options API style
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      count: 0,
      message: 'Hello!'
    }
  },
  computed: {
    // explicitly annotate return type
    greeting(): string {
      return this.message + '!'
    },

    tripple(): number {
        return this.count * 3
    }
  }
})
</span>&lt;/script&gt;

<span class="template">&lt;template&gt;<span class="body">
Greeting: &lcub;&lcub; greeting &rcub;&rcub;&lt;br&gt;
Count: &lcub;&lcub; count &rcub;&rcub;&lt;br&gt;
Tripple: &lcub;&lcub; tripple &rcub;&rcub;&lt;br&gt;
&lt;br&gt;
&lt;input v-model="count" placeholder="Update Count" /&gt;&lt;br&gt;
&lt;input v-model="message" placeholder="Update Message" /&gt;&lt;br&gt;
</span>&lt;/template&gt;</span></pre>
        </code>
      </transition>
    </div>

    <hr>
    <transition>
    <div v-if="focusCheck( 'liveDemo' )">
      Greeting: {{ greeting }}<br>
      Count: {{ count }}<br>
      Tripple: {{ tripple }}<br>
      <br>
      <input v-model="count" placeholder="Update Count" /><br>
      <input v-model="message" placeholder="Update Message" /><br>
    </div>
    </transition>

    <a href="https://vuejs.org/guide/extras/reactivity-transform.html#refs-vs-reactive-variables" target="_blank">Ref vs Reactive</a>
    <hr>
    <router-link to="/mwv3/typescript">Code Language (prev)</router-link> |
    <router-link to="/mwv3/">Modernize Main Page</router-link>
    | <router-link to="/mwv3/devtools">Browser Dev Tools (next)</router-link>
</div>
</template>

<style lang="scss">
input {
  font-size: 1em;
}
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>