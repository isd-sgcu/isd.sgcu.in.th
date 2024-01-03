<script lang="ts">
  let open = false;
  let hoverHome = false;
  let hoverProduct = false;
  let hoverJoin = false;
  let hoverContact = false;

  const SGCU = "src/assets/navbar/logo-sgcu.svg";
  let MENU_HAMBURGER = "src/assets/navbar/menu-idle.svg";
  let MENU_CLOSE = "src/assets/navbar/menu-close.svg";
  let RIGHT_ARROW = "src/assets/navbar/rightArrow.png";
</script>

<nav id="nav" class="fixed bg-stone-950 px-4 lg:px-10 w-full text-white">
  <div class="flex bg-blue justify-between py-4">
    <img src={SGCU} alt="pic" class="h-8 lg:h-24" />
    <div class="flex flex-row items-center">
      <p class="mr-2 lg:mr-6 text-base font-light font-['Space Grotesk']">
        Menu
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
      class="mt-3 align-middle relative gap-10 flex flex-col min-h-screen px-4 text-4xl justify-start font-['JetBrains Mono'] font-light lg:mt-12 lg:text-9xl animate-sliding-left"
    >
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="cursor-pointer hover:ml-6 duration-700"
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
            class={hoverHome ? "block" : "hidden"}
          />
          <p>H</p>
          <p>O</p>
          <p>M</p>
          <p>E</p>
        </a>
      </div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="flex cursor-pointer hover:ml-6 duration-700"
        on:mouseenter={() => {
          hoverProduct = true;
        }}
        on:mouseleave={() => {
          hoverProduct = false;
        }}
      >
        <a href="/project" class="flex {hoverProduct ? 'hover-menu' : ''}">
          <img
            src={RIGHT_ARROW}
            alt=""
            class={hoverProduct ? "block" : "hidden"}
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
        class="flex cursor-pointer hover:ml-6 duration-700"
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
            class={hoverJoin ? "block" : "hidden"}
          />
          <p>J</p>
          <p>O</p>
          <p>I</p>
          <p>N</p>
        </a>
      </div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="flex cursor-pointer hover:ml-6 duration-700"
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
            class={hoverContact ? "block" : "hidden"}
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
</style>
