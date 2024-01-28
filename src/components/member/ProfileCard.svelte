<script lang="ts">
  export let username: string;
  export let avatarURL: string;
  export let profileURL: string;
</script>

<div>
  <div class="m-2 inline-block">
    <a class="no-underline" title={username} href={profileURL}>
      <div
        id="profile"
        class="rounded bg-[#232428] p-2 text-white hover:scale-110"
      >
        <div class="flex flex-row items-center">
          <img alt={username} class="mr-3 rounded-full" src={avatarURL} />
          <p class="text-sm">
            @ {username}
          </p>
        </div>
      </div>
    </a>
  </div>
</div>
