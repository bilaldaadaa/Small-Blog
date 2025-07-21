import AddPost from "./AddPost"

const Add = () => {
    return (
        <div>
            <h2 className="text-2xl text-lime-950 font-semibold mb-4">Add</h2>
            <AddPost submit="Add" rows={5} />
        </div>
    )
}

export default Add
