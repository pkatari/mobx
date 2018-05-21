import { observer } from 'mobx-react';
import * as React from 'react';

export interface IToDoViewProps {
    todo : any;
}

@observer
export default class TodoView extends React.Component<IToDoViewProps> {
    
    public handleFinish = () => {
        return this.props.todo.finished = !this.props.todo.finished
    };

    public render() {

        return  (
            <li>
                <input type="checkbox" checked={this.props.todo.finished} onChange={this.handleFinish}
            />{this.props.todo.title}
            </li>
        ); 
    }
}
