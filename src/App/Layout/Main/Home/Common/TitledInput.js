import React from 'react';
import './TitledInput.css'

function TitledInput(props){
  const {title, onChange, placeholder} = props;
  return (
    <div className={'input-container'}>
      <p className={'title-text'}> {title} </p>
      <input type="text" onChange={onChange} className={'title-input'} placeholder={placeholder}/>
    </div>
  )
}

export default TitledInput;
