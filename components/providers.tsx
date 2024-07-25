"use client"

import { SDKProvider } from "@telegram-apps/sdk-react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

export function Providers({ children, ...props }: ThemeProviderProps) {
	return (
		<SDKProvider>
			<NextThemesProvider {...props}>{children}</NextThemesProvider>
		</SDKProvider>
	)
}
