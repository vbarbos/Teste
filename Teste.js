test("Retorna o total de itens", function() {
    equal(results.length, 100);
});

test("verificação do primeiro resultado igual a 1", function() {
    equal(results[0], 1);
});

test("print do fizz no número 3", function() {
    equal(results[2], "Fizz");
});

test("print do buzz no número 5", function() {
    equal(results[4], "Buzz");
});

test("print do fizzbuzz no número 15", function() {
    equal(results[14], "FizzBuzz");
});
