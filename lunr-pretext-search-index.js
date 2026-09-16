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
  "body": " Real Numbers   What is a \"number\"?    Things we think of as \"numbers\" seem to have the following properties:   In particular, these operations should both be commutative and associative, and obey distributive rules.    There are operations and that behave as we expect.  There are identity elements: for addition and for multiplication.  These operations have inverse operations and , respectively.  Every number has an additive inverse and every non-zero number has a multiplicative inverse.   Mathematicians call anything with these properties a field .    The set of rational numbers, denoted , is a field.    The set of constructible numbers are the lengths that can be constructed with a compass and straight edge, given a line segment of length . The number is constructible, but is not.   A classical geometry question asks if, given a cube, another cube of twice the volume can be constructed with a compass and a straight edge. Showing that this is impossible is equivalent to showing that is not constructible and took over 2000 years to solve.   The set of constructible numbers also forms a field.    The set of rational functions, i.e. functions of the form , where and are polynomials, is a field.    The rational numbers (and the constructible numbers) are an ordered field : we have an inequality operator such that for any two distinct rational numbers and , either or .     Previously we asked the question: Does ?  How can we interpret as a number?      Informally, sequence (of numbers) is an infinite list of numbers.  Formally, a rational sequence is a function from the natural numbers to the rational numbers.      is a (rational) sequence. It represents the function from to given by   Often we use a notation such as for a sequence. In this example, we would further write , or perhaps even write .     Write the first 5 terms of each of these sequences                         How would you describe each of these sequences, particularly as becomes large?     "
},
{
  "id": "sec-reals-2",
  "level": "2",
  "url": "sec-reals.html#sec-reals-2",
  "type": "Question",
  "number": "1.1.1",
  "title": "",
  "body": " What is a \"number\"?  "
},
{
  "id": "sec-reals-3",
  "level": "2",
  "url": "sec-reals.html#sec-reals-3",
  "type": "Observation",
  "number": "1.1.2",
  "title": "",
  "body": " Things we think of as \"numbers\" seem to have the following properties:   In particular, these operations should both be commutative and associative, and obey distributive rules.    There are operations and that behave as we expect.  There are identity elements: for addition and for multiplication.  These operations have inverse operations and , respectively.  Every number has an additive inverse and every non-zero number has a multiplicative inverse.   Mathematicians call anything with these properties a field .  "
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
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": " The set of constructible numbers are the lengths that can be constructed with a compass and straight edge, given a line segment of length . The number is constructible, but is not.   A classical geometry question asks if, given a cube, another cube of twice the volume can be constructed with a compass and a straight edge. Showing that this is impossible is equivalent to showing that is not constructible and took over 2000 years to solve.   The set of constructible numbers also forms a field.  "
},
{
  "id": "sec-reals-6",
  "level": "2",
  "url": "sec-reals.html#sec-reals-6",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": " The set of rational functions, i.e. functions of the form , where and are polynomials, is a field.  "
},
{
  "id": "sec-reals-7",
  "level": "2",
  "url": "sec-reals.html#sec-reals-7",
  "type": "Observation",
  "number": "1.1.6",
  "title": "",
  "body": " The rational numbers (and the constructible numbers) are an ordered field : we have an inequality operator such that for any two distinct rational numbers and , either or .  "
},
{
  "id": "sec-reals-8",
  "level": "2",
  "url": "sec-reals.html#sec-reals-8",
  "type": "Question",
  "number": "1.1.7",
  "title": "",
  "body": "  Previously we asked the question: Does ?  How can we interpret as a number?   "
},
{
  "id": "sec-reals-9",
  "level": "2",
  "url": "sec-reals.html#sec-reals-9",
  "type": "Definition",
  "number": "1.1.8",
  "title": "",
  "body": "  Informally, sequence (of numbers) is an infinite list of numbers.  Formally, a rational sequence is a function from the natural numbers to the rational numbers.   "
},
{
  "id": "sec-reals-10",
  "level": "2",
  "url": "sec-reals.html#sec-reals-10",
  "type": "Example",
  "number": "1.1.9",
  "title": "",
  "body": "  is a (rational) sequence. It represents the function from to given by   Often we use a notation such as for a sequence. In this example, we would further write , or perhaps even write .  "
},
{
  "id": "sec-reals-11",
  "level": "2",
  "url": "sec-reals.html#sec-reals-11",
  "type": "Activity",
  "number": "1.1.10",
  "title": "",
  "body": "  Write the first 5 terms of each of these sequences                         How would you describe each of these sequences, particularly as becomes large?    "
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
