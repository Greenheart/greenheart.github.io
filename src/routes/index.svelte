<script context="module" lang="ts">
    import TechStack from '../components/TechStack.svelte'
    import CTALink from '../components/CTALink.svelte'
</script>

<img
    src="/images/samuel.png"
    alt="Samuel"
    class="rounded-full shadow-2xl mx-auto w-32 h-32 sm:w-40 sm:h-40 mb-8"
/>

<section class="grid text-center justify-center">
    <h1
        class="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl leading-none font-black tracking-tight mb-8"
    >
        Hey! I'm Samuel.
    </h1>
    <h2
        class="text-xl sm:text-3xl lg:text-4xl leading-6 font-black tracking-tight mb-12"
    >
        <div class="bg-mantis transform -skew-y-1 p-2 shadow-2xl">
            <span class="whitespace-nowrap">Sustainability Entrepreneur</span>
            &
            <span class="whitespace-nowrap">Fullstack Developer.</span>
        </div>
    </h2>
</section>

<section class="grid grid-cols-1 max-w-prose mx-auto">
    <p class="text-xl sm:text-2xl mb-4">
        Since 2015, I've worked with teams of designers and developers to
        maximize our positive impact in the world.
    </p>
    <p class="text-xl sm:text-2xl mb-4">
        I'm passionate about how open source communities can support a
        sustainable future, where both humanity and the living planet thrive.
    </p>

    <h2
        class="mt-2 text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-none text-center"
    >
        Let's co-create a sustainable future!
    </h2>

    <!-- TODO: Replace with better contact solution -->
    <CTALink href="mailto:samuel.plumppu@gmail.com">Get in touch</CTALink>
</section>

<hr class="my-16 max-w-sm mx-auto border-ming" />

<TechStack />

<hr class="my-16 max-w-sm mx-auto border-ming" />

<section class="max-w-prose mx-auto">
    <h2
        class="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-none text-center mb-6"
    >
        Additional Skills
    </h2>

    <p class="text-xl sm:text-2xl mb-8">
        Working with early stage startups and teams with limited resources has
        taught me to focus on the work with the highest impact. This allows me
        to contribute with more than just code to help the team succeed.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
        <ul
            class="font-light tracking-wide flex flex-col items-center space-y-2 bg-white p-4 w-80 sm:w-72 shadow-lg rounded-sm"
        >
            <li>Product strategy</li>
            <li>Attention to detail</li>
            <li>Mentorship & team growth</li>
            <li>Design systems</li>
            <li>Community building</li>
        </ul>
        <ul
            class="font-light tracking-wide flex flex-col items-center space-y-2 bg-white p-4 w-80 sm:w-72 shadow-lg rounded-sm"
        >
            <li>UI/UX design</li>
            <li>Humane tech & ethical design</li>
            <li>Quick learning</li>
            <li>Modern web build tools</li>
            <li>Improved development practices</li>
        </ul>
    </div>
</section>

<hr class="my-16 max-w-sm mx-auto border-ming" />

<section class="grid text-center justify-center grid-cols-1">
    <h2
        class="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-none text-center"
    >
        Let's co-create a sustainable future!
    </h2>

    <!-- TODO: Replace with better contact solution -->
    <CTALink href="mailto:samuel.plumppu@gmail.com">Get in touch</CTALink>
</section>

<!-- TODO: List 3 latest posts. CTA link to see all posts on the /blog page -->
<!-- TODO: Contact info. Potentially add a contact form to connect securely -->
