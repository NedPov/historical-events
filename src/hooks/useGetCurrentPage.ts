import { useChangeDates } from '@/processes/context-dates/useChangeDates';

// Хук для использования контекста
export function useGetCurrentPage() {
  // получаем данные из контекста
  const { TimeIntervalsDuplicate, currentYears } = useChangeDates();

  // Активная страница s
  const activePage = TimeIntervalsDuplicate.findIndex((el) => el.id === currentYears.id);

  // номер страницы
  const numPage = TimeIntervalsDuplicate[activePage].id;

  // длинна массива
  const length = TimeIntervalsDuplicate.length;

  return { activePage, length, numPage };
}
