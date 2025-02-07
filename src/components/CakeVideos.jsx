import { motion } from 'framer-motion';

const CakeVideos = () => {
  const videos = [
    {
      id: 1,
      title: 'Chocolate Cake Decoration',
      url: 'https://player.vimeo.com/video/367412338?background=1',
      thumbnail: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80'
    },
    {
      id: 2,
      title: 'Wedding Cake Making',
      url: 'https://player.vimeo.com/video/162052542?background=1',
      thumbnail: 'https://images.unsplash.com/photo-1560180474-e8563fd75bab?w=500&q=80'
    },
    {
      id: 3,
      title: 'Birthday Cake Design',
      url: 'https://player.vimeo.com/video/219354239?background=1',
      thumbnail: 'https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=500&q=80'
    },
    {
      id: 4,
      title: 'Pastry Making Art',
      url: 'https://player.vimeo.com/video/207462772?background=1',
      thumbnail: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#9e2156] mb-4">Behind The Scenes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch our expert bakers create magic in the kitchen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="aspect-[9/16] relative overflow-hidden rounded-2xl shadow-lg">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                
                <iframe
                  src={video.url}
                  className="w-full h-full absolute inset-0"
                  allow="autoplay; fullscreen"
                  frameBorder="0"
                />

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
                  <h3 className="text-white font-semibold">{video.title}</h3>
                </div>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center z-30"
                >
                  <button className="bg-white/90 hover:bg-white text-[#9e2156] p-4 rounded-full shadow-lg backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CakeVideos;