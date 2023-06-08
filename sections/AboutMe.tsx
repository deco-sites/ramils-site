import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  yourPhoto: LiveImage;
  yourName: string;
  yourDescription?: string;
}

export default function AboutMe(
  { yourPhoto, yourName, yourDescription }: Props,
) {
  return (
    <section class="p-9 flex align-middle justify-center flex-wrap">
      <img class="rounded-md mb-3" src={yourPhoto} width={170} height={170} />
      <h1 class="w-full text-center mb-2">{yourName}</h1>
      <h3 class="w-full text-center">{yourDescription}</h3>
    </section>
  );
}
