import { ChevronLeft, ChevronRight, UserIcon } from "@assets/icons";
import { ModalImage } from "@assets/images";
import { useState } from "react";
import Logo from "@assets/icons/StyleGenieLogo.png";
import { Box } from "@mui/material";
import styles from "@Layouts/styles";
import Header from "@Components/Header/Header";
import { useNavigate } from "react-router-dom";

const StyleEditor = () => {
  const navigate = useNavigate();
  const editorTools = [
    {
      type: "neckline",
      label: "NeckLine",

      options: [
        {
          label: "Deep V",
          imgLabel: "DeepV.jpg",
        },
        {
          label: "Round Neck",
          imgLabel: "RoundNeck.jpg",
        },
        {
          label: "High Collar",
          imgLabel: "HighCollar.jpg",
        },
      ],
    },
    {
      type: "sleeve",
      label: "Sleeve",
      options: [
        {
          label: "Full Sleeve",
          imgLabel: "FullSleeve.jpg",
        },
        {
          label: "Cap Sleeve",
          imgLabel: "Capsleeve.jpg",
        },
        {
          label: "Sleeveless",
          imgLabel: "Sleeveless.jpg",
        },
      ],
    },
    {
      type: "length",
      label: "Length",

      options: [
        {
          label: "Above Knee",
          imgLabel: "AboveKneeLength.jpg",
        },
        {
          label: "Knee Length",
          imgLabel: "KneeLength.jpg",
        },
        {
          label: "Below Knee",
          imgLabel: "BelowKneeLength.jpg",
        },
      ],
    },
    {
      type: "fit",
      label: "Fit",

      options: [
        {
          label: "Loose",
          imgLabel: "Capsleeve.jpg",
        },
        {
          label: "Regular",
          imgLabel: "Capsleeve.jpg",
        },
        {
          label: "Tight",
          imgLabel: "DeepV.jpg",
        },
      ],
    },
  ];
  const [editorToolIndex, setEditorToolIndex] = useState(0);

  const handlePrev = () => {
    setEditorToolIndex(editorToolIndex - 1);
  };
  const handleNext = () => {
    setEditorToolIndex(editorToolIndex + 1);
  };

  const navigateToAIEnhancements = () => {
    navigate("/ai-enhancer");
  };

  return (
    <>
      <Header />
      <div className=" bg-white flex flex-col    items-center pb-4 px-4 ">
        <div className="text-xl mt-4 mb-2 italic ">Elevate Your Elegance</div>
        <div className=" flex justify-between items-center bg-[#1F363D] rounded-md text-center text-lg font-semibold text-white border p-3 w-full ">
          <button onClick={handlePrev} disabled={editorToolIndex <= 0}>
            <ChevronLeft />
          </button>
          {editorTools[editorToolIndex].label}
          <button
            onClick={handleNext}
            disabled={editorToolIndex >= editorTools.length - 1}
          >
            <ChevronRight />
          </button>
        </div>
        <img
          src={"/assets/images/ModalImage.svg"}
          alt="outfit"
          className="w-full ml-3 my-6  h-[350px]  object-cover "
        />

        <div className="flex  w-full justify-center gap-4 mb-10">
          {editorTools[editorToolIndex].options.map((option, i) => (
            <div key={i}>
              <button className="border border-[#40798C]  rounded-md ">
                <img
                  src={`/assets/icons/${option.imgLabel}`}
                  alt="styles"
                  className="w-20 h-[88px] object-fill"
                />
              </button>
              <div className="text-center font-semibold text-sm text-[#40798C] mt-1">
                {option.label}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between w-full mt-6 max-w-[450px] fixed bottom-0  bg-white p-4 border-t  ">
          <button
            className="py-3 px-6 bg-[#1F363D] text-white rounded-md"
            onClick={navigateToAIEnhancements}
          >
            AI Enhancer
          </button>
          <button className="py-3 px-12 bg-[#1F363D] text-white rounded-md">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default StyleEditor;
