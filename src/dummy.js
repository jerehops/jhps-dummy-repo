const Person = function(first, last, middle) {
    this.first = first;
    this.middle = middle;
    this.last = last;
};

Person.prototype = {
    whoAreYou : function() {
        return this.first + (this.middle ? ' ' + this.middle: '') + ' ' + this.last;
    }

};

// console.log(DummyPerson.first + " " + DummyPerson.last)

let data = [
    {
        first: "Jeremy",
        last: "Ho"
    },
    {
        first: "Jolene",
        last: "Low"
    }
]

data.forEach(element => {
    const DummyPerson = new Person(element.first, element.last);
    console.log(DummyPerson.first + " " + DummyPerson.last)
});


