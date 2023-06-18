import { Filter, Navbar, Sidebar, TaskBoard } from "../components"

const Dashboard = () => {
  return (
    <main className=" flex w-full flex-row ">
      <aside className="md:flex w-1/5 md:border-r hidden ">
        {/* <aside className=" fixed flex w-1/5 border-r "> */}
        <Sidebar />
      </aside>
      <section className="mb-20 w-full md:px-10 px-2  ">
        <Navbar />
        <Filter />
        <TaskBoard />
      </section>
    </main>
  )
}

export default Dashboard
