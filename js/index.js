$(document).ready(function() {
    /**
     * Add evento de click
     */
    function onAdd() {
        var $ul, li, $li, $label, $div, livro, autor;
        livro = $('.js-novo-livro').val();
        autor = $('.js-novo-autor').val();
    
        // valida se “livro” está vazio
        if (livro === '') {
              return;
        }
    
        $ul = $('ul');
        $li = $('<li>').appendTo($ul);
        $div = $('<div>')
              .addClass('checkbox')
              .appendTo($li);
    
        $label = $('<label>').appendTo($div);
        $('<input>')
              .attr('type', 'checkbox')
              .addClass('js-livro')
              .attr('name', 'list')
              .click(toggleRemovido)
              .appendTo($label);
    
        $('<big>')
              .appendTo($label)
              .append(livro);
    
        $label.append(" - ");
    
        $('<small>')
              .appendTo($label)
              .append(autor);
    
        $('.js-novo-livro, .js-novo-autor').val('');
    }

    /**
     * Evento de click do checkbox
     */
    function toggleRemovido(ev) {
          var $el;
          $el = $(ev.currentTarget);
          $el.closest('li').toggleClass('removido');
    }
    $('.js-add').click(onAdd);
    $('.js-livro').click(toggleRemovido);

    // // Comando 1
    // var data = {
    //     livros: ['Orange is The New Black - Piper Kerman', 'A Origem das Espécies - Charles Darwin'],
    //     titulo: 'Livros 2'
    // };
    // // Comando 2
    // new Vue({
    //     el: '#app',
    //     data: data
    // });
});