<script lang="ts">
    import RightArrow from "./RightArrow.svelte";

  export let direct: string;
  let hoverText = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:mouseenter={() => {
    hoverText = true;
  }}
  on:mouseleave={() => {
    hoverText = false;
  }}
>
  <a
    href="/{ direct === "home" ? "" : direct}"
    class="flex cursor-pointer items-center duration-700 hover:ml-4"
  >
    <RightArrow
      classProps="h-9 w-9 lg:h-32 lg:w-32 {hoverText ? 'block' : 'block'}"
    />
    {#each direct as character}
      <div class=" text-4xl lg:text-9xl {hoverText
        ? '-scale-x-100 duration-700 hover:ml-4'
        : ''}">
        {character.toUpperCase()}
      </div>
    {/each}
  </a>
</div>
