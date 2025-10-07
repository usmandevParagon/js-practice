






// // Mock API functions
// function getUser(id) {
//     return new Promise((resolve, reject) => {
//         console.log(`Fetching user ${id}...`);
//         setTimeout(() => {
//             if (id === 1) {
//                 resolve({ id: 1, name: "Alice" });
//             } else if (id === 2) {
//                 resolve({ id: 2, name: "Bob" });
//             } else {
//                 reject(new Error(`User ${id} not found`));
//             }
//         }, 1000);
//     });
// }
//
// function getPosts(userId) {
//     return new Promise(resolve => {
//         console.log(`Fetching posts for user ${userId}...`);
//         setTimeout(() => {
//             resolve([
//                 { id: 101, title: `Post A by user ${userId}` },
//                 { id: 102, title: `Post B by user ${userId}` }
//             ]);
//         }, 1500);
//     });
// }
//
// // New function: fetch multiple users in parallel
// async function getUsers(ids) {
//     // allSettled ensures we don’t stop if one fails
//     let results = await Promise.allSettled(ids.map(id => getUser(id)));
//
//     // return array with either user data or error
//     return results.map((result, index) => {
//         if (result.status === "fulfilled") {
//             return result.value; // user object
//         } else {
//             return { error: result.reason.message, id: ids[index] };
//         }
//     });
// }
//
// // Show multiple users and their posts
// async function showMultipleUsers(ids) {
//     let users = await getUsers(ids);
//
//     for (let user of users) {
//         if (user.error) {
//             console.log(`Error fetching user ${user.id}: ${user.error}`);
//         } else {
//             console.log("User:", user);
//             let posts = await getPosts(user.id);
//             console.log("Posts:", posts);
//         }
//     }
// }
//
// // Example run
// showMultipleUsers([1, 2, 3]);



// function getUser(id) {
//     return new Promise((resolve, reject) => {
//         console.log("Fetching user...");
//         setTimeout(() => {
//             if (id === 1) {
//                 resolve({ id: 1, name: "Alice" });
//             } else {
//                 reject(new Error("User not found"));
//             }
//         }, 1000);
//     });
// }
// function getPosts() {
//     return new Promise(resolve => {
//         console.log("Fetching posts...");
//         setTimeout(() => {
//             resolve([
//                 { id: 101, title: "First Post" },
//                 { id: 102, title: "Second Post" }
//             ]);
//         }, 1500);
//     });
// }
//
// const getComments = (postId) => {
//     return new Promise(resolve => {
//         console.log("Fetching comments...");
//         setTimeout(() => {
//             if (postId === 101) {
//                 resolve([
//                     { id: 201, title: "Nice Post" },
//                     { id: 202, title: "Very Helpful" }
//                 ])
//             }
//             else if (postId === 102) {
//                 resolve([
//                     { id: 202, title: "Nice Post again" },
//                     { id: 203, title: "Very Helpful again" }
//                 ])
//             }
//             else {
//                 resolve([]);
//             }
//         },1000)
//     })
// }
// async function showUserData(id) {
//     try {
//         let user = await getUser(id);
//         let posts = await getPosts(id);
//
//         // fetch comments for all posts
//         let comments = await Promise.all(
//             posts.map(post => getComments(post.id))
//         );
//
//         console.log('User: ', user);
//         console.log('Posts: ', posts);
//         posts.forEach((post, index) => {
//             console.log("Post:", post);
//             console.log("Comments:", comments[index]);
//         });
//
//     } catch (error) {
//         console.log("Error:", error.message);
//     }
// }
//
// showUserData(1);


// const a = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('hello')
//         },2000)
//     })
// }
//
// async function runTask(){
//     try{
//         let res = await a();
//         console.log(res);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
//
// runTask();




// function makeRequest(location){
//     return new Promise(function(resolve, reject){
//         console.log(`Making request to ${location}`);
//         setTimeout(() => {
//             if(location==="Google"){
//                 resolve('https://www.google.com/');
//             }
//             else {
//                 reject(new Error('We can only talk to google'));
//             }
//         },2000)
//     })
// }
//
// function processRequest(response){
//     return new Promise(function(resolve, reject){
//         console.log("Processing response...");
//         setTimeout(() => {
//             resolve(`Additional information: ${response}`);
//         },2000)
//     })
// }
// makeRequest("Google")
// .then(response => {
//     console.log("Response received");
//     return processRequest(response);
// }).then(processResponse => {
//     console.log(processResponse);
// }).catch(error => {
//     console.log(error.message);
// })

// async function doSomething() {
//     try {
//         let response = await makeRequest("Google");
//         console.log(response);
//         let processedResponse = await processRequest(response);
//         console.log(processedResponse);
//     } catch (error) {
//         console.log(error.message);
//     }
// }
//
// doSomething();



// function loadScript(src) {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement('script');
//         script.src = src;
//
//         script.onload = () => resolve(null, script);
//         script.onerror = () => reject(new Error(`Script load error for ${src}`));
//
//         document.head.append(script);
//     })
//
// }

// function msgOne(msg) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`Promise fulfilled: ${msg}`);
//         },9000);
//     })
// }
//
// function msgTwo(msg) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`Promise rejected: ${msg}`);
//         },1000);
//     })
// }
// Promise.all([msgOne("Hello Earth"), msgTwo("Hello Mars")])
//     .then(res => console.log(res))
//     .catch(err => console.log(err));


// msgOne("Hello Earth")
//     .then(msg => {
//         console.log(msg);
//         return msgTwo("Hello Mars")
//     })
//     .then(msg => {
//         console.log(msg);
// })


// function delayMsg(msg){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(typeof msg !== 'string'){
//                 reject(`Message should be of type string`);
//                 return;
//             }
//             resolve(msg);
//         },2000);
//     })
// }
// delayMsg(100)
//     .then(r => console.log(r), err => console.log(err));




// function downloadFile(url){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(!url.startsWith("https")){
//                 reject(`${url} is not a valid url`);
//                 return;
//             }
//             console.log("Downloading file from", url);
//                 resolve(`File downloaded from: ${url}`);
//                 console.log(url);
//         }, 2000);
//     })
// }
// downloadFile("https:/example.com")
//     .then(msg  => console.log(msg) )
//     .catch(err => console.log("Error: ", err))

// Try an invalid URL
// downloadFile("file.zip")
//     .then(msg => {
//         console.log(msg);
//     })
//     .catch(err => {
//         console.error("Error:", err);
//     });





// new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
// }).then(function(result) {
//     alert(result); // 1
//     return new Promise(resolve => {
//         setTimeout(() => resolve(result*2), 1000);
//     });
// }).then(function(result) {
//     alert(result);
//     return result *2;
// }).then(function(result) {
//     alert(result); // 4
// });


// new Promise(function(resolve, reject) {
//
//     setTimeout(() => resolve(1), 1000);
//
// }).then(function(result) {
//
//     console.log(result); // 1
//
//     return new Promise((resolve, reject) => { // (*)
//         setTimeout(() => resolve(result * 2), 1000);
//     });
//
// }).then(function(result) { // (**)
//
//     console.log(result); // 2
//
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(result * 2), 1000);
//     });
//
// }).then(function(result) {
//
//     console.log(result); //4
//
// });

// function delay(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, ms);
//     });
// }
//
// delay(3000).then(() => alert('runs after 3 seconds'));



// let promise = new Promise(function(resolve, reject) {
//     reject('error');
//
//     setTimeout(() => resolve(2), 1000);
// });
//
// promise
//     .then(alert)
//     .catch(alert);



// A function that uses a callback to return data
// function getUser(id, callback) {
//     // Simulate an async operation (like fetching from a database)
//     setTimeout(() => {
//         const user = { id: id, name: "Alice" };
//
//         // Call the callback with the result
//         callback(user);
//     }, 1000);
// }
//
// // Usage: pass a callback function
// getUser(1, function(user) {
//     console.log("User received (via callback):", user);
// });

// function getUser(id) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const user = resolve({id: id, name: "Alice"});
//         },1000)
//     })
// }
// getUser(1).then(function(user) {
//     console.log("User received (via callback):", user);
// });
// getUser2.then((user) => {
//     console.log(user);
// }).catch((err) => {
//     console.log(err);
// })

// let p = new Promise((resolve, reject) => {
//     const a = 2;
//     if (a === 2) {
//         resolve('Success');
//     } else {
//         reject('Fail');
//     }
// });
//
// p.then(msg => { console.log(msg);
// }).catch(msg => {
//     console.log(msg);
// });
