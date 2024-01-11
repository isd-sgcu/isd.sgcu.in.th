<script>
  export let classProps;
  export let isOpen;
</script>

{#if isOpen}
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class={classProps}
  >
    <g id="Group 1">
      <circle id="Ellipse 3" cx="21" cy="21" r="20.5" stroke="white" />
      <g id="Line 6">
        <line
          x1="29.6171"
          y1="29.3243"
          x2="12.6466"
          y2="12.3537"
          stroke="white"
        />
        <line
          x1="29.6171"
          y1="29.3243"
          x2="12.6466"
          y2="12.3537"
          stroke="white"
        />
        <line
          x1="29.6171"
          y1="29.3243"
          x2="12.6466"
          y2="12.3537"
          stroke="white"
        />
      </g>
      <g id="Line 7">
        <line
          x1="12.6464"
          y1="28.6171"
          x2="29.617"
          y2="11.6466"
          stroke="white"
        />
        <line
          x1="12.6464"
          y1="28.6171"
          x2="29.617"
          y2="11.6466"
          stroke="white"
        />
        <line
          x1="12.6464"
          y1="28.6171"
          x2="29.617"
          y2="11.6466"
          stroke="white"
        />
      </g>
    </g>
  </svg>
{:else}
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class={classProps}
  >
    <rect
      x="0.5"
      y="0.5"
      width="41"
      height="41"
      rx="20.5"
      stroke="white"
      stroke-miterlimit="8.20551"
      stroke-linejoin="round"
    />
    <line x1="9" y1="13.5" x2="33" y2="13.5" stroke="white" />
    <line x1="9" y1="21.5" x2="33" y2="21.5" stroke="white" />
    <line x1="9" y1="29.5" x2="33" y2="29.5" stroke="white" />
  </svg>
{/if}
