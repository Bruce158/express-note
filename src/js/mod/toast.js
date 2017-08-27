// require('less/toast.less');
// let $ = require('jquery')
// let $ = require('jQuery')
var $ = require('jQuery')
var webpack = require('webpack');
class Toast {
  constructor(msg, time) {
    this.msg = msg
    this.dismissTime = time||1000;  //ms
    this.create()
    this.show()
  }

  create() {
    this.$toast  = $(`<div class="toast">${this.msg}</div>`)
    $('body').append(this.$toast);
  }

  show() {
    this.$toast.fadeIn(300,()=>{
      setTimeout(()=>{
        this.$toast.fadeOut(300,()=>{
          this.$toast.remove()
        })
      },this.dismissTime)
    })
  }
}

module.exports = (msg, time)=>(new Toast(msg, time))


