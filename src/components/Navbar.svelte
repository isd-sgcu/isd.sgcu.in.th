<script lang="ts">

    let open = false;
    let hoverHome = false;
    let hoverProduct = false;
    let hoverJoin = false;
    let hoverContact = false;
    
    const SGCU = "src/assets/navbar/logo-sgcu.svg"
    let MENU_HAMBURGER = "src/assets/navbar/menu-idle.svg"
    let MENU_CLOSE = "src/assets/navbar/menu-close.svg"

    function toggle(variable: boolean) {
        variable = !variable;
    }   

</script>

<nav class="fixed bg-gray-900 px-10 w-full text-white font-['Space Grotesk']">
    <div class="flex bg-blue justify-between py-4">
        <img src={SGCU} alt="pic" class="h-24">
        <div class="flex flex-row items-center">
            <p class="mr-6 text-base font-light ">Menu</p>
            <button on:click={() => toggle(open)}>
                {#if open}
                    <img src={MENU_CLOSE} alt="pic" class="h-12" />
                {:else}
                    <img src={MENU_HAMBURGER} alt="pic" class="h-12"/>
                {/if}
            </button>
        </div>
    </div>
    
    {#if open}
        <div class={"gap-10 flex flex-col h-screen text-9xl align-middle mt-12 animate-sliding-left"}>
            <!-- svelte-ignore a11y-interactive-supports-focus -->
            <div 
            class="flex hover:ml-16"
            role = "button"
            on:mouseenter={() => {hoverHome = true;}}
            on:mouseleave={() => {hoverHome = false;}}
            >
                <p class={hoverHome ? "block" : "hidden"} >-</p>
                <p class={ (hoverHome) ? "-scale-x-100 " : ""}>H</p>
                <p class={ (hoverHome) ? "-scale-x-100 " : ""}>O</p>
                <p class={ (hoverHome) ? "-scale-x-100 " : ""}>M</p>
                <p class={ (hoverHome) ? "-scale-x-100 " : ""}>E</p>
            </div>
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div 
            class="flex hover:ml-16"
            on:mouseenter={() => {hoverProduct = true;}}
            on:mouseleave={() => {hoverProduct = false;}}
            >
                <p class={hoverProduct ? "block" : "hidden"} >-</p>
                <p class={ (hoverProduct) ? "-scale-x-100 " : ""}>P</p>
                <p class={ (hoverProduct) ? "-scale-x-100 " : ""}>R</p>
                <p class={ (hoverProduct) ? "-scale-x-100 " : ""}>O</p>
                <p class={ (hoverProduct) ? "-scale-x-100 " : ""}>D</p>
                <p class={ (hoverProduct) ? "-scale-x-100 " : ""}>U</p>
                <p class={ (hoverProduct) ? "-scale-x-100 " : ""}>C</p>
                <p class={ (hoverProduct) ? "-scale-x-100 " : ""}>T</p>
            </div>
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="flex hover:ml-16"
            on:mouseenter={() => {hoverJoin = true;}}
            on:mouseleave={() => {hoverJoin = false;}}
            >
                <p class={hoverJoin ? "block" : "hidden"} >-</p>
                <p class={ (hoverJoin) ? "-scale-x-100":""}>J</p>
                <p class={ (hoverJoin) ? "-scale-x-100":""}>O</p>
                <p class={ (hoverJoin) ? "-scale-x-100":""}>I</p>
                <p class={ (hoverJoin) ? "-scale-x-100":""}>N</p>
            </div>
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="flex hover:ml-16"
            on:mouseenter={() => {hoverContact = true;}}
            on:mouseleave={() => {hoverContact = false;}}
            >
                <p class={hoverContact ? "block" : "hidden"} >-</p>
                <p class={ (hoverContact) ? "-scale-x-100 " : ""}>C</p>
                <p class={ (hoverContact) ? "-scale-x-100" : ""}>O</p>
                <p class={ (hoverContact) ? "-scale-x-100" : ""}>N</p>
                <p class={ (hoverContact) ? "-scale-x-100" : ""}>T</p>
                <p class={ (hoverContact) ? "-scale-x-100" : ""}>A</p>
                <p class={ (hoverContact) ? "-scale-x-100" : ""}>C</p>
                <p class={ (hoverContact) ? "-scale-x-100" : ""}>T</p>
            </div>
            
        </div>  
    {/if}
    
</nav>
