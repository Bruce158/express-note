var Toast = require('./toast.js').Toast;
var Note = require('./note.js').Note;
var Toast = require('./toast.js').Toast;
var Event = require('./event.js');

class NoteManager {
  constructor() {
  }

  load() {
    $.get('/api/notes')
    .done(function(ret){
      if(ret.status == 0){
        $.each(ret.data, function(idx, article) {
            new Note({
              id: article.id,
              context: article.text
            });
        });

        Event.trigger('waterfall');
      }else{
        Toast(ret.errorMsg);
      }
    })
    .fail(function(){
      Toast('网络异常');
    });
  }

  add() {
    new Note();
  }
}

let noteManager = new NoteManager()
module.exports = noteManager