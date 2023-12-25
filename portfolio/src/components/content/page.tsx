import Intro from "./intro/page";


export default function Content({ page }: { page: string }) {
    return (
        <div className="h-full top-1/2 w-1/2">This is the {page}
            {/* <div>Projects</div>
            <div>About</div>
            <div>Contact</div>
            <div>Social Media</div> */}
            <Intro content={page}/>
        </div>
    )
}