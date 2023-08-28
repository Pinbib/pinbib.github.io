class Git {
    constructor() { };

    static async getUser(username = "", callback = (value) => { }) {
        // https://api.github.com/users/USERNAME
        let user = await fetch(`https://api.github.com/users/${username}`);
        let body = await user.json();

        callback(body);
    };


    static async getRepos(username = "", callback = (value) => { }) {
        // https://api.github.com/users/USERNAME/repos
        let repos = await fetch(`https://api.github.com/users/${username}/repos`);
        let body = await repos.json();

        callback(body);
    };

    static async getRepo(username = "", repo = "", callback = (value) => { }) {
        // https://api.github.com/repos/OWNER/REPO
        let repos = await fetch(`https://api.github.com/repos/${username}/${repo}`);
        let body = await repos.json();

        callback(body);
    };

    static async getFollower(username = "", callback = (value) => { }) {
        // https://api.github.com/users/USERNAME/followers

        let followers = await fetch(`https://api.github.com/users/${username}/followers`);
        let body = await followers.json();

        callback(body);
    }
};

// export default Git;