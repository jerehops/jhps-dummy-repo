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

const data = [
    {
        first: "Bob",
        last: "Marlay"
    },
    {
        first: "Elvis",
        last: "Presley"
    },
    {
        first: "Donald",
        last: "Trump"
    }

]

const newData = "Is this an issue? hehe."

data.forEach(element => {
    const DummyPerson = new Person(element.first, element.last);
    console.log(DummyPerson.first + " " + DummyPerson.last)
});

var userName = "Jeremy Ho"

for ( i=0; i<5; i++) {
    console.log(userName);
}