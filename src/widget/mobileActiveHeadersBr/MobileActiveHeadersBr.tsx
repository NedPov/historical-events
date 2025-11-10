import { useChangeDates } from "@/processes/context-dates/useChangeDates";
import style from './MobileActiveHeadersBr.module.scss'

export function MobileActiveHeadersBr() {
    const { currentYears } = useChangeDates();
    return <div className={style.wrapper} >
        <h2>{currentYears.headers}</h2>
        <div className={style.br} />
    </ div>
}
