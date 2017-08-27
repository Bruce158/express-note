class EventCenter {
  constructor() {
    this.events = {}
  }
  
  on(evt, handler) {
    this.events[evt] = this.events[evt] || []
    this.events[evt].push({
      handler:handler
    })
  }

  trigger(evt, args) {
    if (!this.events[evt]) return
    for (let i = 0; i < this.events[evt].length; i++) {
      this.events[evt][i].handler(args)
    } 
  }
}

let eventCenter = new EventCenter()

module.exports = eventCenter


