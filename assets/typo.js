// Typografia: niełamliwa spacja po jednoliterowych słowach (i, a, o, u, w, z…),
// po skrótach (ok., np., m.in.) i między liczbą a tym, co po niej następuje.
// Działa na tekście artykułu, więc ręczne poprawki w HTML nie wymagają żadnych kodów.
(function () {
  var NB = " ";
  var short = /(^|[\s(„"])([aiouwzAIOUWZ]|ok\.|np\.|m\.in\.|tj\.|tzw\.)[ \t\r\n]+/g;
  var num = /(\d)[ \t\r\n]+(?=[\dA-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż%¢$±−-])/g;
  function fix(t) {
    for (var i = 0; i < 3; i++) t = t.replace(short, "$1$2" + NB);
    return t.replace(num, "$1" + NB);
  }
  var roots = document.querySelectorAll(".article p, .article li, .article blockquote, .article figcaption, .article h2, .article h3, .list p");
  roots.forEach(function (root) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = w.nextNode())) n.nodeValue = fix(n.nodeValue);
  });
})();
