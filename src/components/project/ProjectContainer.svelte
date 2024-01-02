<script lang="ts">
  function applyHoverEffect(percent: number, scale: number) {
    const projects = document.querySelectorAll<HTMLElement>(".projects");
    for (let i = 0; i < projects.length; ++i) {
      projects[i].style.filter = `grayscale(${percent}%)`;
      projects[i].style.transform = `scale(${scale})`;
    }
    const hovered_project =
      document.querySelectorAll<HTMLElement>(".projects:hover");
    for (let i = 0; i < hovered_project.length; ++i) {
      hovered_project[i].style.filter = `grayscale(0%)`;
      hovered_project[i].style.transform = `scale(1.05)`;
    }
  }

  function handleScroll() {
    const scrollWidth = projectContainer.scrollWidth;
    const scrollLeft = projectContainer.scrollLeft;
    const clientWidth = projectContainer.clientWidth;
    const percent = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    progress!.style.width = `${Math.min(100, percent)}%`;
    remain!.style.width = `${100 - percent}%`;
  }

  type IProject = {
    title: string;
    image: string;
  };
  export let projects: IProject[];
  let projectContainer: HTMLDivElement;
  let progress: HTMLDivElement;
  let remain: HTMLDivElement;
</script>

<div>
  <div class="flex h-full flex-auto">
    <div
      class="no-scrollbar mt-3 flex items-center gap-x-20 overflow-x-scroll overscroll-contain scroll-smooth whitespace-nowrap"
      bind:this={projectContainer}
      on:scroll={() => handleScroll()}
    >
      {#each projects as project, idx}
        <button
          class={`w-fit shrink-0 ${idx == 0 ? "ml-[40px]" : ""} ${
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
              idx % 2 == 0 ? "h-[45vh] md:h-[70vh]" : "h-[30vh] md:h-[40vh]"
            } projects`}
            on:mouseover={() => applyHoverEffect(100, 0.95)}
            on:mouseout={() => applyHoverEffect(0, 1)}
            on:focus={() => applyHoverEffect(100, 0.95)}
            on:blur={() => applyHoverEffect(0, 1)}
          />
        </button>
      {/each}
    </div>
  </div>
  <div class="ml-[40px] mr-[40px] mt-10">
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