/*
 * @Date: 2020-07-18 02:15:52
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-07-18 23:31:02
 * @FilePath: /spurv/ifoo/src/utils/datastructure/linked_list.ts
 */ 
import { privateMode } from '../functions/index'

import {
    ILinkedList,
    LinkedListNode
} from './types/data_interfaces'

/**
 * linked list node
 */
class Node implements LinkedListNode {
    public element: any
    public next: LinkedListNode
    constructor(element: any){
        this.element = element
        this.next = null
    }
}

class LinkedList implements ILinkedList {

    private _length: number
    private _head: LinkedListNode

    constructor(){
        this._length = 0
        this._head = null
    }

    /**
     * appends an element to the tail of the list
     */
    public append(element: any): boolean {
        const node: LinkedListNode = new Node(element)
        if(this._head === null){
            this._head = node
        }else{
            let currentNode: LinkedListNode = this._head
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = node
        }
        this._length++
        return true
    }

    /**
     * inserts an element into any position of the list
     */
    public insert(position: number, element: any): boolean {
        if(position >= 0 && position <= this._length){
            const node: LinkedListNode = new Node(element)
            let currentNode: LinkedListNode = this._head
            let index = 0
            let previousNode: LinkedListNode = null;
            if(position === 0){
                node.next = currentNode
                this._head = node
            }else{
                while(index++ < position){
                    previousNode = currentNode
                    currentNode = currentNode.next
                }
                previousNode.next = node
                node.next = currentNode
            }
            this._length++
            return true
        }else{
            return false
        }
    }

    /**
     * removes an element by specifying its position
     */
    public removeAt(position: number): boolean {
        if(position > -1 && position < this._length){
            let currentNode: LinkedListNode = this._head
            let index = 0
            let previousNode: LinkedListNode = null;
            if(position === 0){
                this._head = currentNode.next
            }else{
                while(index++ < position){
                    previousNode = currentNode
                    currentNode = currentNode.next
                }
                previousNode.next = currentNode.next
            }
            this._length--
            return true
        }else{
            return false
        }
    }

    /**
     * remove method is combined with indexOf and removeAt
     */
    public remove(element: any): boolean {
        const index = this.indexOf(element)
        if(index === -1){
            return false
        }else{
            return this.removeAt(index)
        }
    }

    /**
     * finds an element's position in the list, if there's none, return -1
     */
    public indexOf(element: any): number {
        let currentNode: LinkedListNode = this._head
        let index = 0;
        while(currentNode){
            if(element === currentNode.element) return index
            currentNode = currentNode.next
            index++
        }
        return -1
    }

    /**
     * returns the result of is the list empty
     */
    public isEmpty(): boolean {
        return this._length === 0
    }

    /**
     * returns the size of the list
     */
    public size(): number {
        return this._length
    }

    /**
     * gets list's head node
     */
    public getHead(): LinkedListNode {
        return this._head
    }
    
}

export const linkedList = (): ILinkedList | ProxyConstructor=> {
    const l: ILinkedList = new LinkedList();
    return privateMode(l);
}