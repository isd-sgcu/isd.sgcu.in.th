<script lang="ts">
  import Menu from "./Menu.svelte";
  import LogoSgcu from "./LogoSGCU.svelte";
  import RightArrow from "./RightArrow.svelte";

  let open = false;
  let hoverHome = false;
  let hoverProject = false;
  let hoverJoin = false;
  let hoverContact = false;
</script>

<nav id="nav" class="z-50 w-full bg-primary px-4 text-white lg:px-10">
  <div class="bg-blue flex items-center justify-between py-4">
    <LogoSgcu
      classProps="flex justify-start relative w-5 h-8 lg:h-24 lg:w-14"
    />
    <div class="flex flex-row items-center">
      <p class="mr-2 text-base font-light lg:mr-6">Menu</p>
      <button
        on:click={() => {
          open = !open;
        }}
      >
        <Menu classProps="h-8 lg:h-12" isOpen={open} />
      </button>
    </div>
  </div>

  {#if open}
    <div
      class="transfrom relative mt-[30%] flex min-h-screen animate-sliding-left flex-col gap-10 px-4 align-middle text-4xl font-light lg:mt-12 lg:justify-start lg:text-9xl"
    >
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        on:mouseenter={() => {
          hoverHome = true;
        }}
        on:mouseleave={() => {
          hoverHome = false;
        }}
      >
        <a
          href="/"
          class="menu-container {hoverHome ? 'hover-menu hover:ml-4' : ''}"
        >
          <RightArrow
            classProps="h-9 w-9 lg:h-32 lg:w-32 {hoverHome
              ? 'block'
              : 'hidden'}"
          />
          <p>H</p>
          <p>O</p>
          <p>M</p>
          <p>E</p>
        </a>
      </div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        on:mouseenter={() => {
          hoverProject = true;
        }}
        on:mouseleave={() => {
          hoverProject = false;
        }}
      >
        <a
          href="/project"
          class="menu-container {hoverProject ? 'hover-menu hover:ml-4' : ''}"
        >
          <RightArrow
            classProps="h-9 w-9 lg:h-32 lg:w-32 {hoverProject
              ? 'block'
              : 'hidden'}"
          />
          <p>P</p>
          <p>R</p>
          <p>O</p>
          <p>J</p>
          <p>E</p>
          <p>C</p>
          <p>T</p>
        </a>
      </div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        on:mouseenter={() => {
          hoverJoin = true;
        }}
        on:mouseleave={() => {
          hoverJoin = false;
        }}
      >
        <a
          href="/join"
          class="menu-container {hoverJoin ? 'hover-menu hover:ml-4' : ''}"
        >
          <RightArrow
            classProps="h-9 w-9 lg:h-32 lg:w-32 {hoverJoin
              ? 'block'
              : 'hidden'}"
          />
          <p>J</p>
          <p>O</p>
          <p>I</p>
          <p>N</p>
        </a>
      </div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        on:mouseenter={() => {
          hoverContact = true;
        }}
        on:mouseleave={() => {
          hoverContact = false;
        }}
      >
        <a
          href="/contact"
          class="menu-container {hoverContact ? 'hover-menu hover:ml-4' : ''}"
        >
          <RightArrow
            classProps="h-9 w-9 lg:h-32 lg:w-32 {hoverContact
              ? 'block'
              : 'hidden'}"
          />
          <p>C</p>
          <p>O</p>
          <p>N</p>
          <p>T</p>
          <p>A</p>
          <p>C</p>
          <p>T</p>
        </a>
      </div>
    </div>
  {/if}
</nav>

<style lang="postcss">
  .menu-container {
    @apply flex cursor-pointer items-center duration-700;
  }
  .hover-menu > p {
    @apply -scale-x-100 duration-700;
  }
</style>
