import { format, parse } from 'date-fns';
import { ko } from 'date-fns/locale';

/**
 * 시간 문자열 포맷(오전/오후 h:mm)으로 변환
 */
export const formatTimeString = (date: Date | string): string => {
  return format(new Date(date), 'a h:mm', { locale: ko });
};

/**
 * 시간 문자열을 Date 객체로 파싱
 */
export const parseTimeString = (timeString: string): Date => {
  return parse(timeString, 'a h:mm', new Date(), { locale: ko });
};

/**
 * 두 시간 문자열을 비교하여 정렬 값 반환
 */
export const compareTimeStrings = (a: string, b: string): number => {
  const timeA = parseTimeString(a);
  const timeB = parseTimeString(b);

  return timeA.getTime() - timeB.getTime();
};
