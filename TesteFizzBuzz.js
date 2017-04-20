function fizzBuzz() {
    var lista = [];
    for (x = 0; x < 100; x++) {
        var value = x + 1;

        if (value % 3 == 0 && value % 5 == 0) {
            lista[x] = "FizzBuzz";
            continue;
        }

        if (value % 3 == 0) {
            lista[x] = "Fizz";
            continue;
        }
        if (value % 5 == 0) {
            lista[x] = "Buzz";
            continue;
        }

        if (lista[x] == undefined) lista[x] = value;
    }
    return lista;
};


var results = fizzBuzz();
console.log(lista);
