export interface Props {
  numberImprovement: string;
  improvement: string;
  secondColor: boolean;
}

export default function ImprovementInfo(
  { improvement, numberImprovement, secondColor }: Props,
) {
  return (
    <div class="flex max-w-[175px] flex-col justify-center">
      <div class="relative mb-5 w-[95px] ml-auto mr-auto">
        <div class="bg-[#02F67C] h-[95px] w-[95px] rounded-[50%] font-bold text-[24px] text-[#fff] flex justify-center items-center">
          {numberImprovement}
        </div>
        <div
          class={`bg-none border-[1px] h-[95px] w-[95px] rounded-[50%] left-[-6px] bottom-[-8px] border-solid ${
            secondColor ? "border-[#fff]" : "border-[#0A2121]"
          } absolute`}
        >
        </div>
      </div>
      <h2
        class={`text-center underline font-semibold text-[18px] ${
          secondColor ? "text-[#fff]" : "text-[#0A2121]"
        }`}
      >
        {improvement}
      </h2>
    </div>
  );
}
