Mensagem = new Meteor.Collection('mensagem');
if (Meteor.isClient) {
  Template.formulario.events({
    'click #enviar': function(event, template) {
      var nome = template.find('#nome').value;
      var conteudo = template.find('#conteudo').value;
      Mensagem.insert({ nome: nome, 
                        conteudo: conteudo, 
                        data: new Date().toLocaleString() });
      event.preventDefault();
    }
  });

  Template.mensagens.timeline = function() {
    return Mensagem.find();
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Mensagem.remove({});
    console.log("Rodando MicroTwitter");    
  });
}