<template>
    <div class="container">
        <div class="row mt-5 mb-3">
            <div class="col-12">
                <h2>
                    Counter - {{ counter }}
                </h2>
            </div>
        </div>

        <div class="progress mb-3">
            <div class="progress-bar" role="progressbar" 
                :style="{width: currentPersent}" 
                :aria-valuenow="currentPersent" 
                aria-valuemin="0" aria-valuemax="10"
                >{{ counter }} / {{ maxQuotesToAdd }}
            </div>
        </div>

    </div>
    

    

    
</template>

<script>


export default {
    props: [
        'counter',
        'currentPersent',
        'maxQuotesToAdd'
    ],
    
}
</script>

<style scoped>
    
</style>
