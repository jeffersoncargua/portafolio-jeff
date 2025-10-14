import { CardProject } from "./CardProject";

export const SectionProject = ({titleSection, projects}) => {
  return (
    <section className="w-[90%] mx-auto z-40 flex flex-col items-center space-y-8">
        <div className="place-self-start flex-col inline-flex">
            <h1 className="font-semibold text-2xl text-start text-shadow-lg/30 mb-1.5">{titleSection}</h1>
            <hr className="mx-auto w-16 p-0.5 border-0 bg-slate-50 rounded-lg shadow-xl/30 shadow-gray-900" />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-6 gap-y-4">
            {projects.map((item) => 
                (<CardProject key={item.title} item={item} />)
            )}
        </div>
    </section>
  )
}
