const app = new Vue({
    el: "#app",
    data: {
        usersList: globalUsersList,
        activeUser: "null"
    },
    // computed:{

    // },
    methods:{
        onUserClick(user){
            this.activeUser = user;
        }
    },
    mounted(){
        this.activeUser = this.userList[0]
    }
})