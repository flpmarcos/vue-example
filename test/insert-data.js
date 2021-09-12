// Insert this data in f12 console to browser

// Comando 1
var data = {
    livros: ['Orange is The New Black - Piper Kerman', 'A Origem das Espécies - Charles Darwin'],
    titulo: 'Livros 2'
};
// Comando 2
new Vue({
    el: '#app',
    data: data
});

//alter tittle
data.titulo = "Livros Preferidos";

// alter table
data.livros.push("Senhora - José de Alencar");


//checkando ja lidos
var data = {
    livros: [{ titulo: 'Orange is The New Black', autor: 'Piper Kerman', checked: true },
            { titulo: 'A Origem das Espécies', autor: 'Charles Darwin', checked: false }],
    cabecalho: 'Livros Preferidos',
    novoLivro: '',
    novoAutor: ''
};

// Vue modified
new Vue({
    el: '#app',
    data: data,
    methods: {
      addLivro: function () {
        var titulo = this.novoLivro.trim();
        var autor = this.novoAutor.trim();
        if (titulo && autor) {
          this.livros.push({
            titulo: titulo,
            autor: autor,
            checked: false
          });
          this.novoLivro = '';
          this.novoAutor = '';
        }
      }
    }
  });
