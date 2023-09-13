import * as Yup from 'yup';

export const checkIsPhoneNumber = (value: string) => {
  const phoneSchema = Yup.string().matches(
    /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/,
  );
  const isPhoneNumber = phoneSchema.isValid(value);

  return isPhoneNumber;
};

export const parseToPhoneNumber = (value: string) => {
  let phoneNumber = value[0] === '+' ? value.slice(1) : value;

  let newPhoneNumber = phoneNumber;
  if (phoneNumber.startsWith('08')) {
    newPhoneNumber = `62${newPhoneNumber.substring(1)}`;
  }

  newPhoneNumber = newPhoneNumber.replaceAll(' ', '');

  return newPhoneNumber;
};

export const toRupiah = (amount = 0) => {
  return 'Rp ' + amount.toLocaleString('id-ID');
};

export const toPercentage = (numerator: number, denominator: number, fractionDigits = 2) => {
  return ((numerator / denominator) * 100).toFixed(fractionDigits);
};

export const serializeGender = (gender: string) => {
  const maleValues = ['male', 'm', 'laki-laki', 'l', 'laki', 'pria'];
  const femaleValues = ['female', 'f', 'perempuan', 'wanita', 'w'];

  if (maleValues.includes(gender.toLowerCase())) {
    return 'Laki-laki';
  } else if (femaleValues.includes(gender.toLowerCase())) {
    return 'Perempuan';
  }

  return '';
};

export const limitSentence = (str: string, maxLength: number) => {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 3) + '..';
  } else {
    return str;
  }
};

export const serializeNPWP = (npwpNo: string) => {
  npwpNo = npwpNo.replace(/\D/g, ''); // remove all non-numeric characters
  let length = npwpNo.length;

  if (length > 15) {
    npwpNo = npwpNo.slice(0, 15); // truncate to first 15 digits
    length = 15;
  }

  if (length >= 13) {
    return `${npwpNo.slice(0, 2)}.${npwpNo.slice(2, 5)}.${npwpNo.slice(5, 8)}.${npwpNo.slice(
      8,
      9,
    )}-${npwpNo.slice(9, 12)}.${npwpNo.slice(12)}`;
  }
  if (length >= 10) {
    return `${npwpNo.slice(0, 2)}.${npwpNo.slice(2, 5)}.${npwpNo.slice(5, 8)}.${npwpNo.slice(
      8,
      9,
    )}-${npwpNo.slice(9)}`;
  }
  if (length >= 9) {
    return `${npwpNo.slice(0, 2)}.${npwpNo.slice(2, 5)}.${npwpNo.slice(5, 8)}.${npwpNo.slice(8)}`;
  }
  if (length >= 6) {
    return `${npwpNo.slice(0, 2)}.${npwpNo.slice(2, 5)}.${npwpNo.slice(5)}`;
  }
  if (length >= 3) {
    return `${npwpNo.slice(0, 2)}.${npwpNo.slice(2)}`;
  }
  return npwpNo;
};

export const extractNumbersFromString = (value: string) => {
  return value.replace(/\D/g, '');
};

export const capitalizeWords = (str: string) => {
  const words = str.split(' ');

  const capitalizedWords = words.map((word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(' ');
};
