import React from 'react';
import './Questions.css';

const Questions = props => {
  let questions = Object.keys(props.slices).map((questionKey, i) => (
    <li key={questionKey}>
      <p>{props.slices[questionKey].question}</p>
      <div className='Answer'>
        <input
          onChange={props.selectScore(questionKey)}
          className='rangeInput'
          max='10'
          min='1'
          type='range'
          value={
            props.slices[questionKey].transform === '1'
              ? '10'
              : props.slices[questionKey].transform.replace('0.', '')
          }
          style={{ background: props.slices[questionKey].fill }}
        />
        <span
          className='Score'
          style={{ backgrondColor: props.slices[questionKey].fill }}
        >
          <div
            className='leftArrow'
            style={{
              borderRight: '5px solid ' + props.slices[questionKey].fill,
            }}
          ></div>
          {props.slices[questionKey].transform === '1'
            ? '10'
            : props.slices[questionKey].transform.replace('0.', '')}
        </span>
      </div>
    </li>
  ));
  return <>{questions}</>;
};
export default Questions;
