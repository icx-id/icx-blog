export const base64ToBlob = (
  base64: string,
  fileType: string,
  mimeType: string,
  fileName: string,
) => {
  const base64Convert = base64.split(',');
  const bytesChar = window.atob(base64Convert[1]);
  const byteArrays = [];
  for (let i = 0; i < bytesChar.length; i++) {
    byteArrays.push(bytesChar.charCodeAt(i));
  }

  const blob = new Blob([new Uint8Array(byteArrays)], { type: fileType });
  const file = new File([blob], `${fileName}${mimeType}`, { type: fileType });

  return file;
};
