import React from 'react';

export const List = ({ title }) => {

  return (
    <>
      <h4>{title}</h4>
      <div>リストです</div>
    </>
  )
}



// export class List extends React.Component{
//   render(){
//     const { title } = this.props;

//     return (
//       <div>
//         <h4>{ title }</h4>
//         <div>リストです</div>
//       </div>
//     )
//   }
// }


