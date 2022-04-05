import React from 'react';

type CompType = {
  children: React.ReactChild[];
};

// box는 wrapper 개념, 스타일 속성을 전달한다.
// position= relative

function BoxComp({ children }: CompType) {
  return <div>{children}</div>;
}

BoxComp.defaultProps = {
  position: 'relative',
  width: '100%',
  height: '100%',
};

export default BoxComp;
