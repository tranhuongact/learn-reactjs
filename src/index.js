import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


// ReactDOM.render(<h1>Hello world!!</h1>, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById('root'));

      
// function tick(){
//     const element = (
//         <div>
//             <h2>It is {new Date().toLocaleTimeString()}</h2>            
//         </div>
//     )
//     ReactDOM.render(element, document.getElementById("root"));
// }

// setInterval(tick, 1000)


// function formatDate(date) {
//     return date.toLocaleDateString();
// }

// const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//       name: 'Author',
//       avatarUrl: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png',
//     },
// };

// function Avatar(props) {
//     return(
//         <img
//             className="Avatar"
//             src={props.author.avatarUrl}
//             alt={props.author.name}
//             width='60px'
//         />
//     )
// }

// function Comment(props) {
//     return (
//       <div className="Comment">
//         <div className="UserInfo">
//           {/* <img
//             className="Avatar"
//             src={props.author.avatarUrl}
//             alt={props.author.name}
//             width='60px'
//           /> */}
//           <Avatar author={props.author} />
//           <div className="UserInfo-name">
//             {props.author.name}
//           </div>
//         </div>
//         <div className="Comment-text">{props.text}</div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div> 
//       </div>
//     );
// }

// ReactDOM.render(
//     <Comment
//         date={new Date()}
//         text="Learn Reatjs!"
//         author={comment.author}
//     />,
//     document.getElementById('root')
// );

