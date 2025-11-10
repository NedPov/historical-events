import { BackSvg } from "@/assets/BackSvg";
import style from '../style/ButtonPrevNext.module.scss';
import { useChangeDates } from "@/processes/context-dates/useChangeDates";
import { useGetCurrentPage } from "@/hooks/useGetCurrentPage";
import { rotateCircle } from "@/features/rotateCircle";


export function ButtonPrev() {

    const { changeDatesButtonArrow } = useChangeDates();

    const { numPage, length } = useGetCurrentPage();
    const isDisabled = numPage === 1

    function onClick(type: 'prev' | 'next') {
        rotateCircle(length, numPage - 2);
        changeDatesButtonArrow(type)
    }

    return (
        <button
            className={`${style.buttonPrevNext} ${isDisabled ? style.disabled : ''}`}
            onClick={() => onClick('prev')}
            disabled={isDisabled}
        >
            <BackSvg />
        </button >
    )
}
