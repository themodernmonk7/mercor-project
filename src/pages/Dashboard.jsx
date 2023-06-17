import { Filter, Navbar, Sidebar, TaskBoard } from "../components"



const Dashboard = () => {
  return (
    <main className=" w-full flex flex-row ">
        <aside className=" w-1/5 border-r  ">
        <Sidebar/>
        </aside>
        {/* <section className=" bg-blue-300 w-full "> */}
        <section className="w-full px-10  ">
            <Navbar/>
            <Filter/>
            <TaskBoard/>
        </section>
    </main>
  )
}

export default Dashboard