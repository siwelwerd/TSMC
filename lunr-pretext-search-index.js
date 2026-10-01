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
  "id": "attribution",
  "level": "1",
  "url": "attribution.html",
  "type": "Preface",
  "number": "",
  "title": "Attribution and Acknowledgements",
  "body": " Attribution and Acknowledgements  This work includes materials used under license from the following works:  Basic Analysis I & II by Jiří Lebl is licensed under the CC-BY-NC-SA 4.0 license .  Calculus for Team-Based Inquiry Learning , edited by Steven Clontz and Drew Lewis, is licensed under the CC-BY-NC-SA 4.0 license .    "
},
{
  "id": "sec-reals",
  "level": "1",
  "url": "sec-reals.html",
  "type": "Section",
  "number": "1.1",
  "title": "Real Numbers",
  "body": " Real Numbers   What is a \"number\"?    Things we think of as \"numbers\" seem to have the following properties:   In particular, these operations should both be commutative and associative, and obey distributive rules.    There are operations and that behave as we expect.  There are identity elements: for addition and for multiplication.  These operations have inverse operations and , respectively.  Every number has an additive inverse and every non-zero number has a multiplicative inverse.   Mathematicians call anything with these properties a field .    The set of rational numbers, denoted , is a field.    The set of constructible numbers are the lengths that can be constructed with a compass and straight edge, given a line segment of length . The number is constructible, but is not.   A classical geometry question asks if, given a cube, another cube of twice the volume can be constructed with a compass and a straight edge. Showing that this is impossible is equivalent to showing that is not constructible and took over 2000 years to solve.   The set of constructible numbers also forms a field.    The set of rational functions, i.e. functions of the form , where and are polynomials, is a field.    The rational numbers (and the constructible numbers) are an ordered field : we have an inequality operator such that for any two distinct rational numbers and , either or .     Consider the set of numbers .    Find a rational number that is an upper bound for ; that is, for every .    What is the smallest rational number that is an upper bound for ?     An ordered set has the least-upper-bound property if every nonempty subset that has an upper bound has a least upper bound.  An ordered field that has the least-upper-bound property is called complete .    If an ordered set has a least upper bound, this least upper bound is called the supremum of , and is denoted .  If an ordered set has a greatest lower bound, this least upper bound is called the infemum of , and is denoted .    The rational numbers does not have the least upper bound property as we saw in . In other words, is not complete.     There is a unique complete ordered field that contains the rational numbers.     Note that this theorem is saying two things: there exist complete ordered fields that contain the rationals, and further any two such fields are actually the same (i.e. it is unique).     The real numbers, denoted , are the unique complete ordered field containing .     You can think about \"building\" from by formally adding least upper bounds to every subset of .     What is the least upper bound for the set ?      The real numbers by definition have the least upper bound property. Show that they also have the greatest lower bound property, i.e. for any subset with a lower bound, exists (and is an element of ).    Let have a lower bound , so for all .  Let . Since for all , for all , and for all . So has an upper bound of .  Then has a least upper bound . is a greatest lower bound for .    "
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
  "id": "activity-q-lub",
  "level": "2",
  "url": "sec-reals.html#activity-q-lub",
  "type": "Activity",
  "number": "1.1.7",
  "title": "",
  "body": "  Consider the set of numbers .    Find a rational number that is an upper bound for ; that is, for every .    What is the smallest rational number that is an upper bound for ?   "
},
{
  "id": "sec-reals-9",
  "level": "2",
  "url": "sec-reals.html#sec-reals-9",
  "type": "Definition",
  "number": "1.1.8",
  "title": "",
  "body": " An ordered set has the least-upper-bound property if every nonempty subset that has an upper bound has a least upper bound.  An ordered field that has the least-upper-bound property is called complete .  "
},
{
  "id": "sec-reals-10",
  "level": "2",
  "url": "sec-reals.html#sec-reals-10",
  "type": "Definition",
  "number": "1.1.9",
  "title": "",
  "body": " If an ordered set has a least upper bound, this least upper bound is called the supremum of , and is denoted .  If an ordered set has a greatest lower bound, this least upper bound is called the infemum of , and is denoted .  "
},
{
  "id": "sec-reals-11",
  "level": "2",
  "url": "sec-reals.html#sec-reals-11",
  "type": "Example",
  "number": "1.1.10",
  "title": "",
  "body": " The rational numbers does not have the least upper bound property as we saw in . In other words, is not complete.  "
},
{
  "id": "thm-r-uniqe",
  "level": "2",
  "url": "sec-reals.html#thm-r-uniqe",
  "type": "Theorem",
  "number": "1.1.11",
  "title": "",
  "body": "  There is a unique complete ordered field that contains the rational numbers.   "
},
{
  "id": "sec-reals-13",
  "level": "2",
  "url": "sec-reals.html#sec-reals-13",
  "type": "Remark",
  "number": "1.1.12",
  "title": "",
  "body": " Note that this theorem is saying two things: there exist complete ordered fields that contain the rationals, and further any two such fields are actually the same (i.e. it is unique).  "
},
{
  "id": "def-reals",
  "level": "2",
  "url": "sec-reals.html#def-reals",
  "type": "Definition",
  "number": "1.1.13",
  "title": "",
  "body": "  The real numbers, denoted , are the unique complete ordered field containing .   "
},
{
  "id": "sec-reals-15",
  "level": "2",
  "url": "sec-reals.html#sec-reals-15",
  "type": "Remark",
  "number": "1.1.14",
  "title": "",
  "body": " You can think about \"building\" from by formally adding least upper bounds to every subset of .  "
},
{
  "id": "sec-reals-16",
  "level": "2",
  "url": "sec-reals.html#sec-reals-16",
  "type": "Activity",
  "number": "1.1.15",
  "title": "",
  "body": "  What is the least upper bound for the set ?   "
},
{
  "id": "sec-reals-17",
  "level": "2",
  "url": "sec-reals.html#sec-reals-17",
  "type": "Activity",
  "number": "1.1.16",
  "title": "",
  "body": "  The real numbers by definition have the least upper bound property. Show that they also have the greatest lower bound property, i.e. for any subset with a lower bound, exists (and is an element of ).    Let have a lower bound , so for all .  Let . Since for all , for all , and for all . So has an upper bound of .  Then has a least upper bound . is a greatest lower bound for .   "
},
{
  "id": "sec-sequences",
  "level": "1",
  "url": "sec-sequences.html",
  "type": "Section",
  "number": "1.2",
  "title": "Sequences",
  "body": " Sequences    Informally, a sequence (of real numbers) is an infinite list of real numbers.  Formally, a sequence is a function from the natural numbers to the real numbers . Rather than writing , we typically use to refer to the nth term of the sequence, and write to represent the whole sequence.      is a sequence. It represents the function from to given by We could also represent this sequence as .     For each of the following sequences:  Write the first 5 terms of the sequence.  Plot the points on a graph.  Describe the behavior of the sequence as becomes large.                  The greatest lower bound of is , and .                  .                  The least upper bound of is .                  The sequence alternates between and .                                 A sequence is said to converge to , or simply to converge , if for every , there exists some such that if , then .  In other words, the sequence converges to if no matter how close we want the sequence to be to , eventually the sequence gets and stays that close to .  If the sequence converges to , we often write . If a sequence does not converge, we say it diverges .    The condition is equivalent to saying .     A graph of sequence points showing eventually all sequence points are within of .    Once , we see that .     The sequence converges to zero. To see this, let be any positive real number. Then set to be the next integer larger than . By construction, for all , , so . Thus the sequence converges to zero.    The sequence diverges. Let be any number. If , then for every odd . Conversely, if , then for every even . Thus the sequence diverges.    If is a function with , then the sequence also converges to .    Since , the sequence converges to .    A sequence is called monotonic if its terms are all increasing (i.e. for all ), or if its terms are all decreasing (i.e. for all ).     Which of the following sequences are monotonic?                 Every bounded monotonic sequence converges.    Without loss of generality, let be an increasing bounded sequence. By the least upper bound property, let be its least upper bound.  We claim converges to . Let . If for every , then is an upper bound of smaller than , a contradiction. Thus, for some , . Since the sequence is increasing, we have for all , so the sequence converges.    The sequence is increasing and bounded, so it converges.  We will see later that this sequence converges to .    A sequence is called a subsequence of another sequence if there is an increasing sequence of natural numbers such that for each .  In other words, a subsequence of a sequence is formed by dropping some terms from a sequence, but without changing the order.    The sequence is a subsequence of the sequence .     A sequence converges to if and only if every subsequence also converges to .     One direction is trivial since a sequence is a subsequence of itself.  So suppose is a subsequence, and that . Let . Then there exists such that for all . choose such that . Then for any , , so . Thus the subsequence converges.    Consider the sequence . The subsequence of odd terms is which converges to , and the subsequence of even terms is which converges to . Since two subsequences converge to different things, the sequence diverges.     Determine if each of the following sequences converge, and if so, to what.                          The sequence where      "
},
{
  "id": "sec-sequences-2",
  "level": "2",
  "url": "sec-sequences.html#sec-sequences-2",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  Informally, a sequence (of real numbers) is an infinite list of real numbers.  Formally, a sequence is a function from the natural numbers to the real numbers . Rather than writing , we typically use to refer to the nth term of the sequence, and write to represent the whole sequence.   "
},
{
  "id": "sec-sequences-3",
  "level": "2",
  "url": "sec-sequences.html#sec-sequences-3",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  is a sequence. It represents the function from to given by We could also represent this sequence as .  "
},
{
  "id": "sec-sequences-4",
  "level": "2",
  "url": "sec-sequences.html#sec-sequences-4",
  "type": "Activity",
  "number": "1.2.3",
  "title": "",
  "body": "  For each of the following sequences:  Write the first 5 terms of the sequence.  Plot the points on a graph.  Describe the behavior of the sequence as becomes large.                  The greatest lower bound of is , and .                  .                  The least upper bound of is .                  The sequence alternates between and .                               "
},
{
  "id": "def-seq-convergence",
  "level": "2",
  "url": "sec-sequences.html#def-seq-convergence",
  "type": "Definition",
  "number": "1.2.4",
  "title": "",
  "body": " A sequence is said to converge to , or simply to converge , if for every , there exists some such that if , then .  In other words, the sequence converges to if no matter how close we want the sequence to be to , eventually the sequence gets and stays that close to .  If the sequence converges to , we often write . If a sequence does not converge, we say it diverges .  "
},
{
  "id": "sec-sequences-6",
  "level": "2",
  "url": "sec-sequences.html#sec-sequences-6",
  "type": "Remark",
  "number": "1.2.5",
  "title": "",
  "body": " The condition is equivalent to saying .  "
},
{
  "id": "sec-sequences-7",
  "level": "2",
  "url": "sec-sequences.html#sec-sequences-7",
  "type": "Figure",
  "number": "1.2.6",
  "title": "",
  "body": "  A graph of sequence points showing eventually all sequence points are within of .    Once , we see that .   "
},
{
  "id": "sec-sequences-8",
  "level": "2",
  "url": "sec-sequences.html#sec-sequences-8",
  "type": "Example",
  "number": "1.2.7",
  "title": "",
  "body": " The sequence converges to zero. To see this, let be any positive real number. Then set to be the next integer larger than . By construction, for all , , so . Thus the sequence converges to zero.  "
},
{
  "id": "sec-sequences-9",
  "level": "2",
  "url": "sec-sequences.html#sec-sequences-9",
  "type": "Example",
  "number": "1.2.8",
  "title": "",
  "body": " The sequence diverges. Let be any number. If , then for every odd . Conversely, if , then for every even . Thus the sequence diverges.  "
},
{
  "id": "sec-sequences-10",
  "level": "2",
  "url": "sec-sequences.html#sec-sequences-10",
  "type": "Proposition",
  "number": "1.2.9",
  "title": "",
  "body": " If is a function with , then the sequence also converges to .  "
},
{
  "id": "sec-sequences-11",
  "level": "2",
  "url": "sec-sequences.html#sec-sequences-11",
  "type": "Example",
  "number": "1.2.10",
  "title": "",
  "body": " Since , the sequence converges to .  "
},
{
  "id": "sec-sequences-12",
  "level": "2",
  "url": "sec-sequences.html#sec-sequences-12",
  "type": "Definition",
  "number": "1.2.11",
  "title": "",
  "body": " A sequence is called monotonic if its terms are all increasing (i.e. for all ), or if its terms are all decreasing (i.e. for all ).  "
},
{
  "id": "sec-sequences-13",
  "level": "2",
  "url": "sec-sequences.html#sec-sequences-13",
  "type": "Activity",
  "number": "1.2.12",
  "title": "",
  "body": "  Which of the following sequences are monotonic?               "
},
{
  "id": "sec-sequences-14",
  "level": "2",
  "url": "sec-sequences.html#sec-sequences-14",
  "type": "Theorem",
  "number": "1.2.13",
  "title": "",
  "body": " Every bounded monotonic sequence converges.  "
},
{
  "id": "sec-sequences-15",
  "level": "2",
  "url": "sec-sequences.html#sec-sequences-15",
  "type": "Proof",
  "number": "1.2.1",
  "title": "",
  "body": " Without loss of generality, let be an increasing bounded sequence. By the least upper bound property, let be its least upper bound.  We claim converges to . Let . If for every , then is an upper bound of smaller than , a contradiction. Thus, for some , . Since the sequence is increasing, we have for all , so the sequence converges.  "
},
{
  "id": "sec-sequences-16",
  "level": "2",
  "url": "sec-sequences.html#sec-sequences-16",
  "type": "Example",
  "number": "1.2.14",
  "title": "",
  "body": " The sequence is increasing and bounded, so it converges.  We will see later that this sequence converges to .  "
},
{
  "id": "sec-sequences-17",
  "level": "2",
  "url": "sec-sequences.html#sec-sequences-17",
  "type": "Definition",
  "number": "1.2.15",
  "title": "",
  "body": " A sequence is called a subsequence of another sequence if there is an increasing sequence of natural numbers such that for each .  In other words, a subsequence of a sequence is formed by dropping some terms from a sequence, but without changing the order.  "
},
{
  "id": "sec-sequences-18",
  "level": "2",
  "url": "sec-sequences.html#sec-sequences-18",
  "type": "Example",
  "number": "1.2.16",
  "title": "",
  "body": " The sequence is a subsequence of the sequence .  "
},
{
  "id": "thm-subseq-converge",
  "level": "2",
  "url": "sec-sequences.html#thm-subseq-converge",
  "type": "Theorem",
  "number": "1.2.17",
  "title": "",
  "body": "  A sequence converges to if and only if every subsequence also converges to .   "
},
{
  "id": "sec-sequences-20",
  "level": "2",
  "url": "sec-sequences.html#sec-sequences-20",
  "type": "Proof",
  "number": "1.2.2",
  "title": "",
  "body": " One direction is trivial since a sequence is a subsequence of itself.  So suppose is a subsequence, and that . Let . Then there exists such that for all . choose such that . Then for any , , so . Thus the subsequence converges.  "
},
{
  "id": "sec-sequences-21",
  "level": "2",
  "url": "sec-sequences.html#sec-sequences-21",
  "type": "Example",
  "number": "1.2.18",
  "title": "",
  "body": " Consider the sequence . The subsequence of odd terms is which converges to , and the subsequence of even terms is which converges to . Since two subsequences converge to different things, the sequence diverges.  "
},
{
  "id": "sec-sequences-22",
  "level": "2",
  "url": "sec-sequences.html#sec-sequences-22",
  "type": "Activity",
  "number": "1.2.19",
  "title": "",
  "body": "  Determine if each of the following sequences converge, and if so, to what.                          The sequence where     "
},
{
  "id": "sec-series",
  "level": "1",
  "url": "sec-series.html",
  "type": "Section",
  "number": "1.3",
  "title": "Series",
  "body": " Series   In , we encountered a few examples of sequences of partial sums like and . We want to generalize this idea into a new concept called a series     Given a sequence , we can define a series of partial sums by . Instead of writing or , we use the notation to represent the series.  We say the series converges (respectively, diverges ) when its sequence of partial sums converges (respectively, diverges). If the series converges to , we often write .    We write to represent the sequence of partial sums .     Write the first 5 terms (i.e. partial sums) of each of the following series.                                  If is a convergent series, then the sequence must converge to .  In other words, a necessary but not sufficient condition for a series to converge is that its underlying sequence must converge to .    Suppose converges to . Let . Then there exists such that for all . Then for all , we have . Thus the sequnce converges to .     An important thing to internalize is that knowing that the terms go to zero is not enough to conclude that converges. They must go to zero fast enough . We will soon see several different characterizations of what fast enough means.   Lets look at some special kinds of series. We previously looked at a geometric series  .     Determine if converges or diverges.      Determine if converges or diverges.      Determine if converges or diverges.      Make a conjecture by completing this statement: The series converges if and only if ...       A geometric series diverges when ??? and converges to ??? when ???          Determine if each of the following series converge or diverge. If they converge, find their limit.                                Lets now return to two series we examined previously.    The series is called the harmonic series .     Compute the first 10 terms (partial sums) of this series.      Compute the first 100 terms (partial sums) of this series.      Compute the first 1000 terms (partial sums) of this series.      Formulate a conjecture about whether this series converges or diverges.       The harmonic series converges\/diverges.         Now consider the series .    Compute the first 10 terms (partial sums) of this series.      Compute the first 100 terms (partial sums) of this series.      Compute the first 1000 terms (partial sums) of this series.      Formulate a conjecture about whether this series converges or diverges.       The series converges\/diverges.         The question of what value the series converges to is known as the Basel Problem. It was first posed in 1650 and not solved until 1734 by Leonhard Euler.     A -series is a series of the form .      A -series of the form converges for and diverges for .    "
},
{
  "id": "sec-series-2",
  "level": "2",
  "url": "sec-series.html#sec-series-2",
  "type": "Observation",
  "number": "1.3.1",
  "title": "",
  "body": " In , we encountered a few examples of sequences of partial sums like and . We want to generalize this idea into a new concept called a series   "
},
{
  "id": "sec-series-3",
  "level": "2",
  "url": "sec-series.html#sec-series-3",
  "type": "Definition",
  "number": "1.3.2",
  "title": "",
  "body": " Given a sequence , we can define a series of partial sums by . Instead of writing or , we use the notation to represent the series.  We say the series converges (respectively, diverges ) when its sequence of partial sums converges (respectively, diverges). If the series converges to , we often write .  "
},
{
  "id": "sec-series-4",
  "level": "2",
  "url": "sec-series.html#sec-series-4",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": " We write to represent the sequence of partial sums .  "
},
{
  "id": "sec-series-5",
  "level": "2",
  "url": "sec-series.html#sec-series-5",
  "type": "Activity",
  "number": "1.3.4",
  "title": "",
  "body": "  Write the first 5 terms (i.e. partial sums) of each of the following series.                               "
},
{
  "id": "sec-series-6",
  "level": "2",
  "url": "sec-series.html#sec-series-6",
  "type": "Proposition",
  "number": "1.3.5",
  "title": "",
  "body": "  If is a convergent series, then the sequence must converge to .  In other words, a necessary but not sufficient condition for a series to converge is that its underlying sequence must converge to .    Suppose converges to . Let . Then there exists such that for all . Then for all , we have . Thus the sequnce converges to .   "
},
{
  "id": "sec-series-7",
  "level": "2",
  "url": "sec-series.html#sec-series-7",
  "type": "Remark",
  "number": "1.3.6",
  "title": "",
  "body": " An important thing to internalize is that knowing that the terms go to zero is not enough to conclude that converges. They must go to zero fast enough . We will soon see several different characterizations of what fast enough means.  "
},
{
  "id": "sec-series-8",
  "level": "2",
  "url": "sec-series.html#sec-series-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "geometric series "
},
{
  "id": "sec-series-9",
  "level": "2",
  "url": "sec-series.html#sec-series-9",
  "type": "Activity",
  "number": "1.3.7",
  "title": "",
  "body": "   Determine if converges or diverges.      Determine if converges or diverges.      Determine if converges or diverges.      Make a conjecture by completing this statement: The series converges if and only if ...    "
},
{
  "id": "thm-geometric-series",
  "level": "2",
  "url": "sec-series.html#thm-geometric-series",
  "type": "Theorem",
  "number": "1.3.8",
  "title": "",
  "body": "  A geometric series diverges when ??? and converges to ??? when ???       "
},
{
  "id": "sec-series-11",
  "level": "2",
  "url": "sec-series.html#sec-series-11",
  "type": "Activity",
  "number": "1.3.9",
  "title": "",
  "body": "  Determine if each of the following series converge or diverge. If they converge, find their limit.                               "
},
{
  "id": "sec-series-13",
  "level": "2",
  "url": "sec-series.html#sec-series-13",
  "type": "Activity",
  "number": "1.3.10",
  "title": "",
  "body": "  The series is called the harmonic series .     Compute the first 10 terms (partial sums) of this series.      Compute the first 100 terms (partial sums) of this series.      Compute the first 1000 terms (partial sums) of this series.      Formulate a conjecture about whether this series converges or diverges.    "
},
{
  "id": "thm-harmonic-series",
  "level": "2",
  "url": "sec-series.html#thm-harmonic-series",
  "type": "Theorem",
  "number": "1.3.11",
  "title": "",
  "body": "  The harmonic series converges\/diverges.       "
},
{
  "id": "sec-series-15",
  "level": "2",
  "url": "sec-series.html#sec-series-15",
  "type": "Activity",
  "number": "1.3.12",
  "title": "",
  "body": " Now consider the series .    Compute the first 10 terms (partial sums) of this series.      Compute the first 100 terms (partial sums) of this series.      Compute the first 1000 terms (partial sums) of this series.      Formulate a conjecture about whether this series converges or diverges.    "
},
{
  "id": "thm-p2-series",
  "level": "2",
  "url": "sec-series.html#thm-p2-series",
  "type": "Theorem",
  "number": "1.3.13",
  "title": "",
  "body": "  The series converges\/diverges.       "
},
{
  "id": "sec-series-18",
  "level": "2",
  "url": "sec-series.html#sec-series-18",
  "type": "Definition",
  "number": "1.3.14",
  "title": "",
  "body": "  A -series is a series of the form .   "
},
{
  "id": "thm-p-series",
  "level": "2",
  "url": "sec-series.html#thm-p-series",
  "type": "Theorem",
  "number": "1.3.15",
  "title": "",
  "body": "  A -series of the form converges for and diverges for .   "
},
{
  "id": "sec-comparison",
  "level": "1",
  "url": "sec-comparison.html",
  "type": "Section",
  "number": "1.4",
  "title": "Comparison Tests",
  "body": " Comparison Tests  In proving that -series converge in , we implicitly made use of the following.   Comparison Test   Let and be two series.  If converges and for all , then also converges.  If diverges and for all , then also diverges.      First, suppose converges to and for all . Then for every , , so the series is a bounded, monotonic sequence and hence converges.  Now suppose instead diverges and for all . Suppose is any real number. Then since is increasing and divergent, there exists such that . Then . Since the series gets larger than any real number, we see that diverges as well.     Because the first finitely many terms don't affect whether a sequence or series converges or not, the comparison test can be strengthened: it is enough to know that eventually  (i.e. there exists such that for all ).    Consider the series . Since , . Then since the harmonic series diverges, the series diverges as well.    Consider the series . Since , . Since this -series converges, we have must also converge.     Use the comparison test to determine if each of the following series converge or diverge.                                 As we saw in the last part of the previous activity, direct comparison is not always effective, even if qualitatively one series seems to behave like another.    Limit Comparison Test   Let and be two series with and for all . Suppose that for some . Then either and both converge, or they both diverge.    By the definition of the limit of a sequence, there exists such that for , . If diverges, then we have , so also diverges by the direct comparison test. If instead converges, then , so converges by direct comparison test.     Since and the -series converges, by the limit comparison test we know that also converges.     Use an appropriate comparison test to determine if each of the following series converge or diverge.                                "
},
{
  "id": "sec-comparison-3",
  "level": "2",
  "url": "sec-comparison.html#sec-comparison-3",
  "type": "Theorem",
  "number": "1.4.1",
  "title": "Comparison Test.",
  "body": " Comparison Test   Let and be two series.  If converges and for all , then also converges.  If diverges and for all , then also diverges.      First, suppose converges to and for all . Then for every , , so the series is a bounded, monotonic sequence and hence converges.  Now suppose instead diverges and for all . Suppose is any real number. Then since is increasing and divergent, there exists such that . Then . Since the series gets larger than any real number, we see that diverges as well.   "
},
{
  "id": "sec-comparison-4",
  "level": "2",
  "url": "sec-comparison.html#sec-comparison-4",
  "type": "Remark",
  "number": "1.4.2",
  "title": "",
  "body": " Because the first finitely many terms don't affect whether a sequence or series converges or not, the comparison test can be strengthened: it is enough to know that eventually  (i.e. there exists such that for all ).  "
},
{
  "id": "sec-comparison-5",
  "level": "2",
  "url": "sec-comparison.html#sec-comparison-5",
  "type": "Example",
  "number": "1.4.3",
  "title": "",
  "body": " Consider the series . Since , . Then since the harmonic series diverges, the series diverges as well.  "
},
{
  "id": "sec-comparison-6",
  "level": "2",
  "url": "sec-comparison.html#sec-comparison-6",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": " Consider the series . Since , . Since this -series converges, we have must also converge.  "
},
{
  "id": "sec-comparison-7",
  "level": "2",
  "url": "sec-comparison.html#sec-comparison-7",
  "type": "Activity",
  "number": "1.4.5",
  "title": "",
  "body": "  Use the comparison test to determine if each of the following series converge or diverge.                               "
},
{
  "id": "sec-comparison-8",
  "level": "2",
  "url": "sec-comparison.html#sec-comparison-8",
  "type": "Remark",
  "number": "1.4.6",
  "title": "",
  "body": " As we saw in the last part of the previous activity, direct comparison is not always effective, even if qualitatively one series seems to behave like another.  "
},
{
  "id": "thm-limit-comparison",
  "level": "2",
  "url": "sec-comparison.html#thm-limit-comparison",
  "type": "Theorem",
  "number": "1.4.7",
  "title": "Limit Comparison Test.",
  "body": " Limit Comparison Test   Let and be two series with and for all . Suppose that for some . Then either and both converge, or they both diverge.    By the definition of the limit of a sequence, there exists such that for , . If diverges, then we have , so also diverges by the direct comparison test. If instead converges, then , so converges by direct comparison test.   "
},
{
  "id": "sec-comparison-10",
  "level": "2",
  "url": "sec-comparison.html#sec-comparison-10",
  "type": "Example",
  "number": "1.4.8",
  "title": "",
  "body": " Since and the -series converges, by the limit comparison test we know that also converges.  "
},
{
  "id": "sec-comparison-11",
  "level": "2",
  "url": "sec-comparison.html#sec-comparison-11",
  "type": "Activity",
  "number": "1.4.9",
  "title": "",
  "body": "  Use an appropriate comparison test to determine if each of the following series converge or diverge.                               "
},
{
  "id": "sec-alternating",
  "level": "1",
  "url": "sec-alternating.html",
  "type": "Section",
  "number": "1.5",
  "title": "Alternating Series and Rearrangements",
  "body": " Alternating Series and Rearrangements  We have so far been mostly focusing on series with positive terms. Here we consider sequences with both positive and negative terms.  Let us use the alternating harmonic series as an example: .    The alternating harmonic series converges.    Let be the -th partial sum. Then   Note that the series converges to some number by e.g. the limit comparison test with the -series .  Now let be given. Choose such that  is even (so );   ; and   for all .  Now suppose . If is even, then . If is odd, then write for some . Note that , so . Then     If we take a different approach, we can actually determine what this series converges to.         First recall that converges to a number .  Now consider the partial sum Then we see   Since we already know the alternating harmonic series converges, and we found a subsequence converging to , by the alternating harmonic series must also converge to .      Let be the sequence given by      Write the first 20 terms of the sequence .      Do you think the series converges? If so, to what?      Find an expression for , , and .      Let be a series. If is a bijection, then we call a rearrangement of the series.     Let be the sequence given by . The series is a rearrangement of the alternating harmonic series and converges to .    Let be the -th partial sum. In , we deduced that . Similar to the proof of , we can get a common denominator and after some algebraic simplification observe . This series converges (e.g. by limit comparison to ), so by an argument analogous to the proof of , we can show this series converges.  We can also adapt the proof of to see what this converges to. We compute Note that , so we have . Since the series converges and this subsequence converges to , we have .    This example motivates the following definition.   A series is called unconditionally convergent if every rearrangement of the series converges. A convergent series that is not unconditionally convergent is called conditionally convergent .   The key idea to understanding unconditional convergence lies in the observation that the problem with the alternating harmonic series was that it relied on cancellation of positive and negative terms to converge. In essence, we had that diverged and that also diverged.   A series is called absolutely convergent if converges.   We make this definition because of the following observation.    A series is absolutely convergent if and only if and , in which case .    Suppose is absolutely convergent, i.e. . Then every partial sum of positive terms satisfies , so the sequence of partial sums is a bounded increasing sequence and hence convergent. Similarly, noting that for negative terms , we have , so . Thus the sequence of partial sums of negative terms is a bounded decreasing sequence and hence convergent.  Suppose conversely that and . Then       If a series converges but is not absolutely convergent, then both and diverge.    The observation is that if a series converges, either and both converge or they both diverge. By , absolute convergence is equivalent to both converging, so since the series is not absolutely convergent we see that they must instead both diverge.     One loose way to think about what is going on is to note that if converges but is not absolutely convergent, then and , so . This intuition can be formalized into the following theorem.    Riemann Rearrangement Theorem   Let be a series.    A series is absolutely convergent if and only if it is unconditionally convergent.    A conditionally convergent series can be rearranged to converge to any value, as well as to be divergent.      For the first statement, first suppose converges but is not absolutely convergent. Then by , we have both and diverge.    "
},
{
  "id": "sec-alternating-3",
  "level": "2",
  "url": "sec-alternating.html#sec-alternating-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "alternating harmonic series "
},
{
  "id": "prop-alt-harmonic",
  "level": "2",
  "url": "sec-alternating.html#prop-alt-harmonic",
  "type": "Proposition",
  "number": "1.5.1",
  "title": "",
  "body": "  The alternating harmonic series converges.    Let be the -th partial sum. Then   Note that the series converges to some number by e.g. the limit comparison test with the -series .  Now let be given. Choose such that  is even (so );   ; and   for all .  Now suppose . If is even, then . If is odd, then write for some . Note that , so . Then    "
},
{
  "id": "prop-alt-harmonic-value",
  "level": "2",
  "url": "sec-alternating.html#prop-alt-harmonic-value",
  "type": "Proposition",
  "number": "1.5.2",
  "title": "",
  "body": "       First recall that converges to a number .  Now consider the partial sum Then we see   Since we already know the alternating harmonic series converges, and we found a subsequence converging to , by the alternating harmonic series must also converge to .   "
},
{
  "id": "activity-alt-harmonic-rearranged",
  "level": "2",
  "url": "sec-alternating.html#activity-alt-harmonic-rearranged",
  "type": "Activity",
  "number": "1.5.3",
  "title": "",
  "body": "  Let be the sequence given by      Write the first 20 terms of the sequence .      Do you think the series converges? If so, to what?      Find an expression for , , and .    "
},
{
  "id": "sec-alternating-8",
  "level": "2",
  "url": "sec-alternating.html#sec-alternating-8",
  "type": "Definition",
  "number": "1.5.4",
  "title": "",
  "body": " Let be a series. If is a bijection, then we call a rearrangement of the series.  "
},
{
  "id": "sec-alternating-9",
  "level": "2",
  "url": "sec-alternating.html#sec-alternating-9",
  "type": "Proposition",
  "number": "1.5.5",
  "title": "",
  "body": "  Let be the sequence given by . The series is a rearrangement of the alternating harmonic series and converges to .    Let be the -th partial sum. In , we deduced that . Similar to the proof of , we can get a common denominator and after some algebraic simplification observe . This series converges (e.g. by limit comparison to ), so by an argument analogous to the proof of , we can show this series converges.  We can also adapt the proof of to see what this converges to. We compute Note that , so we have . Since the series converges and this subsequence converges to , we have .   "
},
{
  "id": "sec-alternating-11",
  "level": "2",
  "url": "sec-alternating.html#sec-alternating-11",
  "type": "Definition",
  "number": "1.5.6",
  "title": "",
  "body": " A series is called unconditionally convergent if every rearrangement of the series converges. A convergent series that is not unconditionally convergent is called conditionally convergent .  "
},
{
  "id": "sec-alternating-13",
  "level": "2",
  "url": "sec-alternating.html#sec-alternating-13",
  "type": "Definition",
  "number": "1.5.7",
  "title": "",
  "body": " A series is called absolutely convergent if converges.  "
},
{
  "id": "thm-pos-neg",
  "level": "2",
  "url": "sec-alternating.html#thm-pos-neg",
  "type": "Theorem",
  "number": "1.5.8",
  "title": "",
  "body": "  A series is absolutely convergent if and only if and , in which case .    Suppose is absolutely convergent, i.e. . Then every partial sum of positive terms satisfies , so the sequence of partial sums is a bounded increasing sequence and hence convergent. Similarly, noting that for negative terms , we have , so . Thus the sequence of partial sums of negative terms is a bounded decreasing sequence and hence convergent.  Suppose conversely that and . Then    "
},
{
  "id": "cor-conditional-convergence",
  "level": "2",
  "url": "sec-alternating.html#cor-conditional-convergence",
  "type": "Corollary",
  "number": "1.5.9",
  "title": "",
  "body": "  If a series converges but is not absolutely convergent, then both and diverge.    The observation is that if a series converges, either and both converge or they both diverge. By , absolute convergence is equivalent to both converging, so since the series is not absolutely convergent we see that they must instead both diverge.   "
},
{
  "id": "sec-alternating-17",
  "level": "2",
  "url": "sec-alternating.html#sec-alternating-17",
  "type": "Remark",
  "number": "1.5.10",
  "title": "",
  "body": " One loose way to think about what is going on is to note that if converges but is not absolutely convergent, then and , so . This intuition can be formalized into the following theorem.  "
},
{
  "id": "thm-riemann-rearrangement",
  "level": "2",
  "url": "sec-alternating.html#thm-riemann-rearrangement",
  "type": "Theorem",
  "number": "1.5.11",
  "title": "Riemann Rearrangement Theorem.",
  "body": " Riemann Rearrangement Theorem   Let be a series.    A series is absolutely convergent if and only if it is unconditionally convergent.    A conditionally convergent series can be rearranged to converge to any value, as well as to be divergent.      For the first statement, first suppose converges but is not absolutely convergent. Then by , we have both and diverge.   "
},
{
  "id": "sec-ratio-root",
  "level": "1",
  "url": "sec-ratio-root.html",
  "type": "Section",
  "number": "1.6",
  "title": "Ratio and Root Tests",
  "body": " Ratio and Root Tests  "
},
{
  "id": "appendix-set-builder",
  "level": "1",
  "url": "appendix-set-builder.html",
  "type": "Section",
  "number": "A.1",
  "title": "Sets",
  "body": " Sets   We will work with a number of sets in this class. Common sets are  , the set of natural numbers.   Many authors will define the natural numbers to also include .   , the set of integers.  , the set of rational numbers.  , the set of real numbers defined in .       To describe which expressions (or \"elements\") belong to a set, we use the symbol to denote \"is an element of\", and to denote \"is not an element of\". For example, we might write , read as \" is an element of the rational numbers\", or to mean \" is not an element of the rationals\" (perhaps more colloquially we might say that as \" is not rational\").      Determine which of the following are true statements.                         False.  False.  False.  False.  True.  True.  True.  True.  False.      We will use the symbol to denote a containment relation between sets. That is, if we write for two sets and , we mean that is contained in , i.e. is a subset of .    Among the sets in , we have .    Set builder notation is a way to efficiently describe a set or a subset. It is an expression of the form , where The curly braces and denote a set, and means \"such that\". is called the predicate , and evaluates to true for members of the set.  To specify a subset of a given set , we would write for an appropriate predicate .     is the natural numbers .  is the interval .  is the even integers.      Describe the following sets.      These are the odd integers.                   or       Describe the following sets using set builder notation.    The interval .       The set of integers that are multiples of 3.       The set of natural numbers that are perfect squares.        The empty set is denoted or .   "
},
{
  "id": "def-number-sets",
  "level": "2",
  "url": "appendix-set-builder.html#def-number-sets",
  "type": "Definition",
  "number": "A.1.1",
  "title": "",
  "body": " We will work with a number of sets in this class. Common sets are  , the set of natural numbers.   Many authors will define the natural numbers to also include .   , the set of integers.  , the set of rational numbers.  , the set of real numbers defined in .    "
},
{
  "id": "def-set-notation",
  "level": "2",
  "url": "appendix-set-builder.html#def-set-notation",
  "type": "Definition",
  "number": "A.1.2",
  "title": "",
  "body": "  To describe which expressions (or \"elements\") belong to a set, we use the symbol to denote \"is an element of\", and to denote \"is not an element of\". For example, we might write , read as \" is an element of the rational numbers\", or to mean \" is not an element of the rationals\" (perhaps more colloquially we might say that as \" is not rational\").   "
},
{
  "id": "appendix-set-builder-4",
  "level": "2",
  "url": "appendix-set-builder.html#appendix-set-builder-4",
  "type": "Activity",
  "number": "A.1.3",
  "title": "",
  "body": "  Determine which of the following are true statements.                         False.  False.  False.  False.  True.  True.  True.  True.  False.    "
},
{
  "id": "appendix-set-builder-5",
  "level": "2",
  "url": "appendix-set-builder.html#appendix-set-builder-5",
  "type": "Definition",
  "number": "A.1.4",
  "title": "",
  "body": " We will use the symbol to denote a containment relation between sets. That is, if we write for two sets and , we mean that is contained in , i.e. is a subset of .  "
},
{
  "id": "appendix-set-builder-6",
  "level": "2",
  "url": "appendix-set-builder.html#appendix-set-builder-6",
  "type": "Example",
  "number": "A.1.5",
  "title": "",
  "body": " Among the sets in , we have .  "
},
{
  "id": "appendix-set-builder-7",
  "level": "2",
  "url": "appendix-set-builder.html#appendix-set-builder-7",
  "type": "Definition",
  "number": "A.1.6",
  "title": "",
  "body": " Set builder notation is a way to efficiently describe a set or a subset. It is an expression of the form , where The curly braces and denote a set, and means \"such that\". is called the predicate , and evaluates to true for members of the set.  To specify a subset of a given set , we would write for an appropriate predicate .  "
},
{
  "id": "appendix-set-builder-8",
  "level": "2",
  "url": "appendix-set-builder.html#appendix-set-builder-8",
  "type": "Example",
  "number": "A.1.7",
  "title": "",
  "body": "  is the natural numbers .  is the interval .  is the even integers.   "
},
{
  "id": "appendix-set-builder-9",
  "level": "2",
  "url": "appendix-set-builder.html#appendix-set-builder-9",
  "type": "Activity",
  "number": "A.1.8",
  "title": "",
  "body": "  Describe the following sets.      These are the odd integers.                   or    "
},
{
  "id": "appendix-set-builder-10",
  "level": "2",
  "url": "appendix-set-builder.html#appendix-set-builder-10",
  "type": "Activity",
  "number": "A.1.9",
  "title": "",
  "body": "  Describe the following sets using set builder notation.    The interval .       The set of integers that are multiples of 3.       The set of natural numbers that are perfect squares.      "
},
{
  "id": "appendix-set-builder-11",
  "level": "2",
  "url": "appendix-set-builder.html#appendix-set-builder-11",
  "type": "Definition",
  "number": "A.1.10",
  "title": "",
  "body": " The empty set is denoted or .  "
},
{
  "id": "appendix-problem-sets",
  "level": "1",
  "url": "appendix-problem-sets.html",
  "type": "Section",
  "number": "B.1",
  "title": "Problem Set 1",
  "body": " Problem Set 1     Determine if the sequence converges or diverges.      Determine if the sequence converges or diverges.      Determine if the sequence converges or diverges.      Determine if the sequence converges or diverges.      Determine if the sequence converges or diverges.      Let be a sequence defined by Does converge or diverge?      Let be a sequence defined by Does converge or diverge?      Prove that the sequence converges to if and only if converges to .      (Tricky) Determine if the sequence converges or diverges.      (Tricky) Determine if the sequence converges or diverges.     "
},
{
  "id": "appendix-problem-sets-2-1",
  "level": "2",
  "url": "appendix-problem-sets.html#appendix-problem-sets-2-1",
  "type": "Exercise",
  "number": "B.1.1",
  "title": "",
  "body": "  Determine if the sequence converges or diverges.   "
},
{
  "id": "appendix-problem-sets-2-2",
  "level": "2",
  "url": "appendix-problem-sets.html#appendix-problem-sets-2-2",
  "type": "Exercise",
  "number": "B.1.2",
  "title": "",
  "body": "  Determine if the sequence converges or diverges.   "
},
{
  "id": "appendix-problem-sets-2-3",
  "level": "2",
  "url": "appendix-problem-sets.html#appendix-problem-sets-2-3",
  "type": "Exercise",
  "number": "B.1.3",
  "title": "",
  "body": "  Determine if the sequence converges or diverges.   "
},
{
  "id": "appendix-problem-sets-2-4",
  "level": "2",
  "url": "appendix-problem-sets.html#appendix-problem-sets-2-4",
  "type": "Exercise",
  "number": "B.1.4",
  "title": "",
  "body": "  Determine if the sequence converges or diverges.   "
},
{
  "id": "appendix-problem-sets-2-5",
  "level": "2",
  "url": "appendix-problem-sets.html#appendix-problem-sets-2-5",
  "type": "Exercise",
  "number": "B.1.5",
  "title": "",
  "body": "  Determine if the sequence converges or diverges.   "
},
{
  "id": "appendix-problem-sets-2-6",
  "level": "2",
  "url": "appendix-problem-sets.html#appendix-problem-sets-2-6",
  "type": "Exercise",
  "number": "B.1.6",
  "title": "",
  "body": "  Let be a sequence defined by Does converge or diverge?   "
},
{
  "id": "appendix-problem-sets-2-7",
  "level": "2",
  "url": "appendix-problem-sets.html#appendix-problem-sets-2-7",
  "type": "Exercise",
  "number": "B.1.7",
  "title": "",
  "body": "  Let be a sequence defined by Does converge or diverge?   "
},
{
  "id": "appendix-problem-sets-2-8",
  "level": "2",
  "url": "appendix-problem-sets.html#appendix-problem-sets-2-8",
  "type": "Exercise",
  "number": "B.1.8",
  "title": "",
  "body": "  Prove that the sequence converges to if and only if converges to .   "
},
{
  "id": "appendix-problem-sets-2-9",
  "level": "2",
  "url": "appendix-problem-sets.html#appendix-problem-sets-2-9",
  "type": "Exercise",
  "number": "B.1.9",
  "title": "",
  "body": "  (Tricky) Determine if the sequence converges or diverges.   "
},
{
  "id": "appendix-problem-sets-2-10",
  "level": "2",
  "url": "appendix-problem-sets.html#appendix-problem-sets-2-10",
  "type": "Exercise",
  "number": "B.1.10",
  "title": "",
  "body": "  (Tricky) Determine if the sequence converges or diverges.   "
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
