import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";

// 'use'라는 접두사가 붙게 되면 이제 이 함수는 custom hook이 된다는 의미
// custom hook이 된 함수 안에서는 useContext, useEffect와 같은 React의 hooks 또한 자유롭게 호출이 가능하다.
const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();
    const nav = useNavigate();

    useEffect(() => {
        const currentDiaryItem = data.find((item) => String(item.id) === String(id));

        if(!currentDiaryItem) {
            window.alert("존재하지 않는 일기입니다.");
            nav("/", { replace: true });
        }

        setCurDiaryItem(currentDiaryItem);
    }, [id]);

    return curDiaryItem;
};

export default useDiary;