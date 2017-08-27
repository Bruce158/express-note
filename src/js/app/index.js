// require('less/index.less');

// var NoteManager = require('mod/note-manager.js').NoteManager;
// var Event = require('mod/event.js');
// var WaterFall = require('mod/waterfall.js');

// NoteManager.load();

// $('.add-note').on('click', function() {
//   NoteManager.add();
// })

// Event.on('waterfall', function(){
//   WaterFall.init($('#content'));
// })

//////////////////////test//////////////
let event = require('../mod/event')
event.on('click',function(){console.log('click1')})
event.on('click',function(){console.log('click2')})
event.on('load',function(){console.log('load1')})
event.trigger('click')
event.trigger('load')

// let toast = require('../src/js/mod/toast')
// toast('sdfsd',5000);
// let waterfall = require('../src/js/mod/note')