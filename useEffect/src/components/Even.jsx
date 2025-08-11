import { useEffect } from "react";

const Even = () => {
    useEffect(() => {
        // useEffect의 callback 함수가 반환하는 함수를 "cleanup" 또는 "정리 함수"라고 함
        // 정리함수는 useEffect가 끝날 때 실행된다.
        // 주로 component가 사라질 때(unmount)나 effect가 다시 실행되기 전에 이전 effect가 남긴 것을 정리하는데 쓰임
        return () => {
            console.log("unMount");
        };
    }, []);

    return <div>짝수입니다</div>;
};

export default Even;