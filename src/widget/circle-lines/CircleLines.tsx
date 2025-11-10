import { MedianLines } from "@/shared/median-lines/MedianLines";

import style from './CircleLines.module.scss';
import { Circle } from "@/shared/circle-dot/Circle";

export function CircleLines() {
    return (
        <div className={style.layout}>
            <div className={style.parent}>
                <MedianLines axis="y" />
                <MedianLines axis="x" />
            </div>


            <div >
                <Circle />
            </div>

        </div>
    )
}
