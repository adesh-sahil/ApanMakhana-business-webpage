import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Store, MapPin, Truck, ShieldCheck } from 'lucide-react';

interface CounterProps {
    end: number;
    suffix?: string;
    label: string;
    icon: React.ElementType;
    inView: boolean;
}

function Counter({ end, suffix = '', label, icon: Icon, inView }: CounterProps) {
    const [count, setCount] = useState(0);
    const started = useRef(false);

    useEffect(() => {
        if (!inView || started.current) return;
        started.current = true;

        const duration = 1800;
        const steps = 40;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            // Ease out
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            current = Math.round(eased * end);
            setCount(current);
            if (step >= steps) {
                setCount(end);
                clearInterval(timer);
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [inView, end]);

    return (
        <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-50 flex items-center justify-center mb-2">
                <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-brand-600" />
            </div>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 tabular-nums">
                {count}{suffix}
            </p>
            <p className="text-[0.7rem] sm:text-xs font-body text-gray-500 mt-0.5 font-medium">{label}</p>
        </div>
    );
}

const METRICS = [
    { end: 250, suffix: '+', label: 'Premium Outlets', icon: Store },
    { end: 8, suffix: '+', label: 'States Across India', icon: MapPin },
    { end: 3, suffix: '', label: 'E-Commerce Platforms', icon: Truck },
    { end: 100, suffix: '%', label: 'Natural & Certified', icon: ShieldCheck },
];

export default function MetricsBar() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section
            id="metrics"
            ref={ref}
            className="py-10 sm:py-14 bg-white border-y border-gray-100"
        >
            <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
                >
                    {METRICS.map((m, i) => (
                        <motion.div
                            key={m.label}
                            initial={{ opacity: 0, y: 16 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                        >
                            <Counter {...m} inView={inView} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
