export default {
    name: 'YuButton',
    data: function() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">click {{count}}</button>'
}