import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function EventForm() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Tambah event</Button>
            </DialogTrigger>
            <form action="POST">
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Tambah event</DialogTitle>
                        <DialogDescription>
                            Tambahkan profil event yang akan anda selenggarakan
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Nama event
                            </Label>
                            <Input id="name" placeholder="Nama event.." className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="deskripsi" className="text-right">
                                Deskripsi event
                            </Label>
                            <Textarea id="deskripsi" placeholder="Deskripsi event..." name="deskripsi" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="date" className="text-right">
                                Tanggal mulai
                            </Label>
                            <Input id="date" type="date" className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
