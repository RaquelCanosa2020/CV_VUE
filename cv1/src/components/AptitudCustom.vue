<template>
    <div>
        <ul id="apt">
            <li v-for="aptitud in aptitudes" :key="aptitud.id">
                {{aptitud}}
                </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "aptitudcustom",
    props:{
        aptitudes: Array,
    }
}
</script>