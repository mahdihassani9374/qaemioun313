$(function () {
  var dd = $('.vticker').easyTicker({
    direction: 'up',
    interval: 3000,
    visible: 1,
    mousePause: 0,
    controls: {
      up: '.vticker-next',
      down: '.vticker-prev',
      toggle: '.toggle',
      stopText: 'Stop !!!'
    }
  }).data('easyTicker');
});