import { motion as m } from "framer-motion";
import { container, items } from "../animation";

export default function Portfolio() {
  return (
    <m.main
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-myPurple myTupi"
    >
      <div className="mt-40 p-10 overflow-hidden border-b border-black">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "60%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-9xl font-myTupiBold"
        >
          FRONT END DEVELOPMENT
        </m.h1>
      </div>
      <div>
        <div>
          <div className="flex">Hello</div>
        </div>
      </div>
    </m.main>
  );
}
