export default function Icon({ name, size = 24, className = '' }) {
  const paths = {
    home: <><path d="m3 10 9-7 9 7v12h-6v-8H9v8H3Z" /></>,
    bookmark: <path d="M6 3h12v19l-6-4-6 4Z" />,
    layers: <><path d="m2 8 10-5 10 5-10 5Z" /><path d="m2 13 10 5 10-5M2 18l10 5 10-5" /></>,
    profile: <><circle cx="12" cy="6" r="3" /><path d="M5 12c4 2 10 2 14 0v9c-4 2-10 2-14 0Z" /></>,
    people: <><circle cx="9" cy="7" r="3" /><path d="M2 20v-3c0-5 14-5 14 0v3ZM16 4c4 0 4 6 0 6m3 4c3 0 3 3 3 6" /></>,
    check: <><circle cx="12" cy="12" r="9" /><path d="m7 12 3 3 7-7" /></>,
    mountain: <><path d="m2 19 6-9 6 9Zm10-9 3-6 7 15h-8" /></>,
    music: <><path d="M10 17V5l11-3v13M10 8l11-3" /><ellipse cx="6" cy="18" rx="4" ry="3" fill="currentColor" /><ellipse cx="17" cy="16" rx="4" ry="3" fill="currentColor" /></>,
    right: <path d="m8 3 9 9-9 9" />,
    left: <path d="m16 3-9 9 9 9" />,
    down: <path d="m4 8 8 8 8-8" />,
    search: <><circle cx="10" cy="10" r="6" /><path d="m15 15 6 6" /></>,
    filters: <><path d="M6 3v7m0 4v7m6-18v2m0 4v12m6-18v12m0 4v2M3 12h6m0-5h6m0 10h6" /></>,
    heart: <path d="M12 21 3.5 12C-3 5 7-1 12 6c5-7 15-1 8.5 6Z" />,
    clover: <><circle cx="9" cy="9" r="4.5" /><circle cx="15" cy="9" r="4.5" /><circle cx="9" cy="15" r="4.5" /><circle cx="15" cy="15" r="4.5" /></>,
    book: <><path d="M4 5c3-2 6-2 8 0v14c-2-2-5-2-8 0Z" /><path d="M20 5c-3-2-6-2-8 0v14c2-2 5-2 8 0Z" /></>,
    clipboard: <><rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9 4a3 3 0 0 1 6 0" /><path d="m9 12 2 2 4-4" /></>,
    upload: <><path d="M8 15H3V3h18v12h-5M9 21h6m-3-9v9m-4-10 4-4 4 4" /></>,
    paperclip: <path d="M9 8v9a3 3 0 0 0 6 0V6a4 4 0 0 0-8 0v11a5 5 0 0 0 10 0V8M12 6v11" />,
    document: <><rect x="4" y="2" width="16" height="20" rx="1" /><path d="M8 2v5h8V2M8 12h8m-8 4h5" /></>,
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="1" /><path d="M7 2v6m10-6v6M3 11h18m-14 4h2m3 0h2m3 0h1M7 18h2m3 0h2" /></>,
    phone: <path d="M7 3H3c-1 10 8 19 18 18v-4l-5-2-2 3c-4-2-6-4-8-8l3-2Z" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="4" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></>,
    facebook: <path d="M14 22V12h3l1-4h-4V6c0-2 1-2 4-2V1h-3c-4 0-5 3-5 6v1H7v4h3v10" fill="currentColor" stroke="none" />,
    youtube: <><rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor" stroke="none" /><path d="m10 9 6 3-6 3Z" fill="var(--yellow)" stroke="none" /></>,
    whatsapp: <><path d="M21 11.5a9 9 0 0 1-13.4 7.8L2 21l1.7-5.4A9 9 0 1 1 21 11.5Z" /><path d="m8 6-2 2c1 5 4 8 9 9l2-2-3-2-1 1c-2-1-3-2-4-4l1-1Z" strokeWidth="1.3" /></>,
  };

  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
