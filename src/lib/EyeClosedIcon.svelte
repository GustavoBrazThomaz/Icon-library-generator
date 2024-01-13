
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
    <g id="id_EyeClosed">
      <path
        id="icon_EyeClosed"
        d="M20.3999 19.5001L5.3999 4.50012M10.1999 10.4417C9.82648 10.8534 9.5999 11.3942 9.5999 11.9864C9.5999 13.2762 10.6744 14.3218 11.9999 14.3218C12.611 14.3218 13.1688 14.0995 13.5926 13.7335M20.4387 14.3218C21.2649 13.0849 21.5999 12.0763 21.5999 12.0763C21.5999 12.0763 19.4153 5.10012 11.9999 5.10012C11.5836 5.10012 11.1838 5.12211 10.7999 5.16362M17.3999 17.3496C16.0225 18.2283 14.2492 18.8496 11.9999 18.8129C4.67683 18.6931 2.3999 12.0763 2.3999 12.0763C2.3999 12.0763 3.45776 8.6982 6.5999 6.64344"
        stroke="url(#grad-EyeClosed)"
        stroke-width={weight}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>

    <defs>
      <linearGradient
        id="grad-EyeClosed"
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
    <g id="id_EyeClosed">
      <path
        id="icon_EyeClosed"
        d="M20.3999 19.5001L5.3999 4.50012M10.1999 10.4417C9.82648 10.8534 9.5999 11.3942 9.5999 11.9864C9.5999 13.2762 10.6744 14.3218 11.9999 14.3218C12.611 14.3218 13.1688 14.0995 13.5926 13.7335M20.4387 14.3218C21.2649 13.0849 21.5999 12.0763 21.5999 12.0763C21.5999 12.0763 19.4153 5.10012 11.9999 5.10012C11.5836 5.10012 11.1838 5.12211 10.7999 5.16362M17.3999 17.3496C16.0225 18.2283 14.2492 18.8496 11.9999 18.8129C4.67683 18.6931 2.3999 12.0763 2.3999 12.0763C2.3999 12.0763 3.45776 8.6982 6.5999 6.64344"
        stroke={color}
        stroke-width={weight}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
{/if}

  