const app = new Vue({
    el: "#app",
    data: {
        usersList: globalUsersList,
        activeUser: "null",
        inputMessage: "",
        searchInput: ""
    },
    computed:{
        activeUserLastAccess(){

        },
        filteredContactList(){
            const filteredData = this.usersList.filter((x) => {
                //return element.name.toLowerCase().includes(this.searchText.toLowerCase());
                return x.name.toLowerCase().startsWith(this.searchInput.toLowerCase());
            });

            return filteredData;
        },
    },
    methods:{
        onUserClick(user){
            this.activeUser = user;
        },
        pushNewText(){
            this.activeUser.messages.push(inputMessage)
        },
        timeStamper(){
            return moment(stringDate, "DD/MM/YYYY HH:mm:ss").format("HH:mm");
        },
        changeInput(){
            return console.log(this.searchInput)
        },
        logIndex(index){
            return console.log(index)
        }
    },
    // mounted(){
    //     this.activeUser = this.userList[0];
    // }
})