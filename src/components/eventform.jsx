import { useState } from "react"
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
import { UploadButton } from "@/utils/uploadthing"

export default function EventForm(props) {
    const [url, setUrl] = useState("");
    const [ready, setReady] = useState(false);
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Tambah event</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <form action="" method="POST">
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
                            <Input id="name" name="name" placeholder="Nama event.." className="col-span-3" required />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Deskripsi event
                            </Label>
                            <Textarea id="description" placeholder="Deskripsi event..." name="description" className="col-span-3" required />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="startDate" className="text-right">
                                Tanggal mulai
                            </Label>
                            <Input id="startDate" type="date" name="startDate" className="col-span-3" required />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="location" className="text-right">
                                Lokasi
                            </Label>
                            <Input id="location" name="location" placeholder="lokasi event..." className="col-span-3" required />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="proposal" className="text-right">
                                Proposal
                            </Label>
                            <UploadButton
                                className="border-2 rounded-md px-6 pb-3 col-span-3"
                                endpoint="fileUploader"
                                onClientUploadComplete={(res) => {
                                    setReady(true);
                                    setUrl(res[0].url);
                                }}
                                onUploadError={(error) => {
                                    alert(`ERROR! ${error.message}`);
                                }}
                            />
                        </div>

                        <Input id="proposal" type="hidden" value={url} name="proposal" className="col-span-3" />
                        <input type="hidden" name="method" value="add" />
                    </div>
                    <DialogFooter>
                        {ready ? <Button type="submit">Submit</Button> : <Button disabled type="submit">Loading...</Button>}
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    )
}
