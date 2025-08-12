# useReducer
component 내부에 새로운 State를 생성하는 React Hook
모든 useState는 useReducer로 대체 가능
> useState와의 차이점
> 상태 관리 코드를 component 외부로 분리할 수 있음!

아래의 코드처럼 useState는 useState를 선언한 component 내부에서 상태 관리 코드(onCreate)를 작성해야하는 것이다.
```
function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };
}
```

<br>
하지만, useReducer를 사용하면?
component 외부에 상태 관리 코드를 분리할 수 있다.
```
function reducer() {
  // ...
}

function App() {
  const [todos, dispatch] = useReducer(reducer);

  // ...
}
```