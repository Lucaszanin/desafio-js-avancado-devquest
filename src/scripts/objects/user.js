const user = {
    avatarUrl : '',
    name : '',
    bio : '',
    userName: '',
    fallowing: '',
    fallowers: '',
    repositories: [],
    events: [],
    
    setUserInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.fallowing = gitHubUser.following
        this.fallowers = gitHubUser.followers
    },

    setRepositories(repositories) {
        this.repositories = repositories
    },

    setEvents(activities) {
        this.events = activities
    }

}

export {user}