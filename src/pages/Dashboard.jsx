import { Filter, Navbar, Sidebar, TaskBoard } from "../components"
import { Test } from "../components/Test"

const Dashboard = () => {
  return (
    <main className=" flex w-full flex-row ">
      {/* <Test /> */}
      <aside className="md:flex w-1/5 md:border-r hidden ">
        {/* <aside className=" fixed flex w-1/5 border-r "> */}
        <Sidebar />
      </aside>
      <section className="mb-20 w-full md:px-10 px-5  ">
        <Navbar />
        <Filter />
        <TaskBoard />
      </section>
    </main>
  )
}

export default Dashboard
