import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SponsorCard() {
    return (
        <div className="dark:hover:border-white hover:dark:border dark:hover:rounded-xl">
            <Card className="w-[90%] md:w-full max-w-sm rounded-xl overflow-hidden">
                <div className="relative aspect-[1/1]">
                    <img
                        alt="Sponsor logo"
                        className="absolute inset-0 w-full h-full object-cover"
                        height="200"
                        src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        style={{
                            aspectRatio: "300/300",
                            objectFit: "cover",
                        }}
                        width="300"
                    />
                </div>
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                        <div className="grid gap-2">
                            <CardTitle className="text-sm md:text-base">Acme Corporation</CardTitle>
                            <CardDescription className="text-sm">Providing innovative solutions for a brighter future.</CardDescription>
                        </div>
                        <div className="md:ml-auto flex flex-col justify-center items-center gap-2">
                            <Button variant="outline" className="w-full border-2">Detail</Button>
                            <Button className="w-full">Upload</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

    )
}