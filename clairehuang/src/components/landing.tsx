export const Landing = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Mobile Background */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('./landing-s.png')" }}
      />
      {/* Desktop Background */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('./landing.png')" }}
      />
      {/* Content */}
      <div className="relative h-full flex flex-col justify-between text-[15px] md:text-[20px] px-s md:px-m text-dark-navy">
        {/* Top Row */}
        <div className="text-left py-m">
          <p>
            Claire Huang <br />
            Software Engineer <br />
            IT Support
          </p>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-row items-end justify-between w-full py-l gap-s ">
          <p className="text-left">
            Innovator. <br /> Problem-Solver. <br />
            Coffee Enthusiast.
          </p>
          <p className="text-right">
            Developer by Day, <br />
            Explorer by Weekend.
          </p>
        </div>
      </div>
    </div>
  );
};
