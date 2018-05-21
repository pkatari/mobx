import { action,computed,observable } from 'mobx';

/* tslint:disable:no-console */
export default class TodoList {

    @observable public todos: object[] = [];
    @observable public timer = 0;
    @computed public get unfinishedTodoCount() {     
        return this.todos.filter( (todo:any) => !todo.finished).length;
    }
    @action public resetTimer = () => {
        this.timer = 0;
    };   

    @action public increment = () => {
        this.timer++ // 'this' will always be correct
    }
}