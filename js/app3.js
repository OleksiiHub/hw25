const calculate = {
    ask: {
        numFirst: +prompt('First Number'),
        numSecond: +prompt('Second Number')
    },
    sum: function (numFirst, numSecond) {
        return `${this.numFirst + this.numSecond}`;
    },
    mul: function() {
        return `${this.numFirst * this.numSecond}`;
    }
}

