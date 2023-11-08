<Fragment>
<a href={`/launch/${id}`} class="rounded-lg border shadow-md bg-gray-800 border-gray-700
hover:scale-105 hover:bg-gray-700 transi flex flex-col">
<picture class="flex justify-center p-4">
<img class="mb-5 rounded-lg" src={img} alt={`Patch for launch ${id}`} />
</picture>

<header class="p-4 flex-grow">
<span class={`text-xs font-semibold mr-2 px-2.5 py-0.5 rounded`}>Por hacer </span>

<h2 class="my-2 text-2xl font-bold tracking-tight text-white">
Flight #{flightNumber}
</h2>

<p class="mb-4 font-light text-gray-400">
{details !== null?.length > 100 ? details.slice(0, 100) + "..." : details}
</p>
</header>
</a>

</Fragment>;
