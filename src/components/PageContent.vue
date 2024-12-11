<template>
    <div class="container">
        <h1>{{page.pageTitel}}</h1>
        <p>{{page.content}}</p>
    </div>
</template>


<script>
export default {
    props: ['page']
}
</script>