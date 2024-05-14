import { useEffect } from "react";

export default function useOnClickOutside(ref, handler){

    useEffect(() => {
        const listener = (event) => {
            if(!ref.current || ref.current.contains(event.target) ){ //아무것도 할당x, 모달 내부
                return;
            }
            handler();
        }
    document.addEventListener('mousedown', listener);

        return() => {
            document.removeEventListener('mousedown', listener);

        }
    }, [ref, handler]);
}