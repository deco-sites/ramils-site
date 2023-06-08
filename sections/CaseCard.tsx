import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import ImprovementInfo from "../components/ui/ImprovementInfo.tsx";

export interface EachCase {
  companyImage: LiveImage;
  companyName: string;
  secondaryColor: boolean;
  firstNumberImprovement: string;
  firstImprovement: string;
  secondNumberImprovement?: string;
  secondImprovement?: string;
  thirdNumberImprovement?: string;
  thirdImprovement?: string;
}

export interface Props {
  cases: EachCase[];
}

export default function CaseCard({ cases }: Props) {
  return (
    <>
    {cases?.map(({
      companyImage,
      companyName,
      secondaryColor,
      firstNumberImprovement,
      firstImprovement,
      secondImprovement,
      secondNumberImprovement,
      thirdImprovement,
      thirdNumberImprovement,
    }) => (
      <div
        class={`h-screen ${
          secondaryColor ? "bg-[#0A2121]" : "bg-[#fff]"
        } w-full flex justify-center items-center`}
      >
        <div class="max-w-[1080px] ml-auto mr-auto flex justify-between items-center">
          <div class="w-[65%]">
            <p class="font-bold  mb-8 text-[#02F67C] text-base">
              {companyName}
            </p>
            <div class="flex justify-between align-top pl-[6px] gap-9">
              <ImprovementInfo
                improvement={firstImprovement}
                numberImprovement={firstNumberImprovement}
                secondColor={secondaryColor}
              />
              <ImprovementInfo
                improvement={secondImprovement ? secondImprovement : ""}
                numberImprovement={secondNumberImprovement
                  ? secondNumberImprovement
                  : ""}
                secondColor={secondaryColor}
              />
              <ImprovementInfo
                improvement={thirdImprovement ? thirdImprovement : ""}
                numberImprovement={thirdNumberImprovement
                  ? thirdNumberImprovement
                  : ""}
                secondColor={secondaryColor}
              />
            </div>
            <a
              href="#"
              class={`rounded-sm mt-[70px] ml-auto mr-auto block w-[230px] text-center h-[44px] pt-3 pb-3 ${
                secondaryColor ? "bg-[#fff]" : "bg-[#0A2121]"
              }`}
            >
              <button
                class={`${
                  secondaryColor ? "text-[#0A2121]" : "text-[#fff]"
                } font-semibold`}
              >
                Experimente Grátis
              </button>
            </a>
          </div>
          <div class="w-[35%]">
            <img src={companyImage} />
          </div>
        </div>
      </div>
    ))}
    </>
  );
}
