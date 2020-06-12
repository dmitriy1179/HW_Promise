const wait = ms =>
  new Promise(resolve =>
    setTimeout(() => {
    resolve(`Hello world!`);
  }, ms)
);

wait(2000).then (res => console.log("wait", res))


function checkIfNumber (data) {
  return new Promise (
    function (resolve, reject) {
      if ((typeof data) !== "number") {
        reject ("Data is not a number")
      }
      else if (data%2 == 0) {
        setTimeout(() => {reject ("even")}, 2000)
      }
      else if (data%2 == 1) {
        setTimeout(() => {resolve ("odd")}, 1000)
      }
    }
  )
}

checkIfNumber(1)
    .then (res => console.log("res", res))
    .catch (err => console.log("err", err))
checkIfNumber(2)
    .then (res => console.log("res", res))
    .catch (err => console.log("err", err))
checkIfNumber("str")
    .then (res => console.log("res", res))   
    .catch (err => console.log("err", err))
   

const arr = [7, 8, "lk", 1, 2, "ki", 3]


function check(list) {
  return new Promise (resolve => {
    const obj = {};
    for (let i=0; i<list.length; i++) {
      const el=list[i];
      checkIfNumber(el)
        .then (result => obj[el]=result)
        .catch (result => obj[el]=result)
    }
    resolve(obj)
  })
}

check(arr).then (res => console.log("check", res))


function checkIfNumber1 (data) {
  return new Promise (
    function (resolve, reject) {
      if ((typeof data) !== "number") {
        resolve ("Data is not a number")
      }
      else if (data%2 == 0) {
        setTimeout(() => {resolve ("even")}, 2000)
      }
      else if (data%2 == 1) {
        setTimeout(() => {resolve ("odd")}, 1000)
      }
      
    }
  )
}


function check1(list) {
  return new Promise (resolve => {
    const obj = {};
    const arr1 =[]
    for (let i=0; i<list.length; i++) {
      arr1.push(checkIfNumber1(list[i]))
    }
    Promise.all(arr1)
      .then ((res) => {
        for (let i=0; i<res.length; i++) {
          obj[list[i]] = res[i]
        }
      })
    resolve (obj)
  })
}
check1(arr).then (res => console.log("check1", res))


//async/await

async function check2(list) {
  const obj = {};
  const arr1 =[]
  for (let i=0; i<list.length; i++) {
    arr1.push(checkIfNumber1(list[i]))
  }
  res = await Promise.all(arr1)
  for (let i=0; i<res.length; i++) {
    obj[list[i]] = res[i]
  }
  return obj
}
check2(arr).then (res => console.log("check2", res))


async function check3(list) {
  const obj = {};
  for (let i=0; i<list.length; i++) {
    const el=list[i];
    try {
      result = await checkIfNumber(el)
      obj[el]=result
    }
    catch (er) {
      obj[el]=er
    } 
  }
  return obj
}
check3(arr).then (res => console.log("check3", res))

