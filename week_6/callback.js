function getUser(id, callback) 
{

    setTimeout(() => 
    {
        const user = 
        { 
            id: id, 
            name: "Ram" 
        };

        callback(user);
    }, 4000);
}


console.log("Fetching user data...");

getUser(1, function(user) 
{
    console.log("User received!");
    console.log(`User ID: ${user.id}`);
    console.log(`User Name: ${user.name}`);
});