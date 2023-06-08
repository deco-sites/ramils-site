import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import ImprovementInfo from "../components/ui/ImprovementInfo.tsx";

export interface Props {
  companyImage: LiveImage;
  companyName: string;
  firstNumberImprovement: string;
  firstImprovement: string;
  secondImprovement?: string;
  secondNumberImprovement?: string;
  thirdImprovement?: string;
  thirdNumberImprovement?: string;
}

export default function CaseCard(
  { companyImage, companyName, firstImprovement, firstNumberImprovement }:
    Props,
) {
  return (
    <>
      <div class="h-screen bg-[#0A2121] w-full flex justify-center items-center">
        <div class="max-w-[1080px] ml-auto mr-auto flex justify-between items-center">
          <div class="w-[65%]">
            <p class="font-bold  mb-8 text-[#02F67C] text-base">
              {companyName}
            </p>
            <div class="flex justify-between align-top pl-[6px] gap-9">
              <ImprovementInfo
                firstImprovement={firstImprovement}
                firstNumberImprovement={firstNumberImprovement}
                secondColor={true}
              />
              <ImprovementInfo
                firstImprovement={firstImprovement}
                firstNumberImprovement={firstNumberImprovement}
                secondColor={true}
              />
              <ImprovementInfo
                firstImprovement={firstImprovement}
                firstNumberImprovement={firstNumberImprovement}
                secondColor={true}
              />
            </div>
            <a
              href="#"
              class="rounded-sm mt-[70px] ml-auto mr-auto block w-[230px] text-center h-[44px] pt-3 pb-3 bg-[#fff]"
            >
              <button class="text-[#0A2121] font-semibold">
                Experimente Grátis
              </button>
            </a>
          </div>
          <div class="w-[35%]">
            <img src={companyImage} />
          </div>
        </div>
      </div>
      <div class="h-screen w-full flex justify-center items-center">
        <div class="max-w-[1080px] ml-auto mr-auto flex justify-between items-center">
          <div class="w-[65%]">
            <p class="font-bold  mb-8 text-[#02F67C] text-base">
              {companyName}
            </p>
            <div class="flex justify-between align-top pl-[6px] gap-9">
              <ImprovementInfo
                firstImprovement={firstImprovement}
                firstNumberImprovement={firstNumberImprovement}
                secondColor={false}
              />
              <ImprovementInfo
                firstImprovement={firstImprovement}
                firstNumberImprovement={firstNumberImprovement}
                secondColor={true}
              />
              <ImprovementInfo
                firstImprovement={firstImprovement}
                firstNumberImprovement={firstNumberImprovement}
                secondColor={false}
              />
            </div>
            <a
              href="#"
              class="rounded-sm mt-[70px] ml-auto mr-auto block w-[230px] text-center h-[44px] pt-3 pb-3 bg-[#0A2121]"
            >
              <button class="text-[#fff] font-semibold">
                Experimente Grátis
              </button>
            </a>
          </div>
          <div class="w-[35%]">
            <img src={companyImage} />
          </div>
        </div>
      </div>
    </>
  );
}
