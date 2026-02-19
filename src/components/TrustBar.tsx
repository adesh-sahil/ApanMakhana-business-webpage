import { Award, Leaf, ShieldCheck, Heart, Zap } from 'lucide-react';

const ITEMS = [
    { icon: ShieldCheck, text: 'FSSAI Certified' },
    { icon: Leaf, text: '100% Natural' },
    { icon: Heart, text: 'Heart Healthy' },
    { icon: Award, text: 'Premium Grade' },
    { icon: Zap, text: 'High Protein' },
    { icon: ShieldCheck, text: 'No Preservatives' },
    { icon: Leaf, text: 'Gluten Free' },
    { icon: Heart, text: 'Non-GMO' },
];

export default function TrustBar() {
    const doubled = [...ITEMS, ...ITEMS]; // for seamless loop

    return (
        <section id="trust" className="py-3 sm:py-4 bg-brand-600 overflow-hidden">
            <div className="ticker-track">
                {doubled.map((item, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-2 px-5 sm:px-8 whitespace-nowrap"
                    >
                        <item.icon className="w-3.5 h-3.5 text-brand-200" />
                        <span className="text-xs sm:text-sm font-body font-medium text-white/90 tracking-wide">
                            {item.text}
                        </span>
                        <span className="text-brand-300/40 text-xs ml-3">✦</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
