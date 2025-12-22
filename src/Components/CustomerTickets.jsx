import React, { use } from "react";
import TicketCard from "./TicketCard";
import { Check } from "lucide-react";

const CustomerTickets = ({
  promise,
  inProgressTasks,
  resolvedTasks,
  onAddTask,
  onCompleteTask,
}) => {
  const tickets = use(promise);

  const visibleTickets = tickets.filter(
  (ticket) => !resolvedTasks.find((r) => r.id === ticket.id)
);

  return (
    <div className="w-11/12 mx-auto py-20 grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8">
        <h1 className="font-bold text-xl text-gray-500 opacity-90">
          Customer Tickets
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          {visibleTickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onClick={() => onAddTask(ticket)}
            />
          ))}
        </div>
      </div>

      <div className="lg:col-span-4 space-y-6 ml-6  ">
       <div className="bg-white p-5">
        <h1 className="font-bold text-xl text-gray-500 opacity-90">
          Task Status
        </h1>

        {/* In Progress */}
       {inProgressTasks.length === 0 ? (
  <div>
    <p className="text-center opacity-90">
    No resolved task
  </p>
  <p className='text-center  py-4 opacity-80'>Click on a Ticket to start working</p>
  </div>
) : (
  inProgressTasks.map((task) => (
    <div
      key={task.id}
      className="p-4 mt-4 bg-gray-100 rounded-lg "
    >
      <p className="font-medium text-gray-600 ">
        {task.title}
      </p>

      <div className="flex items-center gap-2 mt-2">
        
        <button  onClick={() => onCompleteTask(task)} 
        className="bg-green-600 text-white w-full p-2 rounded">
          Completed
        </button>
      </div>
      
    </div>
  ))
)}
</div> 

        {/* Resolved */}
        
        <div className='bg-white rounded-xl mt-10 '>
          <h1 className="font-bold text-xl text-gray-500 opacity-90">
          Resolved Task
        </h1>
          {resolvedTasks.map((task) => (
          <div
            key={task.id}
            className="p-3 border rounded-lg mt-5 bg-gray-100 text-gray-600 "
          >
            {task.title}
            <div className='flex  justify-between mt-2'>
              <div className='flex'>
                <Check  color="#54CF68"/>
                <p className="text-green-400">Completed</p>
              </div>
              <p className='opacity-80'>Click to remove</p>

            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;
