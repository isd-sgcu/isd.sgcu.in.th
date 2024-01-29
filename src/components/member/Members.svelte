<script lang="ts">
  import ProfileCard from "./ProfileCard.svelte";
  import type { OrgMember } from "./types.ts";
  export let OrgMembers: OrgMember[];
</script>

<section>
  <div
    class="mb-20 flex flex-col items-center justify-center gap-4 px-8 text-center"
  >
    <div class="w-3/4">
      <p class="text-4xl font-medium text-white">Members</p>
      <div class="mt-6 flex w-full flex-col justify-center lg:my-20">
        <div class="inline-flex flex-wrap justify-center">
          {#if !OrgMembers || OrgMembers.length === 0}
            <p>No Public Members found...</p>
          {:else}
            {#each OrgMembers as member}
              <ProfileCard
                username={member.login}
                avatarURL={member.avatar_url}
                profileURL={member.html_url}
              />
            {/each}
          {/if}
        </div>
      </div>
    </div>
    <a href="https://github.com/orgs/isd-sgcu/people">
      <button
        class="item-center rounded-lg border border-[#807F7E] bg-transparent px-4 py-2 font-normal text-[#807F7E] duration-100 hover:bg-[#807F7E] hover:text-primary"
      >
        All members
      </button>
    </a>
  </div>
</section>
