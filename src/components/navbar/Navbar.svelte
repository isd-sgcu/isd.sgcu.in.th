<script lang="ts">
  import Menu from "./Menu.svelte";
  import LogoSgcu from "./LogoSGCU.svelte";
  import NavLink from "./NavLink.svelte"

  let open = false;
</script>

<nav id="nav" class="w-screen z-[8000] text-white bg-primary {open ? 'h-screen fixed' : ''}">
  <div class="flex sticky w-full items-center justify-between py-4 bg-primary px-4 lg:px-10">
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
      class="flex px-10 pb-10 fixed flex-col items-start mt-[30%] w-screen h-screen gap-10 animate-sliding-left"
    >
      <NavLink direct="home"/>
      <NavLink direct="project"/>
      <NavLink direct="join"/>
      <NavLink direct="contact"/>
    </div>
  {/if}
</nav>
