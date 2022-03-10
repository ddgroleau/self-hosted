const articleStore = [
    {
        pageTitle: "Become a Software Engineer in Six Months",
        articleId: "become-a-software-engineer-series-intro",
        image: "coder.jpg",
        imageAlt: "Image of a person programming",
        title: "Zero to Hero: Software Engineer in Six Months - SERIES INTRO",
        isSeries: true,
        series: {
          seriesPart: 1,
          seriesTitle: "Zero to Hero: Software Engineer in Six Months"
        },
        tagline: `Do you want to become a professional software engineer, but are wondering if you need to attend a bootcamp or
        enroll in a higher education?`,
        intro: `This series will show you exactly how, with detailed steps from
        the author's own self-taught journey.`,
        tldr: `I went from zero coding experience to landing my first job as a self-taught  junior developer in six months. 
        This series will take you, in specific detail, through the steps I took to make this happen.`,
        sections: [
          {
            sectionTitle: 'Background',
            items: [
              {
                text:`I was working a mid-level operations position in corporate America, 
                where my primary duties included building the same excel spreadsheets and 
                writing the same templated emails week after week.`,
                element:"p",
                important:""
              },
              {
                text:`I first decided to teach myself how to code in order to automate some of these mindless, manual tasks.`,
                element:"p",
                important:"I first decided to teach myself how to code in order to automate some of these mindless, manual tasks."
              },
              {
                text:`Fast forward three months, and I had vastly improved my performance and efficiency at work  -  what 
              had previously taken me 40 hours to complete manually, was now being done in four hours via programs 
              I wrote.`,
                element:"p",
                important:"I had vastly improved my performance and efficiency at work"
              },
              {
                text:`I came to the realization that the best parts of my day were spent writing new programs, 
                and I set out to train myself to become a software engineer.`,
                element:"p",
                important:"train myself to become a software engineer"
              }
            ]
          },
          
        ],
    },
];

export default articleStore;