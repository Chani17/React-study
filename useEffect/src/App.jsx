import { useEffect, useRef, useState } from "react";
import './App.css';
import Controller from './components/Controller';
import Even from "./components/Even";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);  // App Component가 Mount 되었는지의 여부

  // 1. mount: 탄생
  // deps에 빈 배열을 넣어주면 mount할 때 딱 한 번만 출력하게 됨
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. update: 변화, reRendering
  // deps를 생략하면 mount + reRendering될 때 마다 출력하게 됨
  // 만약, mount를 제외하고 reRendering할 때만 출력하게 하고 싶다면 ref 객체를 추가
  useEffect(() => {
    if(!isMount.current) {
      isMount.current = true;
      return;
    }
    
    console.log("update");
  });

  // 3. unmount: 죽음




  // useEffect(() => {
  //   console.log(`count: ${count} / input: ${input}`);
  // }, [count, input]);
  // // 의존성 배열 [count]
  // // dependency array
  // // deps

  const onClickButton = (value) => {
    setCount(count + value);    // 비동기로 동작
  };

  return (
    <div className="App">
    <h1>Simple Counter</h1>
    <section>
      <input value={input} onChange={(e) => {
        setInput(e.target.value)
      }} />
    </section>
    <section>
      <Viewer count={count}/>
      {count % 2 === 0 ? <Even /> : null}
    </section>
    <section>
      <Controller onClickButton={onClickButton}/>
    </section>
    </div>
  );
}

export default App;
