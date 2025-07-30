<script lang="ts">
const colorMap = {
   "normal":"bg-slate-300",
   "fighting":"bg-orange-200",
	"flying":"bg-blue-200",
	"fire":"bg-red-400",
	"water":"bg-blue-600",
	"grass":"bg-green-400",
	"electric":"bg-yellow-400",
	"psychic":"bg-pink-400",
	"ice":"bg-cyan-300",
	"dragon":"bg-indigo-600",
	"dark":"bg-brown-600",
	"fairy":"bg-pink-200",
	"poison":"bg-purple-200",
	"ground":"bg-brown-200",
	"rock":"bg-gray-200",
	"bug":"bg-lime-300",
	"ghost":"bg-purple-500",
	"steel":"bg-blue-400",
	"stellar":"bg-cyan-100",

};
let { name, url } = $props();

</script>
<li class="shadow rounded-lg px-2 py-0.5 {colorMap[name]}">
 <span class="capitalize">{name}</span>
</li>
