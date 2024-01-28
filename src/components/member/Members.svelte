<script lang="ts">
  import ProfileCard from "./ProfileCard.svelte";
  import type { OrgMember } from "./types.ts";
  export let OrgMembers: OrgMember[];
</script>

<section>
  <div class="container bg-blue-500">
    <p class="text-4xl font-bold text-white">Members</p>
    <div class="inline-flex items-center justify-center">
      <div class="profile-container">
        {#if !OrgMembers ||OrgMembers.length === 0}
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
</section>
