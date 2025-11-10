import { useContext } from 'react';
import { DatesContext } from './changeDates.context.ts';

// Хук для использования контекста
export function useChangeDates() {
  return useContext(DatesContext);
}
