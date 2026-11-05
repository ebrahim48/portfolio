import { profile } from "@/src/data/portfolio";

export default function Avatar({ size = 96, className = "", rounded = "rounded-full" }: { size?: number; className?: string; rounded?: string }) {
    const style = { width: size, height: size };
    if (profile.avatar) {
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={profile.avatar} alt={profile.name} style={style} className={`${rounded} object-cover ${className}`} />;
    }
    return (
        <div
            style={{ ...style, fontSize: size * 0.42 }}
            className={`${rounded} grid place-items-center font-display font-bold text-on-primary bg-gradient-to-br from-primary to-emerald-600 select-none ${className}`}
            aria-label={profile.name}
        >
            {profile.initials}
        </div>
    );
}
