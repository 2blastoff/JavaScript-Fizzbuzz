describe('for fizzbuzz', function() {
  var number = new Fizzbuzz()

  it('fizzes for 3', function() {
    expect(number.play(3)).toEqual('fizz');
  });

  it('buzzes for 5', function() {
    expect(number.play(5)).toEqual('buzz');
  });

  it('fizzbuzzes for 15', function() {
    expect(number.play(15)).toEqual('fizzbuzz');
  });
});
