import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="w-full bg-card">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-3 mb-12">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Have questions? We're here to help. Reach out to us anytime.
                </p>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
                <Card className="flex flex-col items-center text-center p-6">
                    <CardHeader>
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-1">
                        <CardTitle className="font-headline">Phone</CardTitle>
                        <CardDescription className="text-muted-foreground">
                            <a href="tel:11112223333" className="hover:text-primary">111-122-23333</a>
                        </CardDescription>
                    </CardContent>
                </Card>
                <Card className="flex flex-col items-center text-center p-6">
                    <CardHeader>
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-1">
                        <CardTitle className="font-headline">Email</CardTitle>
                        <CardDescription className="text-muted-foreground">
                            <a href="mailto:test@test.com" className="hover:text-primary">test@test.com</a>
                        </CardDescription>
                    </CardContent>
                </Card>
                <Card className="flex flex-col items-center text-center p-6">
                    <CardHeader>
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-1">
                        <CardTitle className="font-headline">Address</CardTitle>
                        <CardDescription className="text-muted-foreground">
                            Woodberry Down, London N4 2TG
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
  );
}
