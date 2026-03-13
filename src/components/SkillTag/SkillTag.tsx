import { cn } from "@/lib/utils";

type Tier = "long" | "mid" | "short";

function getTier(years: number): Tier {
	if (years >= 5) return "long";
	if (years >= 2) return "mid";
	return "short";
}

const tierStyles: Record<Tier, { wrap: string; name: string; badge: string }> =
	{
		long: {
			wrap: "border-accent/40",
			name: "bg-accent/10 text-accent",
			badge: "bg-accent text-black font-bold",
		},
		mid: {
			wrap: "border-violet/40",
			name: "bg-violet/10 text-violet-300",
			badge: "bg-violet/80 text-white font-bold",
		},
		short: {
			wrap: "border-white/10",
			name: "bg-surface2 text-muted",
			badge: "bg-white/5 text-muted",
		},
	};

interface SkillTagProps {
	name: string;
	years: number;
	yearsLabel?: string;
}

export function SkillTag({ name, years, yearsLabel }: SkillTagProps) {
	const tier = getTier(years);
	const s = tierStyles[tier];
	const label = yearsLabel ?? `${years}yr`;

	return (
		<span
			className={cn(
				"inline-flex items-center rounded-sm border overflow-hidden font-mono text-xs",
				s.wrap,
			)}
		>
			<span className={cn("px-2 py-1", s.name)}>{name}</span>
			<span className={cn("px-2 py-1 text-[0.65rem]", s.badge)}>{label}</span>
		</span>
	);
}
