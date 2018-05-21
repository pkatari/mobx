import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import * as React from 'react';
import TodoView from './ToDoView';

/* tslint:disable:no-console */
export interface IToDoListViewProps {
    todoList : any;
}

@observer
export default class TodoListView extends React.Component<IToDoListViewProps> {
    
    public onReset = () => {
        this.props.todoList.resetTimer();
    }

    public render() {
        return <div>
            <ul>
                {this.props.todoList.todos.map( (todo:any) => 
                    <TodoView todo={todo} key={todo.id} />
                )}
            </ul>
            Tasks left: {this.props.todoList.unfinishedTodoCount}
            <br/>
            <button onClick={this.onReset}>
        	Seconds passed: {this.props.todoList.timer}
            </button>
            <DevTools />
        </div>
    }
}