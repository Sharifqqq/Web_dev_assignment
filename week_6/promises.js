
function getUser(id)
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            console.log("User fetched");

            resolve({ id: id, name: "Ram" });

     
        }, 4000);
    });
}

function getPosts(userId)
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            console.log("Posts fetched");
            resolve(["post1", "post2"]);
        }, 4000);
    });
}

function getComments(postId)
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            console.log("Comments fetched");
            resolve(["nice", "good"]);
        }, 4000);
    });
}

console.log("Starting data fetch with Promises...");

getUser(1)
    .then((user) =>
    {
        console.log("User:", user);
        return getPosts(user.id); 
    })
    .then((posts) =>
    {
        console.log("Posts:", posts);
        return getComments(posts[0]); 
    })
    .then((comments) =>
    {
        console.log("Comments:", comments);
    })
    .catch((error) =>
    {
        console.error("Error occurred:", error);
    });