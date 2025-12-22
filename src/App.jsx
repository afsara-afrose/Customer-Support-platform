import React, { Suspense, useState } from "react";
import "./App.css";
import BannerSection from "./Components/BannerSection";
import CustomerTickets from "./Components/CustomerTickets";
import Navbar from "./Components/Navbar";
import { toast, ToastContainer } from "react-toastify";
import { BounceLoader } from "react-spinners";
import Footer from "./Components/Footer";

const loadTickets = () => fetch("/tickets.json")
.then((res) => res.json());

function App() {
  const bookingPromise = loadTickets();


  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  
  const handleAddTask = (ticket) => {

    if (inProgressTasks.find((t) => t.id === ticket.id)) {
      toast.success("Task already in progress");
      return;
    }
    setInProgressTasks((prev) => [...prev, ticket]);
    toast.success("Task added to In-Progress");
  };

  
  const handleCompleteTask = (task) => {
    setInProgressTasks((prev) => prev.filter((t) => t.id !== task.id));
    setResolvedTasks((prev) => [...prev, task]);
    toast.success("Task  completed");
  };

  return (
    <div className="bg-amber-50 flex flex-col min-h-screen">
      <Navbar />

      <section className="w-11/12 mx-auto mt-6">
       
        <BannerSection 
        count={inProgressTasks.length}
        resolvedCount={resolvedTasks.length} />
      </section>

     <section className='flex-1'>
       <Suspense fallback={<BounceLoader className='items-center mx-auto mt-5' color="#54CF68"/>}>
       
        <CustomerTickets
          promise={bookingPromise}
          inProgressTasks={inProgressTasks}
          resolvedTasks={resolvedTasks}
          onAddTask={handleAddTask}
          onCompleteTask={handleCompleteTask}
        />
      </Suspense>
     </section>

      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;
