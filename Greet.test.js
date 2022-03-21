const Greet = require('./Greet');

describe('test Greet()', () => {
    test('greet one name', () => {
        expect(Greet('Elizabeth')).toEqual('Hello, Elizabeth');
    });
    test('greet guest', () => {
        expect(Greet()).toEqual('Hello there!');
    });
    test('greets two names', () => {
        expect(Greet(['Jose', 'Pep'])).toEqual('Hello, Jose, Pep');
    });
    test('greets multiple names', () => {
        expect(Greet(['Alex', 'Arsene', 'Jose', 'Zidane'])).toEqual(
            'Hello, Alex, Arsene, Jose, Zidane');
    });  
    test('uppercase greeting when name is uppercase', () => {
        expect(Greet('JOSE')).toEqual('HELLO, JOSE!');
    });
});                                                                                                                      
