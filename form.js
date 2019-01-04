Vue.filter('filter_upper', function(val){
    if(val){
        return val.toString().toUpperCase();
    }
});

var vm = new Vue({
    el: '#page_form',
    data:{
        pessoa: {
            id: 0,
            nome: '',
            idade: 0
        },
        pessoas:[]
    },
    methods:{
        add_pessoa: function(){
            var p = {
                id: this.pessoas.length,
                nome: this.pessoa.nome,
                idade: this.pessoa.idade
            };
            
            this.pessoas.push(p);
        }
    }
});