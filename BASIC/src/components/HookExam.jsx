/**
 * 3가지 Hook 관련된 TIP
 * 1. 함수 component, custom hook 내부에서만 호출 가능
 * 2. 조건문, 반복문으로 호출될 수는 없음
 * 3. 나만의 hook(Custom Hook) 직접 만들 수 있음
 */

import useInput from "./../hooks/useInput";

const HookExam = () => {
    const [input, onChange] = useInput();

    return <div>
        <input value={input} onChange={onChange}></input>
    </div>;
};

export default HookExam;