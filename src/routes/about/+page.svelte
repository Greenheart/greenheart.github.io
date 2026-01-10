<script lang="ts">
    import Link from '$components/Link.svelte'
    import Tiomila2015 from '$assets/images/Tiomila2015.jpg'
</script>

<div class="mx-auto max-w-5xl">
    <h1
        class="xs:text-5xl mb-8 text-center text-4xl leading-none font-black tracking-tight sm:text-6xl lg:text-7xl"
    >
        More about me
    </h1>

    <div class="mx-auto grid max-w-prose gap-4 text-xl sm:text-2xl">
        <p>
            While my core professional work is systems development and making
            convivial technology that benefits people and planet, I also use
            systems thinking as a general lens to view and explore the world.
        </p>

        <p>
            I'm a curious and reflective person, learning something new every
            day and always seeking to improve my understanding of the world, its
            people, and its systems of systems. Making connections, long term
            analyses and abstract thinking are some of my strengths.
        </p>

        <p>
            Beyond my interest in technology and its impact on people and
            planet, I like to spend as much time as possible in nature. Usually
            running, orienteering, or hiking, there's something special with
            navigating in completely new terrain and finding your way. I guess
            this could explain my view of life as a journey where we get to
            learn and improve ourselves and the world around us, leaving a
            better trace for those who follow in our footsteps.
        </p>

        <p>
            Back in the day, I used to exercise and compete in orienteering at a
            high level, but these days, orienteering is more of exciting and
            rewarding way to explore new forests and regions.
        </p>
    </div>

    <h2
        class="xs:text-2xl mb-8 pt-8 text-center text-lg font-black text-balance"
    >
        One of my most exciting orienteering memories so far:
    </h2>

    <figure class="flex flex-col items-center">
        <enhanced:img
            src={Tiomila2015}
            alt="Night time start of the Tiomila 2015 orienteering relay"
            class="mb-4 w-full max-w-5xl"
        />
        <figcaption class="max-w-prose">
            Seconds after the start of Tiomila 2015, one of the world's largest
            orienteering relays. I ran the first leg and somehow got to the top
            5 as we left the arena, later finishing the course as <Link
                href="https://10mila.se/index.php/sv/?option=com_tiomilaresults&year=70&class=8&leg=1&total=1"
                compact
            >
                19th
            </Link> of 318 runners. Best of all, photographer <Link
                href="https://www.peterholgersson.se/"
                compact>Peter Holgersson</Link
            >
            captured this moment so beautifully.
        </figcaption>
    </figure>
</div>
