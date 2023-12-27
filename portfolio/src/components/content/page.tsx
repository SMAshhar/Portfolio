import Intro from "./intro/page";
import Projects from "./projects/page";


export default function Content({ page }: { page: string }) {
    return (
        <div className="h-full top-1/2 w-full flex items-center justify-center">
            {/* <div>Projects</div>
            <div>About</div>
            <div>Contact</div>
            <div>Social Media</div> */}
            {page == 'home' ? <Intro content={page}/> : ''}
            {page == 'projects' ? <Projects /> : ''}
        </div>
    )
}