import { useChangeDates } from '@/processes/context-dates/useChangeDates';
import style from './style/MobileCirclePagination.module.scss'

interface Props {
    ind: number,
    isActive: boolean
}

export function MobileCirclePagination({ ind, isActive }: Props) {

    const { changeDatesButtonCircle } = useChangeDates()


    function onClick(ind: number) {
        changeDatesButtonCircle(ind);
    }


    return <button className={`${style.mobileCirclePagination} ${isActive ? style.isActive : ''}`} onClick={() => onClick(ind)} />
}
