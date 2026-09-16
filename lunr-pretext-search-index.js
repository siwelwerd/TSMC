var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-reals",
  "level": "1",
  "url": "sec-reals.html",
  "type": "Section",
  "number": "1.1",
  "title": "Real Numbers",
  "body": " Real Numbers    Does ?    "
},
{
  "id": "sec-reals-2",
  "level": "2",
  "url": "sec-reals.html#sec-reals-2",
  "type": "Activity",
  "number": "1.1.1",
  "title": "",
  "body": "  Does ?   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
