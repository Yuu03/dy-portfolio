import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export function LangToggle() {
	const { i18n } = useTranslation();
	const current = i18n.language.startsWith("ja") ? "ja" : "en";

	const toggle = () => i18n.changeLanguage(current === "ja" ? "en" : "ja");

	return (
		<button
      type='button'
			onClick={toggle}
			className={cn(
				"font-mono text-xs border border-white/10 rounded-sm px-3 py-1",
				"text-muted hover:text-accent hover:border-accent/40 transition-colors",
			)}
		>
			{current === "ja" ? "EN" : "JA"}
		</button>
	);
}
