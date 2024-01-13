
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
    viewBox="0 0 24 24"
    fill="none"
  >
    <g id="id_EyeOpen">
      <path
        id="icon_EyeOpen"
        d="M14.3999 12.0293C14.3999 13.319 13.3254 14.3646 11.9999 14.3646C10.6744 14.3646 9.5999 13.319 9.5999 12.0293C9.5999 10.7395 10.6744 9.6939 11.9999 9.6939C13.3254 9.6939 14.3999 10.7395 14.3999 12.0293Z"
        stroke="url(#grad-EyeOpen)"
        stroke-width={weight}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>

    <defs>
      <linearGradient
        id="grad-EyeOpen"
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
    viewBox="0 0 24 24"
    fill="none"
  >
    <g id="id_EyeOpen">
      <path
        id="icon_EyeOpen"
        d="M14.3999 12.0293C14.3999 13.319 13.3254 14.3646 11.9999 14.3646C10.6744 14.3646 9.5999 13.319 9.5999 12.0293C9.5999 10.7395 10.6744 9.6939 11.9999 9.6939C13.3254 9.6939 14.3999 10.7395 14.3999 12.0293Z"
        stroke={color}
        stroke-width={weight}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
{/if}

  