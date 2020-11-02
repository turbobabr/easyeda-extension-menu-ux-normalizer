(function () {
  function logMessage(msg) {
    console.log("[main-menu-ux-normalizer]: " + msg);
  }

  function preventEvent(e) {
    e.stopImmediatePropagation();
    e.preventDefault();
  }

  function onMouseOver(e) {
    preventEvent(e);
  }

  function onMouseOut(e) {
    preventEvent(e);
  }

  if (!$) {
    logMessage("jQuery instance is undefined.");
    return;
  }

  var result = $('#toolbar-common');
  if (result && result.get(0)) {
    var toolbar = result.get(0);

    toolbar.addEventListener('mouseover', onMouseOver, true);
    toolbar.addEventListener('mouseout', onMouseOut, true);
  } else {
    logMessage("Cannot find '#toolbar-common' element!");
  }

})();