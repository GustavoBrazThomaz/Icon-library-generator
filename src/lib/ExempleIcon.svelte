
<script lang="ts">
export let color = '#000'; 
export let gradientFrom: string | undefined = undefined
export let gradientTo: string | undefined = undefined
export let size: string = "1rem"
export let gradientDirection: "top" | "right" | "bottom" | "left" = 'bottom';
export let weight: number = 1

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


 {#if gradientFrom !== undefined && gradientTo !== undefined}
<svg
  xmlns="http://www.w3.org/2000/svg"
  style="width: {size}; height: {size};"
  viewBox="0 0 14 14"
  fill="none"
>
  <g id="id_ExempleIcon">
    <path
      id="icon_ExempleIcon"
      d="M2.3999 11.5994H7.1999L9.64843 3.6001L14.9257 20.4001L16.7883 11.5994H21.5999"
      stroke="url(#grad-ExempleIcon)"
      stroke-width={weight}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>

  <defs>
    <linearGradient id="grad-ExempleIcon" x1={getGradientDirection(gradientDirection).x1} y1={getGradientDirection(gradientDirection).y1} x2={getGradientDirection(gradientDirection).x2} y2={getGradientDirection(gradientDirection).y2}>
      <stop offset="0%" style="stop-color:{gradientFrom};stop-opacity:1" />
      <stop offset="100%" style="stop-color:{gradientTo};stop-opacity:1" />
    </linearGradient>
  </defs>
</svg>
{:else}
<svg
  xmlns="http://www.w3.org/2000/svg"
  style="width: {size}; height: {size};"
  viewBox="0 0 14 14"
  fill="none"
>
  <g id="id_ExempleIcon">
    <path
      id="icon_ExempleIcon"
      d="M2.3999 11.5994H7.1999L9.64843 3.6001L14.9257 20.4001L16.7883 11.5994H21.5999"
      stroke={color}
      stroke-width={weight}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>

</svg>
{/if}  
      