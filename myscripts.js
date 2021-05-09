const app = new Vue({
    el: "#app",
    data: {
        usersList: globalUsersList,
        activeUser: 0
    },
    // computed:{

    // },
    methods:{
        getUserPropic(avatar){
            return ``;
        },
        onUserClick(user){
            this.activeUser = user;
        }
    },
    // mounted:{

    // }
})