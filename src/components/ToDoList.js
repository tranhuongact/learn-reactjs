import React from 'react';

class ToDolist extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            item: '',
            toDoList: []
        }
    }

    handleChange = (e) => {
        this.setState({item: e.target.value})
    }

    addItem = () => {
        const list = [...this.state.toDoList];
        const item = this.state.item;
        if (item !== null) {
            list.push(item);
            this.setState({
                toDoList: list,
                item: ''
            })
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input onChange={this.handleChange} value={this.state.item}/>
                    <button onClick={this.addItem}>Add</button>
                </div>
                <div>
                    <ul>
                        {this.state.toDoList && this.state.toDoList.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ToDolist;