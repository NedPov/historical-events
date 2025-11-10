import { DatesFirstSecond } from "@/widget/dates-first-second/DatesFirstSecond";
import { PaginationBlock } from "@/widget/pagination-block/PaginationBlock";
import { TitleSubtitleBlock } from "@/widget/title-subtitle-block/TitleSubtitleBlock";

import style from './Pages.module.scss';
import { CircleLines } from "@/widget/circle-lines/CircleLines";
import { MobileActiveHeadersBr } from "@/widget/mobileActiveHeadersBr/MobileActiveHeadersBr";




export function Pages() {

    return (
        <div className={style.pages}>
            <div className={style.h1Block}>
                <div className={style.bar}></div>
                <h1>Исторические даты</h1>
            </div>
            <DatesFirstSecond />
            <MobileActiveHeadersBr />
            <CircleLines />

            <div className={style.titlePaginationBlock}>
                <TitleSubtitleBlock />
                <PaginationBlock />
            </div>

        </div>
    )
}
