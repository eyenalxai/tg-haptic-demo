"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useHapticFeedback, useMiniApp, useViewport } from "@telegram-apps/sdk-react"
import { useEffect } from "react"

export default function Home() {
	const hapticFeedback = useHapticFeedback(true)
	const viewPort = useViewport(true)
	const miniApp = useMiniApp(true)

	useEffect(() => {
		if (miniApp) {
			miniApp.ready()
		}
	}, [miniApp])

	useEffect(() => {
		if (viewPort) {
			viewPort.expand()
		}
	}, [viewPort])

	return (
		<main className={cn("container", "mx-auto", "px-4", "flex", "flex-col", "justify-center", "mt-12", "space-y-8")}>
			<div className={cn("flex", "flex-col", "gap-2")}>
				<span className={cn("font-semibold", "text-primary", "text-xl", "col-span-2")}>Selection</span>
				<Button variant={"outline"} onClick={() => hapticFeedback?.selectionChanged()}>
					Selection Changed
				</Button>
			</div>
			<div className={cn("grid", "grid-cols-2", "gap-2")}>
				<span className={cn("font-semibold", "text-primary", "text-xl", "col-span-2")}>Impact</span>
				<Button variant={"outline"} onClick={() => hapticFeedback?.impactOccurred("light")}>
					Light
				</Button>
				<Button variant={"outline"} onClick={() => hapticFeedback?.impactOccurred("medium")}>
					Medium
				</Button>
				<Button variant={"outline"} onClick={() => hapticFeedback?.impactOccurred("heavy")}>
					Heavy
				</Button>
				<Button variant={"outline"} onClick={() => hapticFeedback?.impactOccurred("rigid")}>
					Rigid
				</Button>
				<Button className={cn("col-span-2")} variant={"outline"} onClick={() => hapticFeedback?.impactOccurred("soft")}>
					Soft
				</Button>
			</div>
			<div className={cn("grid", "grid-cols-2", "gap-2")}>
				<span className={cn("font-semibold", "text-primary", "text-xl", "col-span-2")}>Notification</span>
				<Button variant={"outline"} onClick={() => hapticFeedback?.notificationOccurred("error")}>
					Error
				</Button>
				<Button variant={"outline"} onClick={() => hapticFeedback?.notificationOccurred("success")}>
					Success
				</Button>
				<Button
					className={cn("col-span-2")}
					variant={"outline"}
					onClick={() => hapticFeedback?.notificationOccurred("warning")}
				>
					Warning
				</Button>
			</div>
		</main>
	)
}
