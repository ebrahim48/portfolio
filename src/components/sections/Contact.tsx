"use client";
import { useState } from "react";
import { FaPaperPlane, FaCopy, FaEnvelope, FaPhone, FaLocationDot, FaCircleCheck, FaTriangleExclamation, FaSpinner, FaRotateRight } from "react-icons/fa6";
import { profile, socials } from "@/src/data/portfolio";
import { useApp } from "../app/context";
import Avatar from "../ui/Avatar";
import Block from "../ui/Block";

/**
 * Sending:
 *  - If NEXT_PUBLIC_WEB3FORMS_KEY is set (free key from https://web3forms.com),
 *    messages are delivered straight to your inbox.
 *  - Otherwise the visitor's email client opens with the message pre-filled.
 */
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const MIN_WORDS = 3;

type Status = { kind: "idle" | "sending" | "error" | "sent"; message?: string };
const empty = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
    const { notify } = useApp();
    const [form, setForm] = useState(empty);
    const [status, setStatus] = useState<Status>({ kind: "idle" });

    const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const validate = (): string | null => {
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return "Please fill in all required fields.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) return "The e-mail you entered doesn't look valid. Please check it.";
        if (form.message.trim().split(/\s+/).length < MIN_WORDS) return `Your message must contain at least ${MIN_WORDS} words.`;
        if (/(https?:\/\/.*){3,}/i.test(form.message)) return "Hmm, this looks like it might be spam. Please double-check your message.";
        return null;
    };

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        const err = validate();
        if (err) { setStatus({ kind: "error", message: err }); return; }
        setStatus({ kind: "sending" });

        if (!WEB3FORMS_KEY) {
            const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
            const subject = encodeURIComponent(form.subject || `Portfolio contact from ${form.name}`);
            window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
            setStatus({ kind: "sent" });
            return;
        }

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...form, subject: form.subject || `Portfolio contact from ${form.name}` }),
            });
            const data = await res.json();
            if (!data.success) throw new Error(data.message);
            setStatus({ kind: "sent" });
        } catch {
            setStatus({ kind: "error", message: "There was an error sending your message. Please try again later." });
        }
    };

    const copy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            notify("Copied!", `${text} copied to clipboard.`, "success");
        } catch {
            notify("Copy failed", "Please copy it manually.", "error");
        }
    };

    return (
        <>
            <Block title="Send me a {{message}}" icon={FaPaperPlane}>
                {status.kind === "sent" ? (
                    <div className="board p-6 sm:p-8 max-w-2xl mx-auto text-center animate-modal">
                        <div className="relative mx-auto w-fit">
                            <Avatar size={72} />
                            <FaCircleCheck className="absolute -bottom-1 -right-1 text-2xl text-primary bg-card rounded-full" />
                        </div>
                        <h4 className="text-2xl font-bold mt-4">Thank you, <span className="text-primary">{form.name.split(" ")[0]}</span>!</h4>
                        <p className="text-muted mt-3 leading-relaxed">
                            Your message has been received, and I&apos;ll be reaching out to you soon. I appreciate your time and look forward to connecting with you!
                        </p>
                        <div className="h-px bg-line my-5" />
                        <p className="text-sm text-muted">The reply will be sent to your email address: <span className="text-primary font-bold">{form.email}</span></p>
                        <button onClick={() => { setForm(empty); setStatus({ kind: "idle" }); }} className="btn btn-outline mt-5">
                            <FaRotateRight /> Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={submit} noValidate className="board p-5 sm:p-8 grid sm:grid-cols-2 gap-4">
                        <Field label="Your name *"><input name="name" value={form.name} onChange={update} className="field" placeholder="John Doe" autoComplete="name" /></Field>
                        <Field label="Your e-mail *"><input name="email" type="email" value={form.email} onChange={update} className="field" placeholder="john@example.com" autoComplete="email" /></Field>
                        <Field label="Subject" full><input name="subject" value={form.subject} onChange={update} className="field" placeholder="Let's work together on…" /></Field>
                        <Field label="Message *" full><textarea name="message" rows={6} value={form.message} onChange={update} className="field resize-none" placeholder="Tell me about your project, timeline and goals…" /></Field>

                        {status.kind === "error" && (
                            <p role="alert" className="sm:col-span-2 flex items-center gap-2 text-sm text-danger bg-danger/10 border border-danger/30 rounded-xl px-4 py-3">
                                <FaTriangleExclamation /> {status.message}
                            </p>
                        )}
                        <div className="sm:col-span-2 flex justify-center">
                            <button type="submit" disabled={status.kind === "sending"} className="btn btn-primary px-10">
                                {status.kind === "sending" ? <><FaSpinner className="animate-spin" /> Sending message...</> : <><FaPaperPlane /> Send Message</>}
                            </button>
                        </div>
                    </form>
                )}
            </Block>

            <Block title="Or if you {{prefer}}...">
                <div className="grid md:grid-cols-3 gap-4">
                    <InfoCard icon={FaEnvelope} label="E-mail" value={profile.email} href={`mailto:${profile.email}`} onCopy={() => copy(profile.email)} />
                    <InfoCard icon={FaPhone} label="Phone" value={profile.phone} href={profile.phoneHref} onCopy={() => copy(profile.phone)} />
                    <InfoCard icon={FaLocationDot} label="Location" value={profile.location} />
                </div>
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                    {socials.map(({ label, href, icon: Icon }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <Icon /> {label}
                        </a>
                    ))}
                </div>
            </Block>
        </>
    );
}

function Field({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) {
    return (
        <label className={`block ${full ? "sm:col-span-2" : ""}`}>
            <span className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">{label}</span>
            {children}
        </label>
    );
}

function InfoCard({ icon: Icon, label, value, href, onCopy }: { icon: React.ComponentType; label: string; value: string; href?: string; onCopy?: () => void }) {
    return (
        <div className="board board-hover p-5 text-center">
            <span className="mx-auto w-12 h-12 grid place-items-center rounded-xl bg-primary-soft text-primary text-lg"><Icon /></span>
            <p className="text-xs uppercase tracking-wider text-muted font-bold mt-3">{label}</p>
            {href ? <a href={href} className="font-bold mt-1 block hover:text-primary break-all">{value}</a> : <p className="font-bold mt-1">{value}</p>}
            {onCopy && (
                <button onClick={onCopy} className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-muted hover:text-primary cursor-pointer">
                    <FaCopy /> Copy to clipboard
                </button>
            )}
        </div>
    );
}
