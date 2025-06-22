'use client';

import { SimpleThemeProvider } from './SimpleThemeProvider';

export function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  return <SimpleThemeProvider>{children}</SimpleThemeProvider>;
} 