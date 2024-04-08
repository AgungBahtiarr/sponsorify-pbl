import { Button } from "@/components/ui/button"

export default function NoEvent() {
    return (
        // <div
        //     className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        // >
        <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
                Kamu masih belum memiliki event
            </h3>
            <p className="text-sm text-muted-foreground">
                Kamu bisa mulai mendapatkan sponsor setelah menambahkan event mu
            </p>
            <Button className="mt-4">Add Event</Button>
        </div>
        // </div>
    )
}
