/*
 * @Date: 2020-07-18 02:37:38
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-07-19 02:18:43
 * @FilePath: /spurv/ifoo/test/linked_list.test.js
 */ 
import { linkedList } from "../src/index";

test("append an element to the linkedlist", () => {
    const linkedlist = linkedList()
    linkedlist.append("grandpa")
    expect(linkedlist.getHead().element).toBe("grandpa");
    linkedlist.append("papa")
    expect(linkedlist.getHead().next.element).toBe("papa");
});

test("remove an element by specifying its position", () => {
    const linkedlist = linkedList()
    linkedlist.append("grandpa")
    linkedlist.append("papa")
    linkedlist.append("Billy")
    linkedlist.removeAt(1)
    expect(linkedlist.getHead().element).toBe("grandpa")
    expect(linkedlist.getHead().next.element).toBe("Billy")
    expect(linkedlist.getHead().next.next).toBe(null)
});

test("remove an element by specifying its value", () => {
    const linkedlist = linkedList()
    linkedlist.append("grandpa")
    linkedlist.append("papa")
    linkedlist.append("Billy")

    linkedlist.remove("papa")
    
    expect(linkedlist.getHead().element).toBe("grandpa")
    expect(linkedlist.getHead().next.element).toBe("Billy")
    expect(linkedlist.getHead().next.next).toBe(null)
});

test("use indexOf to find an element's position", () => {
    const linkedlist = linkedList()
    linkedlist.append("grandpa")
    linkedlist.append("papa")
    linkedlist.append("Billy")
    expect(linkedlist.indexOf("grandpa")).toBe(0)
    expect(linkedlist.indexOf("papa")).toBe(1)
    expect(linkedlist.indexOf("Billy")).toBe(2)
    expect(linkedlist.indexOf("Tom")).toBe(-1)
});

test("return list's length", () => {
    const linkedlist = linkedList()
    linkedlist.append("grandpa")
    linkedlist.append("papa")
    linkedlist.append("Billy")
    expect(linkedlist.size()).toBe(3)
});

test("is list empty", () => {
    const linkedlist = linkedList()
    linkedlist.append("grandpa")
    linkedlist.append("papa")
    linkedlist.append("Billy")
    expect(linkedlist.isEmpty()).toBe(false)

    linkedlist.remove("grandpa")
    linkedlist.remove("papa")
    linkedlist.remove("Billy")
    expect(linkedlist.isEmpty()).toBe(true)
});