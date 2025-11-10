
import { useChangeDates } from '@/processes/context-dates/useChangeDates';
import style from '../style/Dot.module.scss';
import { rotateCircle } from '@/features/rotateCircle';

interface Props {
    x: number,
    y: number,
    headers: string,
    ind: number,
    isActive: boolean,
    id: number,
    length: number


}

export function Dot({ x, y, headers, ind, isActive, id, length }: Props) {

    const { changeDatesButtonCircle } = useChangeDates()


    function onClick(ind: number) {
        // f для поворота круга
        rotateCircle(length, ind - 1);
        changeDatesButtonCircle(ind);
    }


    return (
        <button className={`${style.dot} ${isActive ? style.isActive : ''} pag_a8964dbe `} style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
            onClick={() => onClick(ind)}
        >
            <div className={`${style.content} `}>
                {id}
                <div className={`${style.headers} pag_a8964dbe_header`}>
                    {headers}
                </div>
            </div>

        </button>
    )
}
