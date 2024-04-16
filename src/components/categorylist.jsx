import { Button } from "./ui/button"

export default function CategoryList(props) {
    return (
        <ul class="flex justify-center gap-4">
            <li><Button>Category 1</Button></li>
            <li><Button variant="outline">Category 2</Button></li>
            <li><Button variant="outline">Category 3</Button></li>
            <li><Button variant="outline">Category 4</Button></li>
        </ul>
    )
}