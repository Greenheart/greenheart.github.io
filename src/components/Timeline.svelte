<script lang="ts">
    type Entry = {
        title: string
        description?: string
    }
    type Year = {
        year: number
        entries: Entry[]
    }
    // TODO: Review timeline entries
    // TODO: Title case all titles
    // TODO: spell check all texts
    const data: Year[] = [
        {
            year: 2019,
            entries: [
                {
                    title: "Joined We Don't Have Time",
                    description: '',
                },
                {
                    title: '',
                    description: '',
                },
            ],
        },
        {
            year: 2018,
            entries: [
                {
                    title: 'Shifted my focus to the climate crisis',
                    description:
                        'As I realized the severity of the climate crisis, I started learning about climate, sustainability and joined several initiatives. Contributed primarily with community organizing and web development.',
                },
                {
                    title: '',
                    description: '',
                },
            ],
        },
        {
            year: 2017,
            entries: [
                {
                    title: 'Started studying at Chalmers University of Technology',
                },
                {
                    title: 'First tech talk at Borås Developer Meetup',
                    description:
                        'Shared the story about freeCodeCamp.org, our progress so far and what we had learned while growing a massive community.',
                },
                {
                    title: 'System Developer at WooCode',
                    description:
                        'A really exciting time, working together with a great team and learning a lot about. In the end, I decided to stay true to my intention to study IT at Chalmers.',
                },
            ],
        },
        {
            year: 2016,
            entries: [
                {
                    title: 'System Developer Intern at Nobia',
                    description:
                        'Designed and contributed to a MES administration tool built with C# and ASP.NET. Taught another intern programming and then used pair programming to complete our assignments.',
                },
                {
                    title: 'Graduated High School',
                    description:
                        'I ended up with a heavy focus on programming and IT, taking as many related courses as I could officially and learned more outside of class.',
                },
                {
                    title: 'Joined the freeCodeCamp.org Core Team',
                    description:
                        'Supported the open source community, contributed with improved course material, and co-created a solution for learning fullstack development with Node.js directly in the browser (using a predecessor to https://glitch.com).',
                },
                {
                    title: 'Decided to no longer focus on elite orienteering',
                    description:
                        "With more opportunities opening up in the programming world, I had to challenge my dreams and re-evaluate what I wanted. At the time a tough choice, but in the end a good outcome. Best part is that I still enjoy orienteering to this day and regularly go for forest runs. The elite commitment taught me a lot which I'm grateful for.",
                },
            ],
        },
        {
            year: 2015,
            entries: [
                {
                    title: 'High school thesis',
                    description:
                        'Wrote about the Meteor.js framework for developing prototype applications, and built several projects while evaluating the technology.',
                },
                {
                    title: 'Worked with IT during O-Ringen Borås 2015',
                    description:
                        "The world's largest orienteering competition with more than 20k participants and a lot of administration. All systems (mostly) operational!",
                },
                {
                    title: 'First open source contributions',
                    description:
                        'Got lovely support and inspiration from other freeCodeCamp.org contributors. This truly showed the potential of open source.',
                },
                {
                    title: 'Joined the freeCodeCamp.org community',
                    description:
                        'It was love at first sight when I found this community to learn development together with others. I was active in the community chat rooms, and quickly became a pair programming mentor, helping others and learning myself while doing so.',
                },
            ],
        },
        {
            year: 2014,
            entries: [
                {
                    title: 'Built my first websites and games',
                    description:
                        'Shifted my focus to web development and JavaScript to build more interactive experiences.',
                },
            ],
        },
        {
            year: 2013,
            entries: [
                {
                    title: 'Started programming daily',
                    description:
                        'Started learning Python in a more structured way. Partly thanks to my studies, but mainly because I wanted to start building my own projects. Built several small Python projects and had a lot of fun.',
                },
                {
                    title: 'Won 3/3 bronze medals at the Swedish Youth Championship',
                    description:
                        'Three very stable orienteering races, but I wanted more! This motivated me to keep working hard towards my goal of one day running for the Swedish National team.',
                },
                {
                    title: 'Got accepted to Eksjö Riksidrottsgymnasium',
                    description:
                        'A very important part of my youth was about orienteering, traveling around Sweden and exploring nature. I really wanted to combine IT studies with elite orienteering and was so happy when I got accepted to one of the best learning environments in Sweden for combining elite orienteering and regular studies.',
                },
            ],
        },
        {
            year: 2011,
            entries: [
                {
                    title: 'First programming experience',
                    description:
                        "Java was exciting because it was used for Minecraft, and a friend got me excited about the possibilities with programming. It wasn't the best language for me to get started with, but from this moment, I knew I wanted to work with technology.",
                },
            ],
        },
        {
            year: 2010,
            entries: [
                {
                    title: 'Started at Kunskapsskolan Borås',
                    description:
                        'With my personal mentor, the freedom to decide my schedule, goals and priorities, this was a golden opportunity to challenge my abilities, and start developing a growth mindset. This sparked my curiosity and has proven to be a very worthwile investment.',
                },
            ],
        },
        {
            year: 2006,
            entries: [
                {
                    title: 'First orienteering competition',
                },
            ],
        },
        {
            year: 1997,
            entries: [
                {
                    title: 'Connected to the Matrix',
                    description:
                        "Don't ask me how this happened two years before The Matrix was publicly available...",
                },
            ],
        },
    ]
</script>

<div class="">
    <h2 class="mt-8 text-5xl font-bold">Timeline</h2>
    {#each data as { year, entries }}
        <h2 class="mt-4 text-3xl font-bold">{year}</h2>
        {#each entries as { title, description }}
            <h3 class="my-2 text-2xl font-bold">{title}</h3>
            {#if description}
                <p>{description}</p>
            {/if}
        {/each}
    {/each}
</div>
