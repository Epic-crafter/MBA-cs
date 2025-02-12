export default function BlogPage() {
    const categories = [
      "Admission & Application Tips",
      "Carrier Development",
      "Admission & Application Tips",
      "Carrier Development",
      "Carrier Development",
      "Admission & Application Tips",
    ];
  
    const blogs = [
      {
        date: "22 July 2024",
        readTime: "4 min",
        title: "Our SaaS Product Just Launched!",
        description:
          "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
        tags: ["Design", "Product"],
        imageUrl:
          "/blog/allblog.png",
      },
    ];
  
    return (
      <div className="p-6 max-w-[1100px] mx-auto font-[Inter]">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-[#012060]">
          ALL BLOGS
        </h1>
  
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className="border-[2px] border-[#012060] px-7 py-2 text-sm font-bold rounded-lg text-[#012060] font-medium"
            >
              {category}
            </button>
          ))}
        </div>
  
        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array(4)
            .fill(blogs[0]) // Repeat the same blog
            .map((blog, index) => (
              <div
                key={index}
                className="border-[2px] border-[#012060] rounded-lg p-4 w-[90%] md:w-[501px] mx-auto shadow-[-7px_5px_#012060] bg-white"
              >
                {/* Image with Padding Inside the Card */}
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={blog.imageUrl}
                    alt="Blog"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
  
                <div className="pt-4">
                  <p className="text-sm text-gray-500 font-medium">
                    {blog.date} • {blog.readTime}
                  </p>
                  <h2 className="text-lg font-medium mt-1 ">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {blog.description}
                  </p>
  
                  {/* Tags */}
                  <div className="mt-3 flex gap-2">
                    {blog.tags.map((tag: string, i: number) => (
                      <span
                      key={i}
                      className="px-3 py-[4px] border border-[#012060] text-[#012060] text-xs font-bold rounded-md"
                      >
                      {tag}
                      </span>
                    ))}
                  </div>
  
                  {/* Read More Button */}
                  <button className="mt-4 w-full bg-orange-500 text-white py-2 font-bold rounded-md text-sm">
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
  