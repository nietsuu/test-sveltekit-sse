<script lang="ts">
    import { sourceSSE } from "$lib/sse";

    sourceSSE("/", ["event0"]);
    sourceSSE("/", ["event0"]);

    setTimeout(() => {
        sourceSSE("/?asd", ["event0"]);
    }, 1000);
</script>
