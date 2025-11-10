import { ButtonNext } from "@/shared/buttonPrevNext/ButtonNext";
import { ButtonPrev } from "@/shared/buttonPrevNext/ButtonPrev";
import { PaginationNumber } from "@/shared/PaginationNumber";

import style from './PaginationBlock.module.scss'
import { useGetCurrentPage } from "@/hooks/useGetCurrentPage";
import { useChangeDates } from "@/processes/context-dates/useChangeDates";
import { MobileCirclePagination } from "@/shared/MobileCirclePagination";


export function PaginationBlock() {

    const { TimeIntervalsDuplicate } = useChangeDates()


    const { length, numPage } = useGetCurrentPage();

    return (
        <div className={style.mainBlock}>
            <PaginationNumber page={numPage} />

            <div className={style.buttonBlock}>
                <ButtonPrev />
                <ButtonNext length={length} />
            </div>

            <div className={style.PaginationCircleBlock}>
                {
                    TimeIntervalsDuplicate.map((_, ind) => {
                        const isActive = numPage === (ind + 1)
                        console.log(isActive, numPage, ind + 1)

                        return (
                            <MobileCirclePagination ind={ind + 1} isActive={isActive} />
                        )
                    })
                }
            </div>
        </div>
    )
}
