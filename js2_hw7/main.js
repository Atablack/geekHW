class TrafficLight {
    constructor(docs) {
        this.$element = document.querySelector(docs)
    }

    red() {
        this.$element.style.backgroundColor = 'red'
    }

    yellow() {
        this.$element.style.backgroundColor = 'yellow'
    }

    green() {
        this.$element.style.backgroundColor = 'green'
    }

}

class Circles extends TrafficLight {
    constructor (layout) {
        super(layout.docs);
        this.$element.style.width = this.$element.style.height = layout.size + 'px'
        this.$element.style.background = 'black'
        this.$element.style.borderRadius = '50%'
        this.$element.style.margin = '10px'
    }
}

const red = new Circles ({
    docs: '#red',
    size: 100,
})

const yellow = new Circles ({
    docs: '#yellow',
    size: 100,
})

const green = new Circles ({
    docs: '#green',
    size: 100,
})

let color = prompt('choose one of this colors: red, yellow or green').trim().toLowerCase()
if (color === 'red') {
    red.red() 
} else if (color === 'yellow') {
    yellow.yellow()
} else if (color === 'green') {
    green.green()
} else {
    alert('u did it wrong')
}