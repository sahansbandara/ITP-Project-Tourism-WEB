import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, FileText, User as UserIcon, Mail, Phone, DollarSign, Settings, Users } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import connectDB from '@/lib/mongodb';
import Booking from '@/models/Booking';
import Partner from '@/models/Partner';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookingStatus, PartnerStatus } from '@/lib/constants';
import { format } from 'date-fns';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Bespoke Booking Details | Yatara Ceylon',
};

async function getBookingData(id: string) {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) return { booking: null, partners: [] };
    try {
        await connectDB();
        const [booking, partners] = await Promise.all([
            Booking.findById(id).lean(),
            Partner.find({ status: PartnerStatus.ACTIVE, isDeleted: false }).lean()
        ]);

        if (!booking) return { booking: null, partners: [] };

        return {
            booking: JSON.parse(JSON.stringify(booking)),
            partners: JSON.parse(JSON.stringify(partners))
        };
    } catch (error) {
        console.error("Failed to fetch booking data:", error);
        return { booking: null, partners: [] };
    }
}

// Params type definition for Next.js 15+
type Params = Promise<{ id: string }>;

export default async function BookingDetailsPage({ params }: { params: Params }) {
    const { id } = await params;
    const { booking, partners } = await getBookingData(id);

    if (!booking) {
        notFound();
    }

    const startD = new Date(booking.dates?.from || booking.createdAt);
    const endD = new Date(booking.dates?.to || booking.createdAt);
    const durationDays = Math.max(1, Math.ceil((endD.getTime() - startD.getTime()) / (1000 * 60 * 60 * 24)));

    return (
        <div className="flex flex-col gap-6 p-6 bg-off-white/30 min-h-screen">
            <div className="flex items-center gap-4">
                <Link href="/dashboard/bookings">
                    <Button variant="ghost" size="icon" className="hover:text-antique-gold hover:bg-deep-emerald/5">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-serif text-deep-emerald tracking-tight">Booking #{booking.bookingNo}</h1>
                    <p className="text-muted-foreground font-light tracking-wide">{format(new Date(booking.createdAt), 'PPP p')}</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <Badge variant="outline" className="text-lg px-4 py-1.5 border-antique-gold/50 text-deep-emerald font-serif uppercase tracking-widest bg-antique-gold/10">
                        {booking.status}
                    </Badge>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <Card className="rounded-none border-deep-emerald/10 shadow-sm">
                        <CardHeader className="bg-deep-emerald/5 border-b border-deep-emerald/10 pb-4">
                            <CardTitle className="flex items-center gap-2 font-serif text-xl tracking-wide text-deep-emerald">
                                <UserIcon className="h-5 w-5 text-antique-gold" />
                                Elite Guest Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid md:grid-cols-2 gap-6 pt-6">
                            <div>
                                <h3 className="text-xs font-serif uppercase tracking-widest text-deep-emerald/60 mb-1">Name</h3>
                                <p className="text-lg font-medium text-deep-emerald">{booking.customerName}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-serif uppercase tracking-widest text-deep-emerald/60 mb-1">Email</h3>
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-antique-gold" />
                                    <p className="font-light">{booking.email || 'N/A'}</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xs font-serif uppercase tracking-widest text-deep-emerald/60 mb-1">Phone</h3>
                                <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-antique-gold" />
                                    <p className="font-light">{booking.phone || 'N/A'}</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xs font-serif uppercase tracking-widest text-deep-emerald/60 mb-1">Pax</h3>
                                <p className="font-light">{booking.pax || 'N/A'} Guests</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-deep-emerald/10 shadow-sm">
                        <CardHeader className="bg-deep-emerald/5 border-b border-deep-emerald/10 pb-4">
                            <CardTitle className="flex items-center gap-2 font-serif text-xl tracking-wide text-deep-emerald">
                                <FileText className="h-5 w-5 text-antique-gold" />
                                Bespoke Journey Details
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6 pt-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-xs font-serif uppercase tracking-widest text-deep-emerald/60 mb-1">Booking Type</h3>
                                    <p className="font-medium text-deep-emerald tracking-wide">{booking.type}</p>
                                </div>
                                {booking.packageId && (
                                    <div>
                                        <h3 className="text-xs font-serif uppercase tracking-widest text-deep-emerald/60 mb-1">Curated Package</h3>
                                        <Link href={`/dashboard/packages/${booking.packageId}`} className="text-antique-gold hover:text-deep-emerald transition-colors hover:underline font-medium">
                                            View Package details &rarr;
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <div className="border-t border-deep-emerald/10 pt-6 mt-4">
                                <h3 className="text-xs font-serif uppercase tracking-widest text-deep-emerald/60 mb-3">Itinerary / Notes</h3>
                                <div className="bg-white border border-deep-emerald/5 p-5 rounded-none text-sm whitespace-pre-wrap font-light text-deep-emerald/80 leading-relaxed shadow-inner">
                                    {booking.specialRequests || booking.notes || 'No special requests or bespoke itinerary notes listed.'}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-antique-gold/30 shadow-sm bg-white">
                        <CardHeader className="bg-antique-gold/10 border-b border-antique-gold/20 pb-4">
                            <CardTitle className="flex items-center gap-2 font-serif text-xl tracking-wide text-deep-emerald">
                                <Users className="h-5 w-5 text-deep-emerald" />
                                Supplier Rate Card (Partner Assignment)
                            </CardTitle>
                            <CardDescription className="text-deep-emerald/60 font-light">
                                Instantly assign a vetted partner, guide, or premium chauffeur to this journey.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="space-y-4">
                                <label className="text-xs font-serif uppercase tracking-widest text-deep-emerald/60">Select Vetted Partner</label>
                                <Select defaultValue={booking.assignedStaffId || undefined}>
                                    <SelectTrigger className="w-full rounded-none border-deep-emerald/20 h-12 focus:ring-antique-gold text-deep-emerald">
                                        <SelectValue placeholder="Unassigned - Select a Guide/Driver" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {partners.map((p: any) => (
                                            <SelectItem key={p._id} value={p._id}>
                                                {p.name} ({p.type})
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Button className="mt-2 w-full sm:w-auto rounded-none bg-deep-emerald hover:bg-deep-emerald/90 text-antique-gold tracking-wider">
                                    Confirm Partner Assignment
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-8">
                    <Card className="rounded-none border-deep-emerald/10 shadow-sm">
                        <CardHeader className="bg-deep-emerald/5 border-b border-deep-emerald/10 pb-4">
                            <CardTitle className="flex items-center gap-2 font-serif text-xl tracking-wide text-deep-emerald">
                                <Calendar className="h-5 w-5 text-antique-gold" />
                                Schedule
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6 pt-6 flex flex-col items-center text-center">
                            <div className="w-full pb-4 border-b border-deep-emerald/10">
                                <h3 className="text-xs font-serif uppercase tracking-widest text-deep-emerald/60 mb-1">Arrival Date</h3>
                                <p className="text-lg font-medium text-deep-emerald">{format(startD, 'PPP')}</p>
                            </div>
                            <div className="w-full pb-4 border-b border-deep-emerald/10">
                                <h3 className="text-xs font-serif uppercase tracking-widest text-deep-emerald/60 mb-1">Departure Date</h3>
                                <p className="text-lg font-medium text-deep-emerald">{format(endD, 'PPP')}</p>
                            </div>
                            <div className="w-full">
                                <h3 className="text-xs font-serif uppercase tracking-widest text-deep-emerald/60 mb-1">Duration</h3>
                                <p className="text-xl font-serif text-antique-gold">{durationDays} Days</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-deep-emerald/10 shadow-sm">
                        <CardHeader className="bg-deep-emerald text-off-white pb-4">
                            <CardTitle className="flex items-center gap-2 font-serif text-xl tracking-wide text-antique-gold">
                                <DollarSign className="h-5 w-5" />
                                Financial Engine
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-6">
                            <div className="flex justify-between items-center text-sm font-medium text-deep-emerald/80">
                                <span>Paid Amount</span>
                                <span>LKR {booking.paidAmount?.toLocaleString() || '0'}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm font-medium text-deep-emerald/80">
                                <span>Remaining Balance</span>
                                <span className="text-red-600">LKR {booking.remainingBalance?.toLocaleString() || '0'}</span>
                            </div>
                            <div className="flex justify-between items-center text-xl font-serif font-bold text-deep-emerald pt-2 border-t border-deep-emerald/10">
                                <span>Total Cost</span>
                                <span>LKR {booking.totalCost?.toLocaleString() || '0'}</span>
                            </div>
                            <div className="border-t border-deep-emerald/10 pt-6 mt-4 flex flex-col gap-3">
                                <Link href={`/api/finance/receipt?bookingNo=${booking.bookingNo}`} target="_blank" className="w-full">
                                    <Button className="w-full rounded-none border border-antique-gold text-antique-gold hover:bg-antique-gold hover:text-deep-emerald transition-colors" variant="outline">
                                        Download Luxury Receipt (PDF)
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-deep-emerald/10 shadow-sm">
                        <CardHeader className="bg-deep-emerald/5 border-b border-deep-emerald/10 pb-4">
                            <CardTitle className="flex items-center gap-2 font-serif text-xl tracking-wide text-deep-emerald">
                                <Settings className="h-5 w-5 text-antique-gold" />
                                State Actions
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-6">
                            <label className="text-xs font-serif uppercase tracking-widest text-deep-emerald/60">Change Status</label>
                            <Select defaultValue={booking.status}>
                                <SelectTrigger className="w-full rounded-none border-deep-emerald/20 h-10 focus:ring-antique-gold">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {Object.values(BookingStatus).map(status => (
                                        <SelectItem key={status} value={status}>{status}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Button className="w-full bg-deep-emerald hover:bg-deep-emerald/90 text-off-white rounded-none tracking-widest uppercase text-xs h-10">
                                Update Status
                            </Button>
                            <p className="text-xs text-deep-emerald/50 font-light mt-2 text-center">
                                * Setting status to CONFIRMED will auto-block assigned vehicles.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
