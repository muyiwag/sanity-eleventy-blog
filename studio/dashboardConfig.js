export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60a51546421076f88c4b2cd0',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-zdnvqqqx',
                  apiId: '2b2bd43f-1cd7-4822-94a2-7703415af0ec'
                },
                {
                  buildHookId: '60a51546790771129447cf2e',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-cmq3zvc1',
                  apiId: '7116fa85-aef5-4c69-b6b8-ec882b3ddefb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/muyiwag/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-cmq3zvc1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
