import { MaritalStatus } from '../types';

export const serializeMaritalStatus = (maritalStatus: MaritalStatus) => {
  if (maritalStatus === MaritalStatus.MARRIED) {
    return 'Sudah menikah';
  } else if (maritalStatus === MaritalStatus.SINGLE) {
    return 'Belum menikah';
  }

  return '';
};

export const extractProvinceFromOcrResult = (province: string) => {
  if (province.includes('PROVINSI')) {
    return province.replace('PROVINSI ', '');
  }

  return province;
};

export const extractCityFromOcrResult = (city: string) => {
  if (city.includes('KOTA')) {
    return city.replace('KOTA ', '');
  }
  if (city.includes('KABUPATEN')) {
    return city.replace('KABUPATEN ', '');
  }

  return city;
};

export const extractAddressFromOcrResult = (address: string, rtRw: string) => {
  const result = [address];
  const splitRtRw = rtRw.split('/');

  if (splitRtRw.length === 2) {
    result.push(`RT ${splitRtRw[0]}`, `RW ${splitRtRw[1]}`);
  }

  return result.join(' ');
};
