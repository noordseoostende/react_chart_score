import React from 'react';

const Slices = props => {
  let slices = Object.keys(props.slices).map((sliceKey, i) => (
    <g key={sliceKey} transform={props.slices[sliceKey].rotate}>
      <g mask='url(#wedge-mask)'>
        <circle
          className='Slice'
          cx='220'
          cy='220'
          r='220'
          fill={props.slices[sliceKey].fill}
          style={{
            transform: 'scale(' + props.slices[sliceKey].transform + ')',
          }}
        ></circle>
      </g>
    </g>
  ));
  return <>{slices}</>;
};

export default Slices;
