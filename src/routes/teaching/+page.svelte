<script>
	import { base } from '$app/paths';

	const courses = [
		{
			title: 'Make Your Data FAIR',
			role: 'Designer & Teacher',
			period: '2024\u20132025',
			institution: 'Utrecht University Library / GEO-Inquire',
			description: 'Series of 7 online workshops on FAIR guidelines for research data and software.',
			audience: 'Researchers'
		},
		{
			title: 'Responsible and Effective Use of Generative AI',
			role: 'Designer & Teacher',
			period: '2024',
			institution: 'UU Skills Academy',
			description: '5 sessions (10h, 2.5 EC) on technical and ethical aspects of integrating generative AI in research.',
			audience: 'Bachelor/Master students'
		},
		{
			title: 'Text Mining Crash Course',
			role: 'Designer & Teacher',
			period: '2023\u20132024',
			institution: 'UU Skills Academy',
			description: '5 sessions (10h, 2.5 EC) teaching basic text mining techniques for research.',
			audience: 'Bachelor/Master students'
		},
		{
			title: 'Data Exploration Toolkit for Cultural Data',
			role: 'Designer & Teacher',
			period: '2024\u20132025',
			institution: 'Center for Digital Humanities, Utrecht',
			description: 'Workshop on structuring, cleaning, visualizing, and analyzing cultural data. Delivered every semester.',
			audience: 'Humanities researchers'
		},
		{
			title: 'Data Exploration Toolkit and Beyond',
			role: 'Designer & Teacher',
			period: '2024\u20132025',
			institution: 'Utrecht University Library',
			description: 'Series of 4 workshops on datasets, data models, ontologies, knowledge graphs, and coding.',
			audience: 'Library staff'
		},
		{
			title: 'Introduction to Python',
			role: 'Designer & Teacher',
			period: '2024\u20132025',
			institution: 'Utrecht University Library',
			description: '8-hour workshop teaching basic programming and data analysis with Python.',
			audience: 'Researchers, all faculties'
		},
		{
			title: 'Introduction to R and Data',
			role: 'Teacher & Assistant',
			period: '2023\u20132024',
			institution: 'Utrecht University Library',
			description: '8-hour workshop on basic programming and data analysis with R.',
			audience: 'Researchers, all faculties'
		},
		{
			title: 'Making an Audience-Focused Presentation',
			role: 'Designer & Teacher',
			period: '2019',
			institution: 'Shanghai Astronomical Observatory',
			description: 'Series of 5 sessions on communicating scientific results effectively.',
			audience: 'Researchers'
		},
		{
			title: 'Particle Cosmology / Stellar Atmospheres / Kosmologie',
			role: 'Teaching Assistant',
			period: '2012\u20132013',
			institution: 'Anton Pannekoek Institute, Amsterdam',
			description: 'Teaching assistant for master and bachelor courses in astrophysics.',
			audience: 'BSc/MSc students'
		}
	];
</script>

<svelte:head>
	<title>Teaching - Stefano Rapisarda</title>
</svelte:head>

<div class="page-content">
	<div class="container">

		<header class="page-header">
			<h1 class="page-title">Teaching</h1>
			<p class="page-intro">
				Navigator, storyteller, performer. On guiding students through unfamiliar terrain.
			</p>
		</header>

		<!-- Philosophy -->
		<section class="section">
			<h2>Philosophy</h2>

			<div class="prose">
				<p>
					I believe that good teaching is acting as a navigator. A good teacher guides
					students through the swamp of unfamiliar concepts and the torrents of media- and
					AI-generated information, turning those landscapes into territory they can explore
					with confidence, creativity, and personal ownership.
				</p>
				<p>
					My main enjoyment in teaching comes from making a positive impact on students'
					mindsets, perspectives, and future actions. I once learned that a former humanities
					student, after tackling my text-mining course&mdash;a quite hard and technical
					subject for him&mdash;went on to secure an internship in the field. Moments like
					that are the most rewarding of my entire teaching experience.
				</p>
				<p>
					Sitting behind the table inevitably creates a sense of hierarchy. However, I prefer
					to see myself as a Virgil&mdash;a companion guiding students through often
					unfamiliar and challenging terrain&mdash;rather than a traditional teacher. Creating
					a safe environment, where every opinion is welcome and can be respectfully critiqued
					but never judged, is essential to encouraging active participation.
				</p>
			</div>
		</section>

		<!-- Inspirations -->
		<section class="section">
			<h2>Inspirations</h2>

			<div class="inspirations-grid">
				<div class="inspiration-card">
					<h3>Storytelling</h3>
					<p>
						Human beings pass on knowledge through stories. I see students as both
						audience and protagonists. On day one I introduce the course's "main conflict":
						a real-world problem that anchors the subject and establishes the narrative of
						the entire course. Every student confronts a "fatal flaw"&mdash;the temptation
						to slip into passive mode. My goal is to propel them onto a hero's journey,
						where they tackle obstacles head-on and emerge transformed.
					</p>
				</div>

				<div class="inspiration-card">
					<h3>Performance</h3>
					<p>
						Teaching is, at its heart, a live performance. With a background in classical
						piano performance, I instinctively draw on the parallels between the lecture
						hall and the concert stage. I rehearse each session the way I'd prepare a
						musical performance, crafting a program that alternates active participation,
						attentive listening, and moments for quiet reflection. Years of musicianship
						have also made me intimately familiar with stage fright&mdash;rather than
						fighting it, I channel anxiety into a positive force.
					</p>
				</div>

				<div class="inspiration-card">
					<h3>Unconventional Teachers</h3>
					<p>
						Some teachers seem to ignore every conventional rule, yet I could listen to
						them for hours. Richard Feynman, Robert Sapolsky, and Leonard Susskind are
						prime examples: their charisma and clarity keep entire rooms rapt. I'm
						fascinated by the "magic" behind their lectures and constantly analyze how they
						capture attention, hoping to weave a little of that spell into my own teaching.
					</p>
				</div>
			</div>
		</section>

		<!-- Highlights -->
		<section class="section">
			<h2>Design Highlights</h2>

			<div class="highlight">
				<div class="highlight-text">
					<h3>The Human Neural Network</h3>
					<p>
						How do you explain neural networks to students with no technical background?
						We turned the classroom into one. Students became "neurons," each responsible
						for recognizing a specific feature of a chicken. Images were displayed on screen,
						and students raised their hands if they detected their assigned feature. If more
						than 50% raised their hands, the image was classified as a chicken.
					</p>
					<p>
						Unsurprisingly, this led to misclassifications&mdash;which helped illustrate the
						need for training. We then assigned higher weights to certain features, meaning
						some raised hands counted as two votes. Core principles of neural networks,
						conveyed without a single line of code or math.
					</p>
				</div>
				<div class="highlight-image">
					<img src="{base}/images/human_nn2.png" alt="Human Neural Network classroom activity" />
				</div>
			</div>

			<div class="highlight reverse">
				<div class="highlight-text">
					<h3>Pen-and-Paper Databases</h3>
					<p>
						In the Cultural Data Workshop, designed for humanities students with no data
						experience, groups were handed sets of physical objects&mdash;coins, books,
						paintings&mdash;and asked to design a database using only pen and paper.
					</p>
					<p>
						This compelled them to think critically about the relationship between physical
						and digital representations, to make deliberate choices about column names and
						data formats, and to recognize that "raw data" is never neutral&mdash;it is
						always a product of interpretation and design.
					</p>
				</div>
				<div class="highlight-image">
					<img src="{base}/images/det_fron_page.png" alt="Cultural Data workshop website" />
				</div>
			</div>
		</section>

		<!-- Course Catalog -->
		<section class="section">
			<h2>Courses</h2>

			<div class="courses">
				{#each courses as course}
					<div class="course-entry">
						<div class="course-header">
							<h3>{course.title}</h3>
							<span class="course-role">{course.role}</span>
						</div>
						<p class="course-description">{course.description}</p>
						<div class="course-meta">
							<span>{course.period}</span>
							<span class="meta-sep">/</span>
							<span>{course.institution}</span>
							<span class="meta-sep">/</span>
							<span>{course.audience}</span>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Training -->
		<section class="section">
			<h2>Teaching-Related Training</h2>
			<ul class="training-list">
				<li><span class="training-year">2024</span> Teaching in Higher Education (UTQ), Utrecht University</li>
				<li><span class="training-year">2023\u20132024</span> Start to Teach, Utrecht University</li>
				<li><span class="training-year">2023</span> From Training to Gaming: gamification in training sessions, UU Library</li>
				<li><span class="training-year">2023</span> Learning About Learning Data Literacy, UU Library</li>
				<li><span class="training-year">2015</span> Presentation Skills, University of Amsterdam</li>
			</ul>
		</section>

	</div>
</div>

<style>
	.page-content {
		padding: 8rem 0 4rem;
	}

	.page-header {
		max-width: 640px;
		margin: 0 auto 4rem;
		text-align: center;
	}

	.page-title {
		font-size: 2.5rem;
		font-weight: 300;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--color-text-heading);
		margin-bottom: 1rem;
	}

	.page-intro {
		font-size: 1.05rem;
		color: var(--color-muted);
		font-style: italic;
		line-height: 1.7;
	}

	/* Sections */
	.section {
		max-width: 800px;
		margin: 0 auto 4rem;
	}

	.section h2 {
		font-size: 1rem;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--color-accent);
		margin-bottom: 1.5rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid var(--color-border);
	}

	/* Prose */
	.prose p {
		margin-bottom: 1.25rem;
		line-height: 1.8;
		font-size: 1rem;
	}

	/* Inspirations */
	.inspirations-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}

	.inspiration-card {
		padding: 1.75rem;
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		background: var(--color-bg-card);
	}

	.inspiration-card h3 {
		font-size: 1.05rem;
		font-weight: 500;
		margin-bottom: 0.75rem;
	}

	.inspiration-card p {
		font-size: 0.92rem;
		color: var(--color-muted);
		line-height: 1.7;
	}

	/* Highlights */
	.highlight {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2.5rem;
		align-items: center;
		margin-bottom: 3rem;
	}

	.highlight.reverse {
		direction: rtl;
	}

	.highlight.reverse > * {
		direction: ltr;
	}

	.highlight-text h3 {
		font-size: 1.15rem;
		font-weight: 500;
		margin-bottom: 0.75rem;
	}

	.highlight-text p {
		font-size: 0.92rem;
		color: var(--color-muted);
		line-height: 1.7;
		margin-bottom: 0.75rem;
	}

	.highlight-image {
		border-radius: var(--radius);
		overflow: hidden;
		border: 1px solid var(--color-border);
	}

	.highlight-image img {
		width: 100%;
		display: block;
	}

	/* Courses */
	.course-entry {
		padding: 1.5rem 0;
		border-bottom: 1px solid var(--color-border);
	}

	.course-entry:first-child {
		border-top: 1px solid var(--color-border);
	}

	.course-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 1rem;
		margin-bottom: 0.5rem;
	}

	.course-header h3 {
		font-size: 1rem;
		font-weight: 500;
	}

	.course-role {
		font-size: 0.8rem;
		color: var(--color-accent);
		white-space: nowrap;
		flex-shrink: 0;
	}

	.course-description {
		font-size: 0.9rem;
		color: var(--color-text);
		line-height: 1.6;
		margin-bottom: 0.5rem;
	}

	.course-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		font-size: 0.8rem;
		color: var(--color-muted);
	}

	.meta-sep {
		opacity: 0.4;
	}

	/* Training */
	.training-list {
		list-style: none;
	}

	.training-list li {
		padding: 0.6rem 0;
		font-size: 0.9rem;
		color: var(--color-text);
		border-bottom: 1px solid var(--color-border);
	}

	.training-list li:first-child {
		border-top: 1px solid var(--color-border);
	}

	.training-year {
		color: var(--color-muted);
		font-size: 0.8rem;
		margin-right: 1rem;
		font-variant-numeric: tabular-nums;
	}

	@media (max-width: 768px) {
		.highlight {
			grid-template-columns: 1fr;
		}

		.highlight.reverse {
			direction: ltr;
		}

		.course-header {
			flex-direction: column;
			gap: 0.25rem;
		}
	}
</style>
