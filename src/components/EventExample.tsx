import React, {useRef, useState} from 'react';

const EventExample = () => {
  const [value, setValue] = useState<string>('')
  const [isDrag, setIsDrag] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('неуправляемый: ',inputRef.current?.value);
    console.log('управляемый: ', value);
  }

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('DRAG');
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
    console.log('DROP')
  }

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  }

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(true)
  }

  return (
    <div>
      <input type="text" value={value} onChange={changeHandler} ref={inputRef} placeholder='управляемый'/>
      <input type="text" ref={inputRef} placeholder='неуправляемый'/>
      <button onClick={clickHandler}>click handler</button>
      <div style={{ width: '200px', height: '200px', background: 'red'}} draggable onDrag={dragHandler}/>
      <div
        onDrop={dropHandler}
        onDragLeave={dragLeaveHandler}
        onDragOver={dragOverHandler}
        style={{ width: '200px', height: '200px', background: isDrag ? 'red' : 'blue'}}
      />
    </div>
  );
};

export default EventExample;