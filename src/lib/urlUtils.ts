export function encodeUrl(params: URLSearchParams): string {
  const stamp = params.get('stamp') || '';
  const bgColor = params.get('bgColor') || '';
  const textColor = params.get('textColor') || '';
  const format = params.get('format') || '';

  // Codifica cada parâmetro separadamente
  const encodedStamp = encodeURIComponent(stamp);
  const encodedBgColor = encodeURIComponent(bgColor);
  const encodedTextColor = encodeURIComponent(textColor);
  const encodedFormat = encodeURIComponent(format);

  // Cria uma string compacta
  return `${encodedStamp}-${encodedBgColor}-${encodedTextColor}-${encodedFormat}`;
}

export function decodeUrl(encoded: string): string {
  try {
    const [stamp, bgColor, textColor, format] = encoded.split('-');
    const params = new URLSearchParams();
    
    if (stamp) params.append('stamp', decodeURIComponent(stamp));
    if (bgColor) params.append('bgColor', decodeURIComponent(bgColor));
    if (textColor) params.append('textColor', decodeURIComponent(textColor));
    if (format) params.append('format', decodeURIComponent(format));

    return params.toString();
  } catch {
    return '';
  }
} 