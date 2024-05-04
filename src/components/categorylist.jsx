import { Button } from "./ui/button"

export default function CategoryList(props) {
    const categoryList = props.categoryList;
    return (
        <div className="overflow-x-scroll pb-4">
            <ul className="flex justify-start md:justify-center gap-4">
                <li><a href="/event/sponsors"><Button variant={props.current === "" ? "" : "outline"}>All</Button></a></li>
                {
                    categoryList.map((cat) => {
                        return <li key={cat.id}>
                            <form method="post">
                                <input type="hidden" name="category" value={cat.category} />
                                <Button variant={props.current === cat.category ? "" : "outline"}>{cat.category}</Button>
                            </form>
                        </li>
                    })
                }
            </ul>
        </div>

    )
}