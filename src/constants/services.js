import React from "react"
import {
  GiCompass,
  GiDiamondHard,
  GiBullseye,
  //GiStabbedNote, GiBank, GiPiggyBank, GiRoundStar,GiBriefcase,
} from "react-icons/gi"

import { FaRegHandshake } from "react-icons/fa"

export default [
  {
    id: 1,
    icon: <GiCompass className="icon" />,
    label: "mission",
    text:
      " Develop beautiful responsive custom digital solutions for salons and spas with exemplary customer service.",
  },
  {
    id: 2,
    icon: <GiDiamondHard className="icon" />,
    label: "vision",
    text:
      " We are a professional and energetic full-service digital agency helping small businesses in the Beauty industry bring new clients to their doors and drive brand awareness.",
  },
  {
    id: 3,
    icon: <GiBullseye className="icon" />,
    //icon: <GiStabbedNote className="icon" />,
    label: "results",
    text:
      " Through our innovative web solutions, we will build and enhance an everlasting bond between you and your customer.",
  },
  {
    id: 4,
    icon: <FaRegHandshake className="icon" />,
    label: "partnership",
    text:
      " We value a true partnership with all of our clients and treat their success as necessary as our own.",
  },
]
