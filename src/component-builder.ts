import { Icons } from "./icons";

export const svelteIcons = (icon: Icons) => {
  return `
  <script lang="ts">
  interface GradientObj {
    colors: [string, string];
    direction: "top" | "right" | "bottom" | "left";
  }
  export let color = "#000";
  export let gradient: GradientObj = {
    colors: ["", ""],
    direction: "bottom",
  };
  export let size: string = "1rem";
  export let weight: number = 1;

  const getGradientDirection = (direction: string) => {
    switch (direction) {
      case "top":
        return { x1: "0%", y1: "100%", x2: "0%", y2: "0%" };
      case "right":
        return { x1: "0%", y1: "0%", x2: "100%", y2: "0%" };
      case "bottom":
        return { x1: "0%", y1: "0%", x2: "0%", y2: "100%" };
      case "left":
        return { x1: "100%", y1: "0%", x2: "0%", y2: "0%" };
      default:
        return { x1: "0%", y1: "0%", x2: "0%", y2: "100%" };
    }
  };
</script>

{#if gradient.colors[1] !== ""}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style="width: {size}; height: {size};"
    viewBox="${icon.viewBox}"
    fill="none"
  >
    <g id="id_${icon.name}">
      <path
        id="icon_${icon.name}"
        d="${icon.d}"
        stroke="url(#grad-${icon.name})"
        stroke-width={weight}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>

    <defs>
      <linearGradient
        id="grad-${icon.name}"
        x1={getGradientDirection(gradient.direction).x1}
        y1={getGradientDirection(gradient.direction).y1}
        x2={getGradientDirection(gradient.direction).x2}
        y2={getGradientDirection(gradient.direction).y2}
      >
        <stop
          offset="0%"
          style="stop-color:{gradient.colors[0]};stop-opacity:1"
        />
        <stop
          offset="100%"
          style="stop-color:{gradient.colors[1]};stop-opacity:1"
        />
      </linearGradient>
    </defs>
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style="width: {size}; height: {size};"
    viewBox="${icon.viewBox}"
    fill="none"
  >
    <g id="id_${icon.name}">
      <path
        id="icon_${icon.name}"
        d="${icon.d}"
        stroke={color}
        stroke-width={weight}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
{/if}

  `;
};
