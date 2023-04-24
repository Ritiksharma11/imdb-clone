import { Card } from "./Card"

const Results = ({ results }) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[400px] md:max-w-6xl mx-auto ">
            {
                results.map((result) => (
                    <Card key={result.id} result={result} />
                ))
            }
        </div>
    )
}

export default Results