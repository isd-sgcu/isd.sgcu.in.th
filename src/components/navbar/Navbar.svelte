<script lang="ts">
  import Menu from "./Menu.svelte";
  import LogoSgcu from "./LogoSGCU.svelte";
  import NavLink from "./NavLink.svelte";

  let open = false;
</script>

<nav
  id="nav"
  class="z-[4000] m-0 w-screen bg-primary text-white {open
    ? 'fixed h-screen'
    : ''}"
>
  <div class="bg-primary">
    <div
      class=" z-[8000] flex w-full items-center justify-between px-4 py-4 lg:px-10 {open
        ? 'fixed'
        : 'sticky'}"
    >
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
        class="font-['JetBrains Mono'] fixed flex h-full w-full animate-sliding-left flex-col items-start justify-center gap-10 px-10 lg:my-10"
      >
        <NavLink direct="home" />
        <NavLink direct="project" />
        <NavLink direct="join" />
        <NavLink direct="contact" />
      </div>
    {/if}
  </div>
</nav>
