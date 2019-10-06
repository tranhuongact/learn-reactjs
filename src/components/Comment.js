import React from 'react';

function formatDate(date) {
    return date.toLocaleDateString();
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Author',
      avatarUrl: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png',
    },
};

function Avatar(props) {
    return(
        <img
            className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
            width='60px'
        />
    )
}

function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          {/* <img
            className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
            width='60px'
          /> */}
          <Avatar author={props.author} />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div> 
      </div>
    );
}


class Comment extends React.Component {
    render(){
        return(
            <div className='comment'>
                <Avatar />
                <div className='User-info'>
                    {this.props.name}
                </div>

            </div>
        )
    }
}