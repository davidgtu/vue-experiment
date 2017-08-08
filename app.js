//var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha='

//var apiURL = "https://cdn2.dropmark.com/39456/61b5c044fa998ae39a6abcc8238243eceafdb73f/transactions.json";

$(function() {
  var apiURL = "https://dog.ceo/api/breeds/list/all"

  new Vue({
    el: '#dogList',
    data: {
      dogs: null
    },
    created: function () {
      this.fetchData()
    },
    methods: {
      fetchData: function () {
        return fetch(apiURL)
        .then(response => response.json())
        .then(dogs => {
          this.dogs = Object.keys(dogs.message)
        })
      }
    }
  })
})
