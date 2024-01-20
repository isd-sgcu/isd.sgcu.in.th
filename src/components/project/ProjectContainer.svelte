<script lang="ts">
  import { onMount } from "svelte";

  function applyHoverEffect(percent: number, scale: number) {
    for (let i = 0; i < projectElements.length; ++i) {
      projectElements[i].style.filter = `grayscale(${percent}%)`;
      projectElements[i].style.transform = `scale(${scale})`;
    }
    if (hoverIndex == -1) return;
    projectElements[hoverIndex].style.filter = `grayscale(0%)`;
    projectElements[hoverIndex].style.transform = `scale(1)`;
  }

  function handleScroll() {
    const scrollWidth = projectContainer.scrollWidth;
    const scrollLeft = projectContainer.scrollLeft;
    const clientWidth = projectContainer.clientWidth;
    const percent = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    progress.style.width = `${Math.min(100, percent)}%`;
    remain.style.width = `${100 - percent}%`;
  }

  type IProject = {
    title: string;
    image: string;
  };
  export let projects: IProject[];
  let projectContainer: HTMLDivElement;
  let progress: HTMLDivElement;
  let remain: HTMLDivElement;
  let projectElements: NodeListOf<HTMLImageElement>;
  let hoverIndex: number = -1;

  onMount(() => {
    projectElements = document.querySelectorAll<HTMLImageElement>(".project");
  });
</script>

<div>
  <div class="flex h-full flex-auto">
    <div
      class="no-scrollbar mt-3 flex items-center gap-x-12 overflow-x-scroll overscroll-contain scroll-smooth whitespace-nowrap md:gap-x-20"
      bind:this={projectContainer}
      on:scroll={() => handleScroll()}
    >
      {#each projects as project, idx}
        <button
          class={`shrink-0 ${idx == 0 ? "ml-[40px]" : ""} ${
            idx == projects.length - 1 ? "mr-[40px]" : ""
          }`}
          on:click={() => {
            window.location.pathname = `project/${project.title}`;
          }}
        >
          <img
            src={`/project/${project.image}`}
            alt={project.title}
            class={`duration-300 ease-in-out ${
              idx % 2 == 0 ? "h-[40vh] md:h-[60vh]" : "h-[25vh] md:h-[40vh]"
            } project z-0`}
            on:mouseover={() => {
              hoverIndex = idx;
              applyHoverEffect(100, 0.9);
            }}
            on:mouseout={() => {
              hoverIndex = -1;
              applyHoverEffect(0, 1);
            }}
            on:focus={() => {
              hoverIndex = idx;
              applyHoverEffect(100, 0.9);
            }}
            on:blur={() => {
              hoverIndex = -1;
              applyHoverEffect(0, 1);
            }}
          />
        </button>
      {/each}
    </div>
  </div>
  <div class="ml-[40px] mr-[40px] mt-3">
    <div class="flex h-1 w-full flex-row">
      <div class="h-1 bg-white" bind:this={progress}></div>
      <div class="h-1 w-full bg-gray-600" bind:this={remain}></div>
    </div>
  </div>
</div>

<style>
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
