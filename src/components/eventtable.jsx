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
import EventForm from "@/components/eventform";

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
                        <EventForm />
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
                        {eventList.map((item) => {
                            return (
                                <TableRow key={item}>
                                    <TableCell className="font-medium">
                                        Semarak kemerdekaan
                                    </TableCell>
                                    <TableCell>
                                        <p className="truncate ... w-52 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, obcaecati aliquam? Aspernatur ratione adipisci rem ipsum dolores accusamus eius explicabo tenetur corrupti harum totam, iusto non aperiam similique esse sed!</p>
                                    </TableCell>
                                    <TableCell>05-02-2024</TableCell>
                                    {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                                    <TableCell><a href="#">Download</a></TableCell>
                                    <TableCell>Location</TableCell>
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
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
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
