<script lang="ts">
  let open = false;
  let hoverHome = false;
  let hoverProject = false;
  let hoverJoin = false;
  let hoverContact = false;

  const SGCU = "./navbar/logo-sgcu.svg";
  const MENU_HAMBURGER = "./navbar/menu-idle.svg";
  const MENU_CLOSE = "./navbar/menu-close.svg";
  const RIGHT_ARROW = "./navbar/rightArrow.png";
</script>

<nav id="nav" class="fixed w-full bg-primary px-4 text-white lg:px-10">
  <div class="bg-blue flex justify-between py-4">
    <img src={SGCU} alt="pic" class="h-8 lg:h-24" />
    <div class="flex flex-row items-center">
      <p class="font-['Space Grotesk'] mr-2 text-base font-light lg:mr-6">
        MENU
      </p>
      <button
        on:click={() => {
          open = !open;
        }}
      >
        {#if open}
          <img src={MENU_CLOSE} alt="" class="h-8 lg:h-12" />
        {:else}
          <img src={MENU_HAMBURGER} alt="" class="h-8 lg:h-12" />
        {/if}
      </button>
    </div>
  </div>

  {#if open}
    <div
      class="font-['JetBrains Mono'] relative mt-[30%] flex min-h-screen animate-sliding-left flex-col justify-start gap-10 px-4 align-middle text-4xl font-light lg:mt-12 lg:text-9xl"
    >
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="menu-container hover:ml-6"
        on:mouseenter={() => {
          hoverHome = true;
        }}
        on:mouseleave={() => {
          hoverHome = false;
        }}
      >
        <a href="/home" class="flex {hoverHome ? 'hover-menu' : ''}">
          <img
            src={RIGHT_ARROW}
            alt=""
            class="w-9 lg:w-32 {hoverHome ? 'block' : 'hidden'}"
          />
          <p>H</p>
          <p>O</p>
          <p>M</p>
          <p>E</p>
        </a>
      </div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="menu-container hover:ml-6"
        on:mouseenter={() => {
          hoverProject = true;
        }}
        on:mouseleave={() => {
          hoverProject = false;
        }}
      >
        <a href="/project" class="flex {hoverProject ? 'hover-menu' : ''}">
          <img
            src={RIGHT_ARROW}
            alt=""
            class="w-9 lg:w-32 {hoverProject ? 'block' : 'hidden'}"
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
        class="menu-container hover:ml-6"
        on:mouseenter={() => {
          hoverJoin = true;
        }}
        on:mouseleave={() => {
          hoverJoin = false;
        }}
      >
        <a href="/join" class="flex {hoverJoin ? 'hover-menu' : ''}">
          <img
            src={RIGHT_ARROW}
            alt=""
            class="w-9 lg:w-32 {hoverJoin ? 'block' : 'hidden'}"
          />
          <p>J</p>
          <p>O</p>
          <p>I</p>
          <p>N</p>
        </a>
      </div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="menu-container hover:ml-6"
        on:mouseenter={() => {
          hoverContact = true;
        }}
        on:mouseleave={() => {
          hoverContact = false;
        }}
      >
        <a href="/contact" class="flex {hoverContact ? 'hover-menu' : ''} ">
          <img
            src={RIGHT_ARROW}
            alt=""
            class="w-9 lg:w-32 {hoverContact ? 'block' : 'hidden'}"
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
  .hover-menu > p {
    @apply -scale-x-100 duration-700;
  }
  .menu-container {
    @apply flex cursor-pointer flex-row duration-500;
  }
</style>
