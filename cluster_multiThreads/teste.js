function getUserData() {

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'Alabama'
      })
    }, 2000);
  })
    
}


const userData = getUserData()
userData.then(response => console.log(response))

