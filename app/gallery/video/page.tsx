// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
// import { PlayCircle } from "lucide-react";
// import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // Import Radix UI VisuallyHidden

// const videos = [
//   {
//     id: 1,
//     title: "Delicious Pav Bhaji Preparation",
//     thumbnail: "/assets/video-thumbnail1.jpg",
//     videoUrl: "https://www.youtube.com/embed/3YJgsI2zfXk", // Your YouTube Short Link
//   },
//   {
//     id: 2,
//     title: "Behind The Scenes at BARAIZ",
//     thumbnail: "/assets/video-thumbnail2.jpg",
//     videoUrl: "https://www.youtube.com/embed/3YJgsI2zfXk",
//   },
//   {
//     id: 3,
//     title: "Customer Reactions & Reviews",
//     thumbnail: "/assets/video-thumbnail3.jpg",
//     videoUrl: "https://www.youtube.com/embed/3YJgsI2zfXk",
//   },
// ];

// export default function VideoGallery() {
//   const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

//   return (
//     <div className="w-full min-h-screen bg-gray-50 py-10">
//       {/* Header */}
//       <motion.h2
//         className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-[#E52020]"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Video Gallery
//       </motion.h2>

//       {/* Video Grid */}
//       <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {videos.map((video) => (
//           <Dialog key={video.id}>
//             <DialogTrigger asChild>
//               <motion.div
//                 className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//                 onClick={() => setSelectedVideo(video.videoUrl)}
//               >
//                 {/* Thumbnail */}
//                 <img
//                   src={video.thumbnail}
//                   alt={video.title}
//                   className="w-full h-[200px] object-cover rounded-lg"
//                 />
                
//                 {/* Play Icon */}
//                 <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//                   <PlayCircle className="w-16 h-16 text-white" />
//                 </div>

//                 {/* Title */}
//                 <div className="absolute bottom-0 w-full bg-black/70 text-white text-center p-2">
//                   <h3 className="text-lg font-semibold">{video.title}</h3>
//                 </div>
//               </motion.div>
//             </DialogTrigger>

//             {/* Video Popup */}
//             <DialogContent className="w-full max-w-3xl bg-white rounded-lg p-4">
//               <DialogTitle>
//                 <VisuallyHidden>{video.title}</VisuallyHidden>
//               </DialogTitle>

//               <iframe
//                 width="100%"
//                 height="400"
//                 src={selectedVideo ?? ""}
//                 title={video.title}
//                 allow="autoplay; encrypted-media"
//                 allowFullScreen
//                 className="rounded-lg"
//               />
//             </DialogContent>
//           </Dialog>
//         ))}
//       </div>
//     </div>
//   );
// }



"use client";

import { motion } from "framer-motion";

const videos = [
  {
    id: 1,
    title: "Delicious Pav Bhaji Preparation",
    videoUrl: "https://www.youtube.com/embed/3YJgsI2zfXk", // YouTube Short Link
  },
  {
    id: 2,
    title: "Behind The Scenes at BARAIZ",
    videoUrl: "https://www.youtube.com/embed/3YJgsI2zfXk",
  },
  {
    id: 3,
    title: "Customer Reactions & Reviews",
    videoUrl: "https://www.youtube.com/embed/3YJgsI2zfXk",
  },
];

export default function VideoGallery() {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 pt-36">
      {/* Header */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-[#E52020]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Video Gallery
      </motion.h2>

      {/* Video Grid */}
      <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <motion.div
            key={video.id}
            className="relative rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Embedded YouTube Video */}
            <iframe
              width="100%"
              height="250"
              src={video.videoUrl}
              title={video.title}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="rounded-lg"
            />
            
            {/* Title */}
            <div className="w-full bg-black text-white text-center py-2">
              <h3 className="text-lg font-semibold">{video.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
