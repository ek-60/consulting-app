import React from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { IconButton, Tooltip, Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialWidgets() {
  return (
    <div className="bg-white">
      <Tooltip content="sähköposti@jsdf.com">
        <Button variant="text" className="hover:bg-white">
          <AiOutlineMail className="lg:text-6xl text-4xl bg-white text-[#490B3D] " />
        </Button>
      </Tooltip>
      <Tooltip content="+35839329943">
        <Button variant="text" className="hover:bg-white">
          <AiOutlinePhone className="lg:text-6xl text-4xl bg-white text-[#490B3D]" />
        </Button>
      </Tooltip>
      <Tooltip content="LinkedIn">
        <Button variant="text" className="hover:bg-white">
          <AiOutlineLinkedin className="lg:text-6xl text-4xl bg-white text-[#490B3D]" />
        </Button>
      </Tooltip>
    </div>
  );
}

export default SocialWidgets;
