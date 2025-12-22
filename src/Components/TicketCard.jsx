import { Calendar, Circle } from "lucide-react";

const TicketCard = ({ ticket,onClick }) => {
  // Status color logic
  const getStatusColor = (status) => {
    if (status === "Open") return "bg-green-100 text-green-600";
    if (status === "In-Progress") return "bg-yellow-100 text-yellow-600";
    if (status === "Resolved") return "bg-gray-100 text-gray-600";
    return "bg-gray-100 text-gray-600";
  };
// for circle 
  const getStatusDotColor = (status) => {
  if (status === "Open") return "text-green-600";
  if (status === "In-Progress") return "text-yellow-500";
  if (status === "Resolved") return "text-gray-500";
  return "text-gray-400";
};

  // Priority color logic
  const getPriorityColor = (priority) => {
    if (priority === "High") return "text-red-500";
    if (priority === "Medium") return "text-yellow-500";
    return "text-green-500";
  };

  return (
   <div
  onClick={onClick}
  className="bg-white rounded-xl p-4 shadow-sm mb-4 cursor-pointer hover:scale-105 transition"
>
      {/* Title + Status */}
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-gray-800 text-sm">
          {ticket.title}
        </h3>

        <span
  className={`flex items-center gap-1 text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(
    ticket.status
  )}`}
>
  <Circle
    size={15}
    className={getStatusDotColor(ticket.status)}
    fill="currentColor"
  />
  {ticket.status}
</span>

      </div>

      {/* Description */}
      <p className="text-xs text-gray-500 mt-2">
        {ticket.description}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-700">
            #{ticket.id}
          </span>
          <span
            className={`${getPriorityColor(
              ticket.priority
            )} font-semibold uppercase`}
          >
            {ticket.priority} Priority
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span>{ticket.customer}</span>
          <span className='flex'>
            <Calendar size={15} /> {new Date(ticket.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
