import style from './style/PageNumber.module.scss';
import { useGetCurrentPage } from "../hooks/useGetCurrentPage";

interface Props {
    page: number
}

export function PaginationNumber({ page }: Props) {
    const { length } = useGetCurrentPage();

    return (
        <div className={style.pageNumber}>
            {`0${page}/0${length}`}
        </div>
    )
}
