let p = Promise.resolve();
p.then(() => { 
    p = p.then(() => console.log(1)) 
  })
  .then(() => console.log(2))

// 1
// 2

let x = Promise.resolve();


x = x.then(()=>{
    x = x.then(()=>console.log(1))
  })
  .then(()=>console.log(2))
// 2
// 1