import { Leaf, Heart, Award, ShieldCheck, Sparkles, Wheat } from 'lucide-react';

const ITEMS = [
    { icon: ShieldCheck, text: 'FSSAI Certified' },
    { icon: Leaf, text: '100% Natural' },
    { icon: Heart, text: 'Heart Healthy' },
    { icon: Award, text: 'Premium Grade' },
    { icon: Sparkles, text: 'High Protein' },
    { icon: Wheat, text: 'Gluten Free' },
    { icon: Leaf, text: 'No Preservatives' },
    { icon: ShieldCheck, text: 'Non-GMO' },
];

export default function TrustTicker() {
    const doubled = [...ITEMS, ...ITEMS];

    return (
        <div className="py-3 bg-brand-600 overflow-hidden">
            <div className="ticker-track">
                {doubled.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 px-6 whitespace-nowrap">
                        <item.icon className="w-3.5 h-3.5 text-brand-200" />
                        <span className="text-xs font-body font-medium text-white/90 tracking-wide">{item.text}</span>
                        <span className="text-brand-300/40 text-xs ml-3">✦</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
