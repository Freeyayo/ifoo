/*
 * @Date: 2020-07-13 00:10:54
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-07-14 22:53:10
 * @FilePath: /spurv/ifoo/test/private_mode.test.js
 */ 
import { privateMode } from '../src/index';

const Hellen = {
    name: "Hellen",
    _age: 30,
    sayName(){
        return this.name
    },
    _sayAge(){
        return this._age;
    }
}

test("object calls privateMode", () => {
    const HellenSecret = privateMode(Hellen);
    expect(() => HellenSecret._age).toThrow();
    expect(() => HellenSecret._sayAge()).toThrow();
    expect(HellenSecret.name).toBe("Hellen");
    expect(HellenSecret.sayName()).toBe("Hellen");
});

class Tom {
    constructor(){
        this.name = "Tom"
        this._steamPassword = 5532
    }
    sayName(){
        return this.name
    }
    _sayPassword(){
        return this._age;
    }
}

test("class calls privateMode", () => {
    const TomSecret = privateMode(new Tom());
    expect(() => TomSecret._steamPassword).toThrow();
    expect(() => TomSecret._sayPassword()).toThrow();
    expect(TomSecret.name).toBe("Tom");
    expect(TomSecret.sayName()).toBe("Tom");
    expect(typeof TomSecret.__proto__).toBe("object");
});