<script lang="ts">
  export let showModal: boolean;

  type IProject = {
    title: string;
    slug: string;
    time: string;
    description: string;
    images: string[];
    repo: string[];
  };

  let dialog: HTMLDialogElement;
  export let selected_project: IProject;

  $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
  class="w-2/3 bg-primary text-white"
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click|stopPropagation>
    <div class="flex flex-col p-5">
      <div class="my-4 flex w-full flex-row items-center px-4">
        <h1 class="mt-3 flex text-4xl font-bold">
          {selected_project.title}
        </h1>
        <!-- svelte-ignore a11y-autofocus -->
        <button
          class="flex grow justify-end text-lg font-light text-[#807F7E]"
          autofocus
          on:click={() => dialog.close()}
        >
          Back to projects
        </button>
      </div>
      <h2 class="px-4 text-2xl font-light">
        Project Date: {selected_project.time}
      </h2>
      <img
        src={`/project/${selected_project.images[0] ? "rpkm66.png" : "rpkm66.png"}`}
        alt={selected_project.title}
        class="h-96 object-cover p-4"
      />
      <h3 class="px-4 text-3xl font-semibold">About</h3>
      <p class="px-4 text-lg">{selected_project.description}</p>
      {#if selected_project.repo.length > 0}
        <h3 class="px-4 text-3xl font-semibold">Github</h3>
        <div class="px-4">
          <div class="flex flex-col">
            {#each selected_project.repo as repo}
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                class="text-lg"
              >
                {repo}
              </a>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>
</dialog>

<style>
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.6);
  }
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.5);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.3s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
