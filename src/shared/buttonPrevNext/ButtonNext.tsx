
import { NextSvg } from "@/assets/NextSvg";
import style from '../style/ButtonPrevNext.module.scss';
import { useChangeDates } from "@/processes/context-dates/useChangeDates";
import { useGetCurrentPage } from "@/hooks/useGetCurrentPage";
import { rotateCircle } from "@/features/rotateCircle";



interface Props {
    length: number
}

export function ButtonNext({ length }: Props) {

    const { changeDatesButtonArrow } = useChangeDates();


    const { numPage } = useGetCurrentPage();
    const isDisabled = length === numPage

    function onClick(type: 'prev' | 'next') {
        rotateCircle(length, numPage);
        changeDatesButtonArrow(type)
    }
    return (
        <button
            className={`${style.buttonPrevNext} ${isDisabled ? style.disabled : ''}`}
            onClick={() => onClick('next')}
            disabled={isDisabled}
        >
            <NextSvg />
        </button>
    )
}
