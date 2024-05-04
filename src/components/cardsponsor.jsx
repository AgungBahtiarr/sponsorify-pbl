import { Badge } from "@/components/ui/badge"
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CardSponsor(props) {
    return (
        <Card className="w-full max-w-sm min-w-[288px] md:min-w-full">
            <CardHeader>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <img
                            alt="Sponsor avatar"
                            className="rounded-full"
                            height="40"
                            src={props.image}
                            style={{
                                aspectRatio: "40/40",
                                objectFit: "cover",
                            }}
                            width="40"
                        />
                        <div className="text-sm font-semibold leading-none">{props.name}</div>
                    </div>
                    <Badge className="text-xs hidden md:block bg-primary">{props.category}</Badge>
                </div>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <div className="text-sm font-medium">About</div>
                    <p className="text-sm text-gray-500">
                        {props.description}
                    </p>
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex flex-col md:flex-row justify-between w-full gap-2 md:gap-4">
                    <Button className="w-full" variant="outline">
                        View Details
                    </Button>
                    <Button className="w-full">
                        Upload
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
