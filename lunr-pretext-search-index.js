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
  "body": " Real Numbers    Does ?     Things we think of as ``numbers'' seem to have the following properties:   In particular, these operations should both be commutative and associative, and obey distributive rules.    There are operations and that behave as we expect.  There are identity elements: for addition and for multiplication.  These operations have inverse operations and , respectively.  Every number has an additive inverse and every non-zero number has a multiplicative inverse.   Mathematicians call anything with these properties a field    The set of rational numbers, denoted , is a field.    The rational numbers are an ordered field : we have an inequality operator such that for any two distinct rational numbers and , either or .   "
},
{
  "id": "sec-reals-2",
  "level": "2",
  "url": "sec-reals.html#sec-reals-2",
  "type": "Activity",
  "number": "1.1.1",
  "title": "",
  "body": "  Does ?   "
},
{
  "id": "sec-reals-3",
  "level": "2",
  "url": "sec-reals.html#sec-reals-3",
  "type": "Observation",
  "number": "1.1.2",
  "title": "",
  "body": " Things we think of as ``numbers'' seem to have the following properties:   In particular, these operations should both be commutative and associative, and obey distributive rules.    There are operations and that behave as we expect.  There are identity elements: for addition and for multiplication.  These operations have inverse operations and , respectively.  Every number has an additive inverse and every non-zero number has a multiplicative inverse.   Mathematicians call anything with these properties a field  "
},
{
  "id": "sec-reals-4",
  "level": "2",
  "url": "sec-reals.html#sec-reals-4",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": " The set of rational numbers, denoted , is a field.  "
},
{
  "id": "sec-reals-5",
  "level": "2",
  "url": "sec-reals.html#sec-reals-5",
  "type": "Observation",
  "number": "1.1.4",
  "title": "",
  "body": " The rational numbers are an ordered field : we have an inequality operator such that for any two distinct rational numbers and , either or .  "
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
