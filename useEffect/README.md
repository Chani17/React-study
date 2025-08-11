## Life Cycle

### React Component의 Life Cycle
Mount → Update → UnMount

<br>

#### Mount
(like 탄생)
- Component가 탄생하는 순간
- 화면에 처음 렌더링되는 순간
- `A` Component가 `Mount` 되었다? ▶️ A Component가 화면에 처음으로 렌더링 되었다는 의미
- ex) 서버에서 데이터를 불러오는 작업

<br>

#### Update
(like 변화)
- Component가 다시 렌더링되는 순간
- Rerendering 될 때를 의미
- `A` Component가 `Update` 되었다? ▶️ A Component가 Rerendering 되었다는 의미
- ex) 어떤 값이 변경되었는지 콘솔에 출력

<br>

#### UnMount
(like 죽음)
- Component가 화면에서 사라지는 순간
- 렌더링에서 제외되는 순간을 의미
- `A` Component가 `UnMount` 되었다? ▶️ A Component가 화면에서 사라졌다는 의미
- ex) component가 사용하던 메모리 정리

<br>

### Life Cycle 제어
Component Life Cycle의 단계별로 component들이 각각 다른 작업을 수행하도록 만드는 것을 의미 (useEffect)

<br>

### useEffect
React Component의 `side effect` 를 제어하는 새로운 React Hook
> **Side Effect란?**  
> "부수적인 효과", "파생되는 효과" 정도로 해석 가능  

즉, react component의 side effect는 component의 동작에 따라 파생되는 여러 효과를 의미

> **ex)** 콘솔에 "Mount"라고 출력, 콘솔에 "Update"라고 출력, 콘솔에 "UnMount"라고 출력, 콘솔에 변경된 값 출력 모두 component의 side effect로, 모두 `useEffect` 을 이용해 제어 가능함

<br>

### CleanUp Function (정리 함수)
useEffect의 callback 함수가 반환하는 함수를 "cleanup" 또는 "정리 함수"라고 한다.  
이 정리함수는 useEffect가 끝날 때 실행된다.  
주로 component가 사라질 때(UnMount)나 effect가 다시 실행되기 전에 이전 effect가 남긴 것을 정리하는데 쓰인다.
```
useEffect(() => {
        // cleanup function
        return () => {
            console.log("unMount");
        };
    }, []);

```
