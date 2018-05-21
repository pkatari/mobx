import { observable } from 'mobx';

export default class Todo {
    public id = Math.random();
    @observable public title:string;
    @observable public finished:boolean = false;
    constructor(title:string) {
        this.title = title;
    }
}