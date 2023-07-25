window.onload = function () {
  var elements = document.getElementsByClassName("abouts");

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var text = element.innerHTML;
    var newText = text.replace(
      /mokdan/gi,
      "<span style='text-transform: uppercase; font-weight: bold;'>$&</span>"
    );
    element.innerHTML = newText;
  }
};
