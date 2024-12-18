class SocialMediaProfile {
      
    constructor(username) {
        // Properties
        this.username = username;
        this.friends = [];
        this.posts = [];
    }

    // Methods
    addFriend(friend) {
        this.friends.push(friend);
    }

    addPost(post) {
        this.posts.push(post);
    }

    displayProfile() {
        console.log(`'Username ${this.username} has ${this.friends.length} of friends`);
        this.posts.forEach(post => {
            console.log(post);
        })
    }


}


const myProfile = new SocialMediaProfile("Sandra");

myProfile.addFriend("Bosse");
myProfile.addPost("Vädret igen..");
myProfile.addPost("Julstress...");

myProfile.displayProfile();



