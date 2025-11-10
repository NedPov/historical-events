
import styles from './DatesFirstSecond.module.scss'
import { useChangeDates } from "@/processes/context-dates/useChangeDates";


import { gsap, Power2 } from "gsap"
import { useLayoutEffect, useRef, useState } from "react";


export function DatesFirstSecond() {
    const { currentYears } = useChangeDates();

    // стейты с изменениями годов
    const [prevFirstYear, setPrevFirstYear] = useState(currentYears.firstYear)
    const [prevSecondYear, setPrevSecondYear] = useState(currentYears.secondYear)

    // реф для импутов
    const ref1 = useRef<HTMLHeadingElement>(null)
    const ref2 = useRef<HTMLHeadingElement>(null)


    // f для смены годов
    const changeYear = (yearRef: HTMLSpanElement | undefined, nextYear: string | undefined, type?: string) => {
        if (yearRef && nextYear) {
            gsap.to(yearRef, {      //эл, на который будет действовать gsap
                textContent: nextYear,  //какое значение будет менять(у ref есть textContent), меняем на что-то
                duration: 1.5,
                ease: Power2.easeOut,
                snap: { textContent: 1 }, //округлени
                onComplete: () => {     //f по завершении
                    if (type === 'first') {
                        setPrevFirstYear(nextYear)
                    } else {
                        setPrevSecondYear(nextYear)
                    }
                },
            })

        }
    }

    // вызов функции для 1 и 2 года
    useLayoutEffect(() => {
        changeYear(ref1.current!, currentYears.firstYear, 'first')
        changeYear(ref2.current!, currentYears.secondYear)
    }, [currentYears])


    return (
        <div className={styles.datesFirstSecond}>
            <h2 ref={ref1} className={styles.firstYear}>
                {prevFirstYear}
            </h2>
            <h2 ref={ref2} className={styles.secondYear}>
                {prevSecondYear}
            </h2>

        </div>
    )
}
