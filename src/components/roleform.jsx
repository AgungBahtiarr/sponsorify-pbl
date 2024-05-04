import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function RoleForm() {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Pilih Role</CardTitle>
                <CardDescription>Pilih Sebagai apa anda mendaftar, Event Organizer / Sponsor</CardDescription>
            </CardHeader>
            <form method="POST">
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="role">Pilih Peran</Label>
                            <Select name="role">
                                <SelectTrigger id="role">
                                    <SelectValue placeholder="Pilih" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="Event Organizer">Event Organizer</SelectItem>
                                    <SelectItem value="Sponsor">Sponsor</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button>Submit</Button>
                </CardFooter>
            </form>
        </Card>
    )
}
