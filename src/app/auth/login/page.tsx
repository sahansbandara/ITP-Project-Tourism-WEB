'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';

export default function EliteLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate login delay
        setTimeout(() => setLoading(false), 1500);
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/videos/hero-bg.mp4" type="video/mp4" />
                {/* Fallback to misty landscape if video not found */}
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-emerald/90 via-transparent to-black/40" />

            {/* Glassmorphic Login Card */}
            <div className="relative z-10 w-full max-w-md p-10 rounded-2xl backdrop-blur-lg bg-black/20 border border-white/20 shadow-2xl">

                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <Image
                        src="/images/yatara-ceylon-logo.svg"
                        alt="Yatara Ceylon Logo"
                        width={200}
                        height={60}
                        className="priority drop-shadow-lg"
                    />
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-serif text-antique-gold tracking-wide mb-2">Exclusive Access</h1>
                    <p className="text-off-white/80 font-light text-sm tracking-widest text-shadow-sm">
                        ENTER YOUR CREDENTIALS TO CONTINUE
                    </p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-serif uppercase tracking-widest text-antique-gold/80 block">
                            Email Address
                        </label>
                        <Input
                            type="email"
                            placeholder="concierge@yataraceylon.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 rounded-none focus-visible:ring-antique-gold font-light tracking-wide backdrop-blur-sm"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-serif uppercase tracking-widest text-antique-gold/80 block">
                            Private Access Code
                        </label>
                        <Input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 rounded-none focus-visible:ring-antique-gold font-light tracking-wide backdrop-blur-sm"
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-deep-emerald hover:bg-deep-emerald/90 text-antique-gold font-serif text-lg tracking-widest h-14 rounded-none shadow-[0_0_15px_rgba(212,175,55,0.2)] border border-transparent hover:border-antique-gold/60 transition-all duration-300"
                    >
                        {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                        Enter the Journey
                    </Button>
                </form>

                {/* Footer Links */}
                <div className="mt-8 text-center">
                    <Link
                        href="https://wa.me/94771234567?text=I%20am%20having%20trouble%20with%20my%20Private%20Access%20Code.%20Please%20assist."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-antique-gold font-light text-sm tracking-wide transition-colors duration-300 inline-flex border-b border-transparent hover:border-antique-gold pb-1"
                    >
                        Forgot Access Code?
                    </Link>
                </div>
            </div>
        </div>
    );
}
