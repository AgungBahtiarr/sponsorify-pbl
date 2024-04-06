import {
    Card,
    CardContent,
} from "@/components/ui/card"

export function CardLayout(props) {
    return (
        <Card className="w-full">
            <CardContent>
                {props.children}
            </CardContent>
        </Card>
    )
}
