function  getBall(){
    return new Promise((success,failure)=>{
        setTimeout(()=>{
            // success()
            failure()
        },5000)
    })
}
function startPlay(){
    console.log("Let's start play")
}
function stopPlay(){
    console.log("play aborted")
}
getBall().then(()=>{
    startPlay()
})
.catch(()=>{
    stopPlay()
})

// setTimeout(()=>{
//     console.log("I Will Come After 5 Seconds")
// },5000)