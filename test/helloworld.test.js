import myName from '../utils/helloworld.mjs';
import assert from 'assert';

it("Tests helloworld", ()=>{

    const hello = myName();

    assert.equal(hello,"Hello Logan");

});