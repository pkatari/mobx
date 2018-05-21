import { autorun,get,observable,set,values } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import Todo from './Todo';
import TodoList from './ToDoList';
import ToDoListView from './ToDoListView';

/* tslint:disable:no-console */
const store:any = new TodoList();
console.log(store);
store.todos.push(
	new Todo("Jai Mata Di"),
    new Todo("Get Coffee"),
	new Todo("Write simpler code"),
	new Todo("Write simpler codessss")
);
store.todos[0].finished = true;
/*
setInterval(() => {
    store.timer += 1;
}, 1000);  */

setInterval(store.increment, 1000);

const twitterUrls = observable.object({
    "John": "twitter.com/johnny"
})

autorun(() => {
    console.log(get(twitterUrls, "Sara")) // get can track not yet existing properties
})

autorun(() => {
    console.log("All urls: " + values(twitterUrls).join(", "))
})

set(twitterUrls, { "Sara" : "twitter.com/horsejs"})

autorun(() => {
    console.log("Completed %d of %d items",
	store.timer,
	store.todos.length
    );
});



@observer
class App extends React.Component {

    public render() { 
		return (
	       <ToDoListView todoList = {store} />
		);
	}
    
}

export default App;