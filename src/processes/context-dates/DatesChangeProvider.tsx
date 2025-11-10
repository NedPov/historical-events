
import { TimeIntervals } from "@/data/timeIntervals.data";
import { useState, type PropsWithChildren } from "react";
import { DatesContext } from "./changeDates.context";



// Провайдер контекста
export function DatesProvider({ children }: PropsWithChildren) {


    // копируем массив
    const TimeIntervalsDuplicate = [...TimeIntervals];

    // Получение активной страницы
    const [currentYears, setCurrentYears] = useState(TimeIntervalsDuplicate[0]);


    // смена страницы при нажатии на кнопку стрелочки
    const changeDatesButtonArrow = (type: 'prev' | 'next') => {

        if (type === 'next') {
            setCurrentYears(prev => {
                const newIndex = TimeIntervalsDuplicate.findIndex((el => el.id === prev.id))
                return TimeIntervalsDuplicate[newIndex + 1]
            })
        } else {
            setCurrentYears(prev => {
                const newIndex = TimeIntervalsDuplicate.findIndex((el => el.id === prev.id))
                return TimeIntervalsDuplicate[newIndex - 1]
            })
        }

    };

    // смена страницы при нажатии на кнопку в круге
    const changeDatesButtonCircle = (ind: number) => {
        setCurrentYears(TimeIntervalsDuplicate[ind - 1])
    }

    return (
        <DatesContext.Provider value={{ TimeIntervalsDuplicate, currentYears, changeDatesButtonArrow, changeDatesButtonCircle }}>
            {children}
        </DatesContext.Provider>
    );
};


