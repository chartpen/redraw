$(document).ready(function() {
  new redraw.Annotation(document.getElementById('watch'), {
    buttonActiveClass: 'active',
    buttonClass: 'mdl-button mdl-js-button mdl-color-text--grey-600',
    toolbarFirst: true,
    tools: ['arrow', 'horizontalLine', 'pixelate', 'rectangle', 'text', 'delete', 'reset'],
    maxWidth: 700
  });

  new redraw.Annotation(document.getElementById('football'), {
    color:'#5e5',
    maxWidth: 700
  });

  new redraw.Annotation(document.getElementById('flowers'), {
    color:'#b72a19',
    activeColor: '#b72a19',
    maxWidth: 700
  });
});
