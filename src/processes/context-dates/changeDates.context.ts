import type { ITimeInterval } from '@/types/timeInterval.types';
import { createContext } from 'react';

export type TBtnChangeType = 'prev' | 'next';

export interface IDatesContext {
  TimeIntervalsDuplicate: ITimeInterval[];
  currentYears: ITimeInterval;
  changeDatesButtonArrow: (type: 'prev' | 'next') => void;
  changeDatesButtonCircle: (ind: number) => void;
}

// Создаем контекст
export const DatesContext = createContext<IDatesContext>({} as IDatesContext);
