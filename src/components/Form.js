import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            comment: '',
            sport: 'football',
            single: true
        }
    }

    handleUsername = (e) => {
        this.setState({
            username : e.target.value
        })
    }

    handleSingle = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleComment = (e) => {
        this.setState({
            comment : e.target.value
        })
    }

    handleSelectSport = (e) => {
        this.setState({
            sport : e.target.value
        })
    }

    handleSubmit = (e) => {
        alert(
            "Username: " + this.state.username + "\n" +
            "Single: " + this.state.single + "\n" +
            "Comment: " + this.state.comment + "\n" +
            "Sport: " + this.state.sport
        )
        e.defaultPrevent();
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Username:
                        <input type="text" value={this.state.username} onChange={this.handleUsername}/>
                    </label>
                    <br/>
                    <label>
                        Single:
                        <input type="checkbox" name="single" checked={this.state.single} onChange={this.handleSingle} />                        
                    </label>
                    <br/>
                    <label>
                        Comment:
                        <textarea value={this.state.comment} onChange={this.handleComment}/>
                    </label>
                    <br/>
                    <label>
                        Sport:
                        <select value={this.state.sport} onChange={this.handleSelectSport}>
                            <option value="football">Football</option>
                            <option value="volleyball">Volleyball</option>
                            <option value="basketball">Basketball</option>
                            <option value="marathon">Marathon</option>
                            <option value="swimming">Swimming</option>
                        </select>
                    </label>
                    <br/>
                    <input type='submit' onClick={this.handleSubmit} style={{marginTop:0.5 + 'em'}}/>
                </form>
            </div>
        );
    }
}

export default Form;