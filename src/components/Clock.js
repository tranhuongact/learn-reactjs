import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount(){
// Hàm setInterval() sẽ gọi một hàm khác (hoặc một đoạn code) 
// cứ sau một khoảng thời gian ấn định. Hàm này trả về ID của quá trình gọi này.
// Giá trị ID được dùng để ngắt quá trình gọi lặp lại này bằng hàm clearInterval(ID)
        this.timerID = setInterval(() => this.tick(),1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;