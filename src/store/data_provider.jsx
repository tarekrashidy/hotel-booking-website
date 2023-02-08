
function getData() {
  var hotelsData = fetch(
    'http://localhost:3001/hotels/')
    .then(res => res.json())
    .then(hotels => {
            return hotels
        })
    return hotelsData
}

export {getData}