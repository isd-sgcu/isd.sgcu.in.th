<script lang="ts">
  export let username: string;
  export let avatarURL: string;
  export let profileURL: string;
</script>

<div>
  <div class="mx-2 my-4 inline-block">
    <a class="no-underline" title={username} href={profileURL}>
      <div
        id="profile"
        class="rounded bg-[#232428] p-2 text-white duration-200 hover:scale-110"
      >
        <div class="flex flex-row items-center">
          <img
            id="image-profile"
            alt={username}
            class="mr-2 h-8 w-8 rounded-full"
            src={avatarURL}
          />
          <p class="text-sm">
            @ {username}
          </p>
        </div>
      </div>
    </a>
  </div>
</div>

<style lang="post-css">
  #image-profile {
    width: 30px;
    height: 30px;
  }
</style>
