import style from '../style/MedianLines.module.scss'


interface Props {
    axis: 'y' | 'x'
}


export function MedianLines({ axis }: Props) {

    return <div className={`${style.line} ${axis === 'y' ? style.y : style.x} `}></div>
}
