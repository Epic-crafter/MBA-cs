import Image from "next/image"

const UpcomingEvents = () => {
  const events = [
    {
      img: "/img/events/UpcomingEvents/Frame 10520.png",
      head: "EVENT NAME",
      date: "10th December 2024",
      time: "10:00 AM -11:00 PM",
    },
    {
      img: "/img/events/UpcomingEvents/Frame 10520.png",
      head: "EVENT NAME",
      date: "10th December 2024",
      time: "10:00 AM -11:00 PM",
    },
    {
      img: "/img/events/UpcomingEvents/Frame 10520.png",
      head: "EVENT NAME",
      date: "10th December 2024",
      time: "10:00 AM -11:00 PM",
    },
  ]

  return (
    <div className="bg-[#E3E3E3] py-16">
      <h1 className="mb-16 text-center text-[#012060] text-[45px] font-bold">UPCOMING EVENTS</h1>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {events.map((event, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border-[3px] border-[#012060] shadow-[-8px_8px_0px_#012060] p-6"
            >
              <Image
                src={event.img || "/placeholder.svg"}
                width={500}
                height={500}
                alt="Event illustration"
                className="w-full rounded-lg mb-6"
              />
              <h2 className="text-[32px] font-bold text-[#012060] mb-6">{event.head}</h2>

              <div className="flex items-center gap-3 mb-4 justify-center">
                <Image alt="Calendar icon" width={24} height={24} src="/img/events/UpcomingEvents/uis_calender.png" />
                <p className="text-[#3D3D3D] text-xl">{event.date}</p>
              </div>

              <div className="flex items-center gap-3 mb-8 justify-center">
                <Image alt="Clock icon" width={24} height={24} src="/img/events/UpcomingEvents/mdi_clock.png" />
                <p className="text-[#3D3D3D] text-xl">{event.time}</p>
              </div>

              <div className="flex justify-center">
                <button className="bg-[#F6851E] hover:bg-[#e07616] transition-colors rounded-lg text-base font-bold text-white px-8 py-3 w-full md:w-auto">
                  REGISTER NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvents

