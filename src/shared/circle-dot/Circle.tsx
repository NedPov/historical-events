
import style from '../style/Circle.module.scss'
import { Dot } from './Dot';
import { useLayoutEffect, useState } from 'react';

import { useChangeDates } from '@/processes/context-dates/useChangeDates';



export function Circle() {

    // Размер круга
    const [size, setSize] = useState(0);
    const radius = size / 2

    // получение массива данных и текущей страницы
    const { TimeIntervalsDuplicate, currentYears } = useChangeDates()

    // Отрисовка
    useLayoutEffect(() => {
        const handleResize = () => {
            // логика для динамического изменения размера
            const newSize = window.innerWidth * 0.233;
            setSize(newSize);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // вызов при монтировании

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className={`${style.circle} ref_697a371`} style={{ width: size, height: size }}
        >
            {
                TimeIntervalsDuplicate.map((el, ind) => {
                    const angle = ((ind * 360) / TimeIntervalsDuplicate.length) - 60;

                    const rad = (angle * Math.PI) / 180;
                    const x = radius * Math.cos(rad);
                    const y = radius * Math.sin(rad);

                    const isActive = (ind + 1) === currentYears.id

                    return (
                        <Dot x={x} y={y} key={el.id} headers={el.headers} ind={ind + 1} isActive={isActive} id={el.id}
                            length={TimeIntervalsDuplicate.length}
                        />
                    )
                })
            }

        </div>
    )


}
