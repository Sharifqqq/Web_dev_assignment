 
function getUser(id, callback)
{
    setTimeout(() =>
    {
        console.log("User fetched");
        callback({ id: id, name: "Ram" });
    }, 4000);
}

function getPosts(userId, callback)
{
    setTimeout(() =>
    {
        console.log("Posts fetched");
        callback(["post1", "post2"]);
    }, 4000);
}

function getComments(postId, callback)
{
    setTimeout(() =>
    {
        console.log("Comments fetched");
        callback(["nice", "good"]);
    }, 4000);
}


console.log("Starting data fetch...");

getUser(1, function(user)
{
    console.log("User:", user);
    
    getPosts(user.id, function(posts)
    {

        console.log("Posts:", posts);
        
        getComments(posts[0], function(comments)
        {
            console.log("Comments:", comments);   
        });
    });
});