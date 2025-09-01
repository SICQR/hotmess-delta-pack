export function getCookie(name: string): string | null {
  const match = (`; ${document.cookie}`).match(`;\s*${name}=([^;]+)`);
  return match ? decodeURIComponent(match[1]) : null;
}
export function setCookie(name: string, value: string, days = 365) {
  const d = new Date();
  d.setTime(d.getTime() + days*24*60*60*1000);
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${d.toUTCString()}; path=/; SameSite=Lax`;
}
