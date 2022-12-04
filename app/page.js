"use client"

import { useState } from "react"
import Modal from "./(modal)/modal"

export default function Page() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <div className="flex flex-col justify-center mx-auto items-center h-screen w-[75%] my-auto">
        <h1>Hello, Next.js!</h1>
        <button
          onClick={() => setShowModal(true)}
          className="border rounded-sm p-2 m-2"
        >
          Modal
        </button>
        <p>
          BROOKLYN PARK, Minn. — Chet Holmgren's rookie season ended before it
          really began. The Oklahoma City Thunder's No. 2 overall pick played in
          a handful of Summer League games before getting injured in August
          while playing in pro-am in Seattle. The injury cost him his entire
          rookie season, but despite the injury, Holmgren is still making an
          impact. On Friday, the Minnehaha Academy graduate was handing out
          coats at the Salvation Army Service Center in Brooklyn Park, the same
          center that was set on fire and vandalized last month. "Minnesota's
          not a place where you want to go without a coat for the winter," said
          Holmgren. "So, I just thought I'd step in and try and lend a helping
          hand to those who might need it. Hundreds of donated coats were
          damaged after the center was set on fire and vandalized. Holmgren said
          when he heard the news, he wanted to replace 170 damaged coats through
          his partnership with Operation Warmth. "Being from here — and growing
          up in the cold — I think this is a great full-circle moment for sure,"
          said Holmgren. The Minneapolis native won four state championships
          with Minnehaha Academy and was named the Gatorade National Boys
          Basketball Player of the Year his senior season. He spent on year at
          Gonzaga where he averaged 14.1 points, 9.9 rebounds and 2.7 blocks
          while shooting .607 from the field and .390 from beyond the arc.
        </p>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-5">
            Modal Title
          </h3>
          <p className="mb-5 font-normal text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium adipisci, delectus eius est minus ducimus suscipit nobis
            dolorem modi reprehenderit a perspiciatis ipsa magni molestias,
            quaerat fugiat explicabo inventore perferendis. Modi eius architecto
            sunt perferendis odit sit laborum quos, totam delectus esse non
            dolor rerum dignissimos amet quisquam iusto, odio ducimus pariatur
            doloribus, blanditiis accusantium excepturi? Error vitae laudantium,
            ipsum praesentium iure, voluptate sit ab quos et minima animi quas
            quia tenetur, repellendus optio veritatis.
          </p>
        </div>
      </Modal>
    </>
  )
}
