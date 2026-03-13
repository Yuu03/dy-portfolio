import "./App.css";
import { useTranslation } from "react-i18next";
import { LangToggle } from "@/components/LanguageToggle/LangToggle.tsx";
import { SkillTag } from "@/components/SkillTag";
import { cn } from "@/lib/utils";

export default function App() {
	const { t } = useTranslation();
	const nav = t("nav", { returnObjects: true }) as Record<string, string>;
	const header = t("header", { returnObjects: true }) as Record<string, string>;
	const secs = t("sections", { returnObjects: true }) as Record<string, string>;
	const about = t("about", { returnObjects: true }) as { text: string };
	const certs = t("certs", { returnObjects: true }) as string[];
	const roles = t("roles", { returnObjects: true }) as {
		label: string;
		years: string;
		main: boolean;
	}[];
	const legend = t("skillLegend", { returnObjects: true }) as Record<
		string,
		string
	>;
	const cats = t("skillCategories", { returnObjects: true }) as {
		id: string;
		label: string;
		items: { name: string; years: number }[];
	}[];
	const career = t("career", { returnObjects: true }) as {
		headers: Record<string, string>;
		contractLabels: Record<string, string>;
		statusLabels: Record<string, string>;
		items: {
			period: string;
			project: string;
			tech: string;
			role: string;
			size: string;
			contract: string;
			status: string;
			tasks: string;
		}[];
	};

	return (
		<div className="min-h-screen bg-bg text-text font-sans selection:bg-accent/30 selection:text-accent">
			{/* Grid background */}
			<div
				className="pointer-events-none fixed inset-0 z-0"
				style={{
					backgroundImage:
						"linear-gradient(rgba(0,229,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,.03) 1px,transparent 1px)",
					backgroundSize: "60px 60px",
				}}
			/>

			{/* Glow blobs */}
			<div className="pointer-events-none fixed -top-50 -left-50 w-150 h-150 rounded-full bg-violet/15 blur-[120px] z-0" />
			<div className="pointer-events-none fixed -bottom-50 -right-50 w-150 h-150 rounded-full bg-accent/8 blur-[120px] z-0" />

			{/* NAV */}
			<nav className="sticky top-0 z-50 border-b border-white/5 bg-bg/80 backdrop-blur-md no-print">
				<div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
					<span className="font-display text-accent tracking-widest text-lg">
						D.Y
					</span>
					<div className="flex items-center gap-6">
						{Object.entries(nav).map(([k, v]) => (
							<a
								key={k}
								href={`#${k}`}
								className="font-mono text-xs text-muted hover:text-accent transition-colors hidden sm:block"
							>
								{v}
							</a>
						))}
						<LangToggle />
					</div>
				</div>
			</nav>

			<div className="relative z-10 max-w-5xl mx-auto px-6">
				{/* HEADER */}
				<header className="py-20 border-b border-white/5 animate-fade-in">
					<p className="font-mono text-xs text-muted tracking-widest uppercase mb-4">
						{header.updated}: 2026.02.26
					</p>
					<h1 className="font-display text-[clamp(4rem,15vw,9rem)] leading-none bg-linear-to-br from-white via-white to-accent/50 bg-clip-text text-transparent tracking-tight">
						D.Y
					</h1>
					<p className="font-mono text-accent text-sm tracking-widest uppercase mt-3">
						{header.role}
					</p>
					<div className="flex flex-wrap gap-6 mt-6 font-mono text-xs text-muted">
						<span>📍 {header.location}</span>
						<span>
							⚡ {header.experience}: {header.years}
						</span>
					</div>
				</header>

				{/* ABOUT */}
				<Section
					id="about"
					num="01"
					title={secs.about}
					className="animate-fade-in [animation-delay:200ms]"
				>
					<p className="text-[#b0b0c4] text-base leading-relaxed whitespace-pre-line max-w-3xl">
						{about.text}
					</p>
				</Section>

				{/* CERTS */}
				<Section
					id="certs"
					num="02"
					title={secs.certs}
					className="animate-fade-in [animation-delay:300ms]"
				>
					<div className="flex flex-wrap gap-2">
						{certs.map((c) => (
							<span
								key={c}
								className="font-mono text-xs border border-violet/40 text-violet-300 bg-violet/8 px-3 py-1.5 rounded-sm"
							>
								{c}
							</span>
						))}
					</div>
				</Section>

				{/* ROLES */}
				<Section
					id="roles"
					num="03"
					title={secs.roles}
					className="animate-fade-in [animation-delay:400ms]"
				>
					<div className="flex flex-wrap gap-2">
						{roles.map((r) => (
							<span
								key={r.label}
								className={cn(
									"font-mono text-xs px-3 py-1.5 rounded-sm border",
									r.main
										? "border-accent/40 bg-accent/10 text-accent"
										: "border-white/10 bg-surface text-muted line-through opacity-50",
								)}
							>
								{r.label}
								{r.years ? ` · ${r.years}` : ""}
							</span>
						))}
					</div>
				</Section>

				{/* SKILLS */}
				<Section
					id="skills"
					num="04"
					title={secs.skills}
					className="animate-fade-in [animation-delay:500ms]"
				>
					{/* Legend */}
					<div className="flex flex-wrap gap-4 mb-5 font-mono text-xs text-muted">
						{[
							{ cls: "bg-accent", label: legend.long },
							{ cls: "bg-violet/70", label: legend.mid },
							{ cls: "bg-white/15", label: legend.short },
						].map((l) => (
							<span key={l.label} className="flex items-center gap-2">
								<span className={cn("w-6 h-2.5 rounded-sm", l.cls)} />
								{l.label}
							</span>
						))}
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{cats.map((cat) => (
							<div
								key={cat.id}
								className="bg-surface border border-white/6 rounded p-4 hover:border-accent/20 transition-colors"
							>
								<p className="font-mono text-[0.65rem] uppercase tracking-widest text-accent border-b border-white/6 pb-2 mb-3">
									{cat.label}
								</p>
								<div className="flex flex-wrap gap-1.5">
									{cat.items.map((item) => (
										<SkillTag
											key={item.name}
											name={item.name}
											years={item.years}
										/>
									))}
								</div>
							</div>
						))}
					</div>
				</Section>

				{/* CAREER */}
				<Section
					id="career"
					num="05"
					title={secs.career}
					className="animate-fade-in [animation-delay:600ms]"
				>
					<div className="relative pl-6">
						{/* timeline line */}
						<div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-violet via-accent to-transparent" />
						{career.items.map((item, i) => {
							const isActive = item.status === "active";
							const isFL = item.contract === "freelance";
							return (
								<div
									key={i}
									className="relative pb-8 pl-6 animate-fadeUp"
									style={{ animationDelay: `${i * 0.03}s` }}
								>
									{/* dot */}
									<span
										className={cn(
											"absolute -left-1 top-1.5 w-2 h-2 rounded-full",
											isActive
												? "bg-emerald-400 animate-pulse shadow-[0_0_10px_#10b981]"
												: isFL
													? "bg-amber shadow-[0_0_6px_#f59e0b]"
													: "bg-accent shadow-[0_0_6px_#00e5ff]",
										)}
									/>
									<p className="font-mono text-[0.68rem] text-muted tracking-wide mb-0.5">
										{item.period}
									</p>
									<h3
										className={cn(
											"text-sm font-bold mb-2",
											isActive ? "text-emerald-400" : "text-text",
										)}
									>
										{item.project}
									</h3>
									<div className="flex flex-wrap gap-1.5 mb-1.5">
										<Tag color="cyan">{item.tech}</Tag>
										<Tag color="violet">{item.role}</Tag>
										<Tag color={isFL ? "amber" : "default"}>
											{career.contractLabels[
												item.contract as keyof typeof career.contractLabels
											] ?? item.contract}
										</Tag>
										<Tag color="default">{item.size}</Tag>
										{isActive && (
											<Tag color="green">{career.statusLabels.active}</Tag>
										)}
									</div>
									<p className="text-xs text-[#7070a0]">{item.tasks}</p>
								</div>
							);
						})}
					</div>
				</Section>

				{/* FOOTER */}
				<footer className="py-10 text-center border-t border-white/5">
					<p className="font-display text-2xl tracking-widest text-muted">
						D.Y
					</p>
					<p className="font-mono text-xs text-muted/50 mt-1">
						Updated 2026.02.26 · Hiroshima, Japan
					</p>
				</footer>
			</div>
		</div>
	);
}

function Section({
	id,
	num,
	title,
	children,
	className,
}: {
	id: string;
	num: string;
	title: string;
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<section id={id} className={cn("py-16 border-b border-white/5", className)}>
			<div className="flex items-center gap-4 mb-8 group">
				<span className="font-display text-6xl text-white/5 leading-none select-none transition-colors group-hover:text-accent/10">
					{num}
				</span>
				<span className="font-display text-3xl tracking-[0.2em] text-accent">
					{title}
				</span>
			</div>
			{children}
		</section>
	);
}

const tagColors = {
	cyan: "border-accent/20 text-accent bg-accent/5",
	violet: "border-violet/30 text-violet-300 bg-violet/5",
	amber: "border-amber/20 text-amber bg-amber/5",
	green: "border-emerald-400/30 text-emerald-400 bg-emerald-400/5",
	default: "border-white/8 text-muted bg-surface2",
};

function Tag({
	color = "default",
	children,
}: {
	color?: keyof typeof tagColors;
	children: React.ReactNode;
}) {
	return (
		<span
			className={cn(
				"font-mono text-[0.65rem] px-2 py-0.5 rounded-sm border",
				tagColors[color],
			)}
		>
			{children}
		</span>
	);
}