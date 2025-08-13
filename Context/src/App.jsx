import { createContext, useCallback, useMemo, useReducer, useRef } from "react";
import './App.css';
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';
// import Exam from './components/Exam';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) =>
        item.id === action.targetId
          ? {...item, isDone: !item.isDone}
          : item);
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  /**
   * useCallback()
   * 첫 번째 인수: 최적화하고 싶은 함수 (불필요하게 재생성되지 않도록 방지하고 싶은 함수)
   * 두 번째 인수: deps
   * deps를 빈 배열로 설정해두면 최초로 딱 한 번 rendering이 될 때(mount 될 때) func 함수를 딱 한 번 생성
   * 그 뒤에는 아무리 reRendering 되더라도 func 함수를 새롭게 생성하지 않음.
   * const func = useCallback(() => {}, [])
   */

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      {/* <Exam /> */}
      <Header />
      
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider
          value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>

      </TodoStateContext.Provider>
    </div>
  )
}

export default App;
