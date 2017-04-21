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


var resultado = fizzBuzz();
console.log(lista);

test("Retorna o total de itens", function() {
    equal(resultado.length, 100);
});

test("verificação do primeiro resultado igual a 1", function() {
    equal(resultado[0], 1);
});

test("print do fizz no número 3", function() {
    equal(resultado[2], "Fizz");
});

test("print do buzz no número 5", function() {
    equal(resultado[4], "Buzz");
});

test("print do fizzbuzz no número 15", function() {
    equal(resultad[14], "FizzBuzz");
});
