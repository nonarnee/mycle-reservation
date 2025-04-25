export const formatPhoneNumber = (value: string): string => {
  const digits = value.replace(/\D/g, '');

  if (digits.startsWith('02') && digits.length === 10) {
    // 서울 지역번호 02-xxxx-xxxx
    return digits.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
  } else if (digits.length === 11) {
    // 일반 핸드폰 번호
    return digits.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  } else if (digits.length === 10) {
    // 3-3-4 번호 ex: 0311234567
    return digits.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  }

  return value;
};
