// TODO rewrite this

// var axios = require('axios');

// var APIKey = 'af40e2fed9c948f5a699bd16dfe80863';

// var helpers = {

//   runQuery: function(term, start, end)  {

//     var term = term.trim();
//     var start = start.trim() + "0101";
//     var end = end.trim() + "1231";

//     return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
//       params: {
//           'api-key': APIKey,
//           'q': term,
//           'begin_date': start,
//           'end_date': end
//       }
//     })

//     .then(function(results){

//       return results.data.response;

//     });
//   },

//   getSaved: function(){

//     return axios.get('/api/saved')
//       .then(function(results){

//         return results;
//       })
//   },

//   postSaved: function(title, date, url){

//     var newArticle = {title: title, date: date, url: url};
//     return axios.post('/api/saved', newArticle)
//       .then(function(results){
//         return results._id;
//       })

//   },

//   deleteSaved: function(title, data, url){

//     return axios.delete('/api/saved', {
//       params: {
//           'title': title,
//           'data': data,
//           'url': url,
//       }
//     })
//     .then(function(results){
//       return results;
//     })
//   }

// }

// module.exports = helpers;