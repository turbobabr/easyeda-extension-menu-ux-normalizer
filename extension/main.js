// extension-fixmenu-id
(function () {
  function logMessage(msg) {
    console.log("[main-menu-ux-normalizer]: " + msg);
  }

  function isMenuActive(){
    // Sorry jQuery, too slow
    return toolbar.getElementsByClassName("m-btn-plain-active").length !== 0;
  }

  function preventEvent(e) {
    e.stopImmediatePropagation();
    e.preventDefault();
  }

  function onMouseOver(e) {
    if (!isMenuActive()) {
      preventEvent(e);
    }
  }

  function onMouseOut(e) {
    preventEvent(e);
  }

  function onMouseDown(e) {
    wasMenuActiveOnMouseDown = isMenuActive();
    if (!wasMenuActiveOnMouseDown) {
      preventEvent(e);
    }
  }

  function onClick(e) {
    if (wasMenuActiveOnMouseDown) {
      preventEvent(e);
    }
  }

  if (!$) {
    logMessage("jQuery instance is undefined.");
    return;
  }

  var wasMenuActiveOnMouseDown = false;
  var result = $('#toolbar-common');
  if (result && result.get(0)) {
    var toolbar = result.get(0);

    toolbar.addEventListener('mouseover', onMouseOver, true);
    toolbar.addEventListener('mouseout', onMouseOut, true);
    toolbar.addEventListener('mousedown', onMouseDown, true);
    toolbar.addEventListener('click', onClick, true);
  } else {
    logMessage("Cannot find '#toolbar-common' element!");
  }

})();
