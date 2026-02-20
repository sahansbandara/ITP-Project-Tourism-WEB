'use client';

import { useState, useRef } from 'react';
import Script from 'next/script';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';

export default function BookingRequestClient({ vehicle }: { vehicle?: any }) {
    const searchParams = useSearchParams();
    const typeFromQuery = searchParams.get('type') || (vehicle ? 'VEHICLE' : 'PACKAGE');

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ message: string; success: boolean } | null>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const [checkoutData, setCheckoutData] = useState<{ url: string; fields: any } | null>(null);

    const [form, setForm] = useState({
        customerName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: 'Sri Lanka',
        type: typeFromQuery,
        vehicleId: vehicle?._id || '',
        pax: 1,
        pickupLocation: '',
        dates: {
            from: '',
            to: ''
        },
        notes: ''
    });

    const handleCreateBookingAndPay = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            // 1. Create booking
            const bookingRes = await fetch('/api/public/booking-request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            if (!bookingRes.ok) throw new Error('Failed to create booking request');
            const bookingData = await bookingRes.json();

            // Calculate expected amount if it's a vehicle (e.g. dailyRate * days)
            let amountVal = 0;
            if (vehicle) {
                const date1 = new Date(form.dates.from).getTime();
                const date2 = new Date(form.dates.to).getTime();
                let days = Math.ceil((date2 - date1) / (1000 * 3600 * 24));
                if (days < 1) days = 1;

                amountVal = days * vehicle.dailyRate;
            }

            // Only attempt to pay if amount > 0
            if (amountVal > 0) {
                // Calculate 20% Advance natively in LKR
                const advanceAmount = amountVal * 0.20;

                // 2. Init PayHere
                const payRes = await fetch('/api/payhere/create', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        bookingId: bookingData.bookingId,
                        customer: {
                            firstName: form.customerName.split(' ')[0],
                            lastName: form.customerName.split(' ').slice(1).join(' ') || 'N/A',
                            email: form.email,
                            phone: form.phone,
                            address: form.address,
                            city: form.city,
                            country: form.country,
                        },
                        items: vehicle ? `20% Advance - ${vehicle.model} Transfer` : `20% Advance - Booking ${bookingData.bookingNo}`,
                        amount: advanceAmount
                    })
                });

                if (!payRes.ok) throw new Error('Payment initialization failed');
                const payData = await payRes.json();

                // 3. Trigger PayHere SDK Popup
                // @ts-ignore
                if (typeof window !== 'undefined' && window.payhere) {
                    // @ts-ignore
                    window.payhere.onCompleted = function onCompleted(orderId) {
                        setStatus({ success: true, message: 'Payment completed successfully. Validating...' });
                        window.location.href = `/payment/return?order_id=${orderId}`;
                    };

                    // @ts-ignore
                    window.payhere.onDismissed = function onDismissed() {
                        setStatus({ success: false, message: 'Payment popup was dismissed.' });
                        setLoading(false);
                    };

                    // @ts-ignore
                    window.payhere.onError = function onError(error) {
                        console.error('PayHere error', error);
                        setStatus({ success: false, message: 'An error occurred triggering the gateway.' });
                        setLoading(false);
                    };

                    // @ts-ignore
                    window.payhere.startPayment(payData.fields);
                } else {
                    console.error("PayHere SDK not loaded");
                    setStatus({ success: false, message: 'Payment gateway SDK not loaded.' });
                    setLoading(false);
                }

            } else {
                setStatus({ success: true, message: 'Booking request sent successfully. We will contact you soon.' });
                setLoading(false);
            }

        } catch (error) {
            console.error(error);
            setStatus({ success: false, message: 'An error occurred during booking. Please try again.' });
            setLoading(false);
        }
    };

    return (
        <>
            <form onSubmit={handleCreateBookingAndPay} className="space-y-6">
                {status && (
                    <div className={`p-4 rounded-md ${status.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                        {status.message}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="customerName">Full Name</Label>
                        <Input id="customerName" required value={form.customerName} onChange={e => setForm({ ...form, customerName: e.target.value })} placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email address</Label>
                        <Input id="email" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="john@example.com" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+94 77 123 4567" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="pax">Number of Passengers</Label>
                        <Input id="pax" type="number" required min={1} value={form.pax} onChange={e => setForm({ ...form, pax: Number(e.target.value) })} />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="address">Address (Required for Payments)</Label>
                    <Input id="address" required value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} placeholder="123 Colombo Road" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" required value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} placeholder="Colombo" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" required value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4">
                    <div className="space-y-2">
                        <Label htmlFor="dateFrom">Date From</Label>
                        <Input id="dateFrom" type="date" required value={form.dates.from} onChange={e => setForm({ ...form, dates: { ...form.dates, from: e.target.value } })} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="dateTo">Date To</Label>
                        <Input id="dateTo" type="date" required value={form.dates.to} onChange={e => setForm({ ...form, dates: { ...form.dates, to: e.target.value } })} />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="pickupLocation">Pickup Location</Label>
                    <Input id="pickupLocation" required value={form.pickupLocation} onChange={e => setForm({ ...form, pickupLocation: e.target.value })} placeholder="e.g. Airport, Hotel" />
                </div>

                <Button type="submit" disabled={loading} className="w-full bg-deep-emerald hover:bg-deep-emerald/90 text-antique-gold font-serif tracking-widest uppercase rounded-none h-14 text-sm font-semibold shadow-[0_0_15px_rgba(212,175,55,0.2)] border border-transparent hover:border-antique-gold inline-flex items-center justify-center transition-all duration-300">
                    {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin text-antique-gold" />}
                    {vehicle ? 'Confirm & Advance Pay (20%)' : 'Submit Fleet Request'}
                </Button>
            </form>

            <Script src="https://www.payhere.lk/lib/payhere.js" strategy="lazyOnload" />
        </>
    );
}
