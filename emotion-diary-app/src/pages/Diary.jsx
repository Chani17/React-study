// useParams: 현재 브라우저에서 명시한 Url Parameter 값을 가져온 기능을 하는 custom hoook
import { useParams } from "react-router-dom";

const Diary = () => {
    const params = useParams();

    return <div>{params.id}번 일기입니다.</div>;
};

export default Diary;