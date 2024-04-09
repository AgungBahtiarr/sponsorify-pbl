import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function EventTable(props) {
    const eventList = props.eventList;
    console.log(eventList)
    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between">
                    <div>
                        <CardTitle>Daftar Event</CardTitle>
                        <CardDescription>
                            Table Untuk Mengelola Daftar Event
                        </CardDescription>
                    </div>
                    <div>
                        {props.eventForm}
                    </div>
                </div>

            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nama Event</TableHead>
                            <TableHead>Deskripsi</TableHead>
                            <TableHead>Tanggal Mulai</TableHead>
                            <TableHead>Proposal</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>
                                <span>Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {eventList.map((event) => {
                            return (
                                <TableRow key={event.id}>
                                    <TableCell className="font-medium">
                                        {event.name}
                                    </TableCell>
                                    <TableCell>
                                        <p className="truncate ... w-52 ">{event.description}</p>
                                    </TableCell>
                                    <TableCell>{event.startDate.toDateString()}</TableCell>
                                    <TableCell><a href={event.proposal}>Download</a></TableCell>
                                    <TableCell>{event.location}</TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                    <span className="sr-only">Toggle menu</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem>
                                                    <form method="POST">
                                                        <input type="hidden" name="id" value={event.id} />
                                                        <input type="hideen" name="method" value="delete" />
                                                        <Button>Delete</Button>
                                                    </form>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
