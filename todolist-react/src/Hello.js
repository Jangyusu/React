import React, { Component } from 'react';

class Hello extends Component {
  static defaultProps = {
    name: '이름없음',
  };

  render() {
    const { color, isSpecial, name } = this.props;
    return (
      <div
        style={{
          color,
        }}
      >
        <b>{isSpecial ? '스페셜하다!' : '낫스페셜'}</b>
        안녕하세요 {name}
      </div>
    );
  }
}

// function Hello({ name, color, isSpecial }) {
//   return (
//     <div
//       style={{
//         color,
//       }}
//     >
//       <b>{isSpecial ? '스페셜하다!' : '낫스페셜'}</b>
//       안녕하세요 {name}
//     </div>
//   );
// }

// Hello.defaultProps = {
//   name: '이름없음',
// };

export default Hello;
