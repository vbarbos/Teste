function fizzBuzz() {
    var resultado = [];
    for (i = 0; i < 100; i++) {
        var value = i + 1;

        if (value % 3 == 0) {
            resultado[i] = "Fizz";
            continue;
        }
        if (value % 5 == 0) {
            resultado[i] = "Buzz";
            continue;
        }

        if (value % 3 == 0 && value % 5 == 0) {
            resultado[i] = "FizzBuzz";
            continue;
        }

        if (resultado[i] == undefined) resultado[i] = value;
    }
    return resultado;
};


var resultado = fizzBuzz();
console.log(resultado);

QUnit.test("Retorna o total de itens", function(assert) {
    assert.ok(resultado.length, 100);
});

QUnit.test("verificação do primeiro resultado igual a 1", function(assert) {
    assert.ok(resultado[0], 1);
});

QUnit.test("print do fizz no número 3", function(assert) {
    assert.ok(resultado[2], "Fizz");
});

QUnit.test("print do buzz no número 5", function(assert) {
    assert.ok(resultado[4], "Buzz");
});

QUnit.test("print do fizzbuzz no número 15", function(assert) {
    assert.ok(resultado[14], "FizzBuzz");
});
